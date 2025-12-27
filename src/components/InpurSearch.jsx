"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

const InpurSearch = () => {
	const router = useRouter();
	const params = useSearchParams();
	const handleSubmit = (e) => {
		e.preventDefault();
		const searchText = e.target.search.value;

		const newParams = new URLSearchParams(params.toString());
		newParams.set("search", searchText);
		router.push(`?${newParams.toString()}`);
	};
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					className="px-2 py-1.5 border rounded-l outline-0"
					type="text"
					placeholder="Enter Food Name"
					name="search"
				/>
				<button className="px-4 py-2 rounded-r bg-yellow-500 text-black cursor-pointer">
					Search
				</button>
			</form>
		</div>
	);
};

export default InpurSearch;
