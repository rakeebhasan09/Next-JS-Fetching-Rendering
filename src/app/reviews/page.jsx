import React from "react";
import ReviewsPage from "./ReviewPage";

export const metadata = {
	title: "Reviews - our clients say",
	description: "Best fastfood resturant ever in my web development career.",
};

const page = () => {
	return (
		<div>
			<ReviewsPage />
		</div>
	);
};

export default page;
