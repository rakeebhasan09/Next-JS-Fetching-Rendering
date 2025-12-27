"use client";
import ReviewCard from "@/components/cards/ReviewCard";
import React, { useEffect, useState } from "react";
import ReviewsLoading from "./ReviewsLoading";

const ReviewsPage = () => {
	const [reviews, setReviews] = useState([]);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		fetch(" https://taxi-kitchen-api.vercel.app/api/v1/reviews")
			.then((res) => res.json())
			.then((data) => {
				setReviews(data.reviews);
				setLoading(false);
			});
	}, []);
	if (loading) {
		return <ReviewsLoading />;
	}
	return (
		<div>
			<h2 className="text-4xl font-bold">
				All Reviews{" "}
				<span className="text-yellow-400">{reviews.length}</span>
			</h2>
			<div className="grid my-5 grid-cols-3 gap-5">
				{reviews.map((review) => (
					<ReviewCard key={review.id} reviewData={review} />
				))}
			</div>
		</div>
	);
};

export default ReviewsPage;
