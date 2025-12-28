import FeedbackCard from "@/components/cards/FeedbackCard";
import Link from "next/link";
import React from "react";

export const metadata = {
	title: "Feedbacks",
};

const getFeedback = async () => {
	const res = await fetch("http://localhost:3000/api/feedback/");
	return res.json();
};

const FeedbackPage = async () => {
	const feedbacks = await getFeedback();
	console.log(feedbacks);
	return (
		<div>
			<div className="flex items-center justify-between">
				<h2>{feedbacks.length} Feedbacks Found</h2>
				<Link className="btn" href={"/feedbacks/add"}>
					Add Feedback
				</Link>
			</div>
			<div className="my-3 space-y-5">
				{feedbacks.map((feedback) => (
					<FeedbackCard key={feedback._id} feedback={feedback} />
				))}
			</div>
		</div>
	);
};

export default FeedbackPage;
