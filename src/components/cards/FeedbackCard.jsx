"use client";

const FeedbackCard = ({ feedback }) => {
	const { message, date } = feedback;

	return (
		<div className="bg-white dark:bg-[#0B111E] border border-gray-200 dark:border-gray-700 rounded-xl p-5 shadow-sm space-y-4">
			{/* Message */}
			<p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
				{message}
			</p>

			{/* Footer */}
			<div className="flex items-center justify-between">
				{/* Date */}
				<span className="text-xs text-gray-500">
					{new Date(date).toLocaleDateString("en-GB", {
						day: "2-digit",
						month: "short",
						year: "numeric",
					})}
				</span>

				{/* Actions */}
				<div className="flex gap-2">
					<button className="px-3 py-1 text-xs rounded-md bg-blue-100 text-blue-600 hover:bg-blue-200 transition">
						Update
					</button>

					<button className="px-3 py-1 text-xs rounded-md bg-red-100 text-red-600 hover:bg-red-200 transition">
						Delete
					</button>
				</div>
			</div>
		</div>
	);
};

export default FeedbackCard;
