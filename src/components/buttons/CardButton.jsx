"use client";
import { CartContext } from "@/context/CartProvider";
import React, { use, useState } from "react";

const CardButton = ({ food }) => {
	const [inCard, setInCard] = useState(false);
	const { addToCart } = use(CartContext);
	const handleAdd2Card = () => {
		addToCart(food);
		setInCard(true);
	};
	return (
		<button
			onClick={handleAdd2Card}
			disabled={inCard}
			className="rounded-xl bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700 transition disabled:bg-gray-300"
		>
			{inCard ? "Added" : "Add to Cart"}
		</button>
	);
};

export default CardButton;
