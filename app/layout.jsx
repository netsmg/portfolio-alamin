import dynamic from "next/dynamic";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import "./nprogress.css";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
	title: "Alamin | Portofolio",
	description:
		"My name is Al-amin, I'm a web developer and I'm passionate about it. I'm currently studying at Universitas Negeri Malang.",
	author: "Mohammad Al-amin",
	siteUrl: "https://netquize.vercel.app",
	applicationName: "Al-amins",
	keywords: [
		"alamin",
		"alamin2k23",
		"mohammad alamin",
		"al-amin",
		"mohammad al-amin",
		"netquize",
		"alamin portfolio",
		"alamin porto",
		"alvalin",
	],
	openGraph: {
		type: "website",
		url: "https://netquize.vercel.app",
		title: "Al-amin | Portofolio",
		description: "My name is Al-amin, This is my portofolio website.",
		width: 1200,
		height: 630,
		images: [
			{
				url: "/og-image-rev.png",
				alt: "Al-amin Portofolio",
			},
		],
		site_name: "Al-amins | Portofolio",
	},
};


import Chat from "@/components/Chat";

const TopProgressBar = dynamic(() => import("@/components/TopProgressbar"), {
	ssr: false,
});



export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<TopProgressBar />
				<Navbar />
				{children}
				<Chat />
				<Analytics />
			</body>
		</html>
	);
}
