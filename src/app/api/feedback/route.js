import { connect } from "@/app/lib/dbConnect";
import { revalidatePath } from "next/cache";

const feedbackCollection = connect("feedbacks");

export async function GET(request) {
	const result = await feedbackCollection.find().toArray();
	return Response.json(result);
}

export async function POST(request) {
	const { message } = await request.json();
	// যদি ম্যাসেজ না পাওয়া যায়
	if (!message || typeof message !== "string") {
		return Response.json({
			status: 400,
			message: "Please send a message.",
		});
	}

	// নতুন ফিডব্যাক তৈরি
	const newFeedback = { message, date: new Date().toISOString() };

	const result = await feedbackCollection.insertOne(newFeedback);
	revalidatePath("/feedbacks");

	return Response.json(result);
}
