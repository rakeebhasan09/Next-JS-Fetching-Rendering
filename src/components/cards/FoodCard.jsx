import Link from "next/link";

const FoodCard = ({ food }) => {
	const { title, foodImg, price, category, id } = food;

	return (
		<div className="rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition">
			{/* Image */}
			<div className="overflow-hidden rounded-t-2xl">
				<img
					src={foodImg}
					alt={title}
					className="h-48 w-full object-cover hover:scale-105 transition duration-300"
				/>
			</div>

			{/* Content */}
			<div className="p-4 space-y-2">
				<h3 className="text-lg font-semibold text-gray-800 line-clamp-1">
					{title}
				</h3>

				<p className="text-sm text-gray-500">{category}</p>

				<div className="flex items-center justify-between pt-2">
					<span className="text-xl font-bold text-emerald-600">
						৳{price}
					</span>
				</div>

				{/* Buttons */}
				<div className="grid grid-cols-2 gap-3 pt-4">
					<button className="rounded-xl bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700 transition">
						Add to Cart
					</button>

					<Link
						href={`/foods/${id}`}
						className="flex justify-center rounded-xl border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 transition"
					>
						View Details
					</Link>
				</div>
			</div>
		</div>
	);
};

export default FoodCard;
