import { feedback } from "../route";

export async function GET(request) {
	return Response.json(feedback);
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
	const newFeedback = { message, id: feedback.length + 1 };
	feedback.push(newFeedback);

	return Response.json({
		acknowledged: true,
		insertedId: newFeedback.id,
	});
}
