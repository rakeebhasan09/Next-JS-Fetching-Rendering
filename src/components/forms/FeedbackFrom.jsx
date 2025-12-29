"use client";

import { useRouter } from "next/navigation";

const FeedbackFrom = () => {
	const router = useRouter();
	const handleAddFeedback = async (e) => {
		e.preventDefault();
		const message = e.target.message.value;

		const res = await fetch("http://localhost:3000/api/feedback/", {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify({ message }),
		});

		const data = await res.json();

		if (data.insertedId) {
			alert("Inserted Successfully!");
			router.push("/feedbacks");
		}
	};
	return (
		<div>
			<form
				onSubmit={handleAddFeedback}
				className="space-y-5 text-center"
			>
				<textarea
					className="w-xl border p-3"
					required
					name="message"
					rows={10}
				></textarea>{" "}
				<hr />
				<button className="btn">Add Feedback</button>
			</form>
		</div>
	);
};

export default FeedbackFrom;
