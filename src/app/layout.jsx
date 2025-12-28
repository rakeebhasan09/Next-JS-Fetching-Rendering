import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import CartProvider from "@/context/CartProvider";
import Image from "next/image";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

const poppins = Poppins({
	weight: ["400", "500", "700"],
	subsets: ["latin"],
});

export const metadata = {
	title: {
		default: "Resturant Fastfood",
		template: "%s | Resturant Fastfood",
	},
	description: "Best fastfood resturant ever in my web development career.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${poppins.className} antialiased`}>
				<header className="px-5 py-2 flex items-center justify-between gap-5 bg-stone-800">
					<Link href="/">
						{/* <img src="/logo.png" alt="" className="w-[150px]" /> */}
						<Image
							width={120}
							height={30}
							src="/logo.png"
							alt=""
							className="w-37.5"
						/>
					</Link>

					<div className="space-x-5">
						<Link prefetch={false} href="/foods">
							Foods
						</Link>
						<Link href="/reviews">Reviews</Link>
					</div>
				</header>
				<main className="px-5 py-8">
					<CartProvider>{children}</CartProvider>
				</main>
			</body>
		</html>
	);
}
