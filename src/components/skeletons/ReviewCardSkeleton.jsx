const ReviewCardSkeleton = () => {
	return (
		<div className="bg-white dark:bg-[#0B111E] rounded-2xl shadow-md p-6 space-y-4 animate-pulse">
			{/* User */}
			<div className="flex items-center gap-4">
				<div className="w-12 h-12 rounded-full bg-gray-300 dark:bg-gray-700" />
				<div className="space-y-2">
					<div className="h-4 w-32 bg-gray-300 dark:bg-gray-700 rounded" />
					<div className="h-3 w-24 bg-gray-200 dark:bg-gray-600 rounded" />
				</div>
			</div>

			{/* Rating */}
			<div className="flex gap-2">
				{[...Array(5)].map((_, i) => (
					<div
						key={i}
						className="h-4 w-4 bg-gray-300 dark:bg-gray-700 rounded"
					/>
				))}
			</div>

			{/* Review lines */}
			<div className="space-y-2">
				<div className="h-3 w-full bg-gray-200 dark:bg-gray-700 rounded" />
				<div className="h-3 w-5/6 bg-gray-200 dark:bg-gray-700 rounded" />
				<div className="h-3 w-4/6 bg-gray-200 dark:bg-gray-700 rounded" />
			</div>

			{/* Like button */}
			<div className="h-4 w-12 bg-gray-200 dark:bg-gray-700 rounded" />
		</div>
	);
};

export default ReviewCardSkeleton;
