import { connect } from "@/app/lib/dbConnect";
import FeedbackFrom from "@/components/forms/FeedbackFrom";
import React from "react";

const AddFeedback = () => {
	const postFeedback = async (message) => {
		"use server";
		const result = await connect("feedbacks").insertOne({
			message,
			data: new Date(),
		});

		return {
			...result,
			insertedId: result.insertedId.toString(),
		};
	};
	return (
		<div>
			Add Feedback Page
			<FeedbackFrom postFeedback={postFeedback} />
		</div>
	);
};

export default AddFeedback;
