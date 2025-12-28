import FoodCard from "@/components/cards/FoodCard";
import React from "react";
import CartItems from "./CartItems";
import InpurSearch from "@/components/InpurSearch";

const getFoods = async (search) => {
	const res = await fetch(
		`https://taxi-kitchen-api.vercel.app/api/v1/foods/random?search=${search}`,
		{ next: { revalidate: 10 } }
	);
	const data = await res.json();
	await new Promise((resolve) => setTimeout(resolve, 3000));
	return data.foods || [];
};

export const metadata = {
	title: "All Foods",
	description: "Best fastfood resturant ever in my web development career.",
};

const FoodsPage = async ({ searchParams }) => {
	const { search = "" } = await searchParams;
	const foods = await getFoods(search);
	return (
		<div>
			<div className="flex items-center justify-between">
				<h2 className="text-4xl font-bold">
					All Foods{" "}
					<span className="text-yellow-400">{foods.length}</span>
				</h2>
				<InpurSearch />
			</div>
			<div className="flex gap-5">
				<div className="flex-1 grid my-5 grid-cols-3 gap-5">
					{foods.map((food) => (
						<FoodCard key={food.id} food={food} />
					))}
				</div>
				<div className="w-62.5 border-2 rounded-xl my-5 p-4">
					<h2 className="text-2xl font-bold">Card Items</h2> <hr />
					<CartItems />
				</div>
			</div>
		</div>
	);
};

export default FoodsPage;
