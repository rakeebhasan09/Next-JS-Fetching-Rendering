export const feedback = [
	{
		id: 1,
		message: "খাবার খুব মজা ছিলো।",
	},
	{
		id: 2,
		message: "ওয়েটারদের ব্যবহার আরো ভালো করতে হবে।",
	},
];

export async function GET(request) {
	return Response.json({
		status: 200,
		message: "Yah! First next jus api has been created.",
	});
}
