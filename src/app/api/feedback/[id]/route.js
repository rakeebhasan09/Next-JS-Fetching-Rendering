import { connect } from "@/app/lib/dbConnect";
import { feedback } from "../../route";
import { ObjectId } from "mongodb";

const feedbackCollection = connect("feedbacks");

// Get Feedback By ID
export async function GET(request, { params }) {
	const { id } = await params;

	if (id.length !== 24) {
		return Response.json({
			status: 400,
			message: "Send correct _id",
		});
	}

	const query = { _id: new ObjectId(id) };
	const result = await feedbackCollection.findOne(query);

	return Response.json(result);
}

// Delete Feedback By ID
export async function DELETE(request, { params }) {
	const { id } = await params;

	if (id.length !== 24) {
		return Response.json({
			status: 400,
			message: "Send correct _id",
		});
	}

	const query = { _id: new ObjectId(id) };
	const result = await feedbackCollection.deleteOne(query);

	return Response.json(result);
}

// Update Feedback By ID
export async function PATCH(request, { params }) {
	const { id } = await params;
	const { message } = await request.json();

	if (id.length !== 24) {
		return Response.json({
			status: 400,
			message: "Send correct _id",
		});
	}

	// যদি ম্যাসেজ না পাওয়া যায়
	if (!message || typeof message !== "string") {
		return Response.json({
			status: 400,
			message: "Please send a message.",
		});
	}

	const query = { _id: new ObjectId(id) };
	const newData = {
		$set: {
			message,
		},
	};
	const result = await feedbackCollection.updateOne(query, newData);

	return Response.json(result);
}
