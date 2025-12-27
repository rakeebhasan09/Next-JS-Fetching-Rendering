"use client";
import { useState } from "react";
import { FaStar, FaRegHeart, FaHeart } from "react-icons/fa";

const ReviewCard = ({ reviewData }) => {
	const { user, photo, rating, review, likes, date } = reviewData;

	const [liked, setLiked] = useState(false);
	const [likeCount, setLikeCount] = useState(likes.length);

	const handleLike = () => {
		setLiked(!liked);
		setLikeCount((prev) => (liked ? prev - 1 : prev + 1));
	};

	return (
		<div className="bg-white dark:bg-[#0B111E] rounded-2xl shadow-md p-6 space-y-4">
			{/* User Info */}
			<div className="flex items-center gap-4">
				<img
					src={photo}
					alt={user}
					className="w-12 h-12 rounded-full object-cover"
				/>
				<div>
					<h4 className="font-semibold text-gray-800 dark:text-white">
						{user}
					</h4>
					<p className="text-xs text-gray-500">
						{new Date(date).toLocaleDateString("en-GB", {
							day: "2-digit",
							month: "short",
							year: "numeric",
						})}
					</p>
				</div>
			</div>

			{/* Rating */}
			<div className="flex items-center gap-1">
				{[...Array(5)].map((_, i) => (
					<FaStar
						key={i}
						className={`${
							i < rating ? "text-yellow-400" : "text-gray-300"
						}`}
					/>
				))}
			</div>

			{/* Review Text */}
			<p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
				{review}
			</p>

			{/* Actions */}
			<div className="flex items-center gap-2">
				<button
					onClick={handleLike}
					className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-300"
				>
					{liked ? (
						<FaHeart className="text-red-500" />
					) : (
						<FaRegHeart />
					)}
					{likeCount}
				</button>
			</div>
		</div>
	);
};

export default ReviewCard;
