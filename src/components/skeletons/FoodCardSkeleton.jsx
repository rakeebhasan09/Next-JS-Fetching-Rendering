const FoodCardSkeleton = () => {
	return (
		<div className="rounded-2xl border border-gray-200 bg-white shadow-sm animate-pulse">
			{/* Image Skeleton */}
			<div className="h-48 w-full rounded-t-2xl bg-gray-200"></div>

			{/* Content Skeleton */}
			<div className="p-4 space-y-3">
				<div className="h-5 w-3/4 rounded bg-gray-200"></div>
				<div className="h-4 w-1/3 rounded bg-gray-200"></div>

				<div className="flex justify-between items-center pt-2">
					<div className="h-6 w-20 rounded bg-gray-200"></div>
				</div>

				<div className="flex gap-3 pt-4">
					<div className="h-10 w-full rounded-xl bg-gray-200"></div>
					<div className="h-10 w-full rounded-xl bg-gray-200"></div>
				</div>
			</div>
		</div>
	);
};

export default FoodCardSkeleton;
