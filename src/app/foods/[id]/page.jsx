import React from "react";
import Link from "next/link";

export async function generateMetadata({ params }) {
	const { id } = await params;

	const res = await fetch(
		`https://taxi-kitchen-api.vercel.app/api/v1/foods/${id}`
	);

	const { details = {} } = await res.json();
	return {
		title: details.title,
	};
}

const getSingleFood = async (id) => {
	const res = await fetch(
		`https://taxi-kitchen-api.vercel.app/api/v1/foods/${id}`,
		{ cache: "no-store" } // always fresh data
	);

	if (!res.ok) return null;

	const data = await res.json();
	return data.details;
};

const page = async ({ params }) => {
	const { id } = await params;
	const food = await getSingleFood(id);

	if (!food) {
		return (
			<div className="flex min-h-[60vh] items-center justify-center">
				<h2 className="text-xl font-semibold text-gray-600">
					Food not found
				</h2>
			</div>
		);
	}

	const { title, foodImg, price, category, area, video } = food;

	return (
		<div className="container mx-auto px-4 py-10">
			<div className="grid gap-8 lg:grid-cols-2">
				{/* Image */}
				<div className="overflow-hidden rounded-2xl border bg-white">
					<img
						src={foodImg}
						alt={title}
						className="h-full w-full object-cover"
					/>
				</div>

				{/* Details */}
				<div className="space-y-4">
					<h1 className="text-3xl font-bold ">{title}</h1>

					<div className="flex flex-wrap gap-3">
						<span className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-700">
							{category}
						</span>
						<span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
							{area}
						</span>
					</div>

					<p className="text-2xl font-semibold text-emerald-600">
						৳{price}
					</p>

					{/* Actions */}
					<div className="flex gap-4 pt-4">
						<button className="rounded-xl bg-emerald-600 px-6 py-3 text-sm font-medium text-white hover:bg-emerald-700 transition">
							Add to Cart
						</button>

						{video && (
							<Link
								href={video}
								target="_blank"
								className="rounded-xl border border-gray-300 px-6 py-3 text-sm font-medium text-gray-700 hover:bg-gray-100 transition"
							>
								Watch Recipe
							</Link>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default page;
