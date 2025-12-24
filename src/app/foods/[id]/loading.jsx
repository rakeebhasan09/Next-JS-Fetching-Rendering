const FoodDetailsSkeleton = () => {
	return (
		<div className="container mx-auto px-4 py-10 animate-pulse">
			<div className="grid gap-8 lg:grid-cols-2">
				{/* Image Skeleton */}
				<div className="h-100 rounded-2xl bg-gray-200"></div>

				{/* Content Skeleton */}
				<div className="space-y-4">
					<div className="h-8 w-3/4 rounded bg-gray-200"></div>

					<div className="flex gap-3">
						<div className="h-6 w-24 rounded-full bg-gray-200"></div>
						<div className="h-6 w-24 rounded-full bg-gray-200"></div>
					</div>

					<div className="h-7 w-32 rounded bg-gray-200"></div>

					<div className="flex gap-4 pt-4">
						<div className="h-12 w-36 rounded-xl bg-gray-200"></div>
						<div className="h-12 w-36 rounded-xl bg-gray-200"></div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FoodDetailsSkeleton;
