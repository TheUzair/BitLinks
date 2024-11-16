"use client";
import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Shorten = () => {
	const [url, setUrl] = useState("");
	const [shortUrl, setShortUrl] = useState("");
	const [generated, setGenerated] = useState(false);

	const isValidUrl = (input) => {
		const urlRegex = /^(https?:\/\/)?([\w\d\-]+\.)+\w{2,}(\/.*)?$/;
		return urlRegex.test(input);
	};

	const isFormValid = isValidUrl(url) && shortUrl.trim().length > 0;

	const generate = async () => {
		try {
			const response = await fetch("/api/generate", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					url,
					shorturl: shortUrl,
				}),
			});

			const result = await response.json();

			if (response.ok) {
				setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shortUrl}`);
				setUrl("");
				setShortUrl("");
				alert(result.message);
			} else {
				console.error("API Error:", result.message);
				alert(result.message || "Failed to generate short URL");
			}
		} catch (error) {
			console.error("Network Error:", error);
			alert("Network error. Please try again later.");
		}
	};

	return (
		<div className="min-h-screen flex flex-col">
			<Navbar />
			<main className="flex-grow bg-purple-100">
				<div className="mx-auto max-w-lg bg-gradient-to-r from-purple-200 to-purple-100 shadow-xl my-16 p-8 rounded-lg flex flex-col gap-6">
					<h1 className="font-extrabold text-5xl text-center text-purple-800">
						Generate Your Short URLs
					</h1>
					<p className="text-center text-purple-700 text-lg">
						Transform your long URLs into short, memorable links in seconds. It&apos;s fast, simple, and efficient!
					</p>
					<div className="flex flex-col gap-6">
						<input
							type="text"
							value={url}
							className="px-4 py-3 border-2 border-purple-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
							placeholder="Enter your URL (e.g., https://example.com)"
							onChange={(e) => {
								setUrl(e.target.value);
							}}
						/>
						<input
							type="text"
							value={shortUrl}
							className="px-4 py-3 border-2 border-purple-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
							placeholder="Enter your preferred short URL"
							onChange={(e) => {
								setShortUrl(e.target.value);
							}}
						/>
						<button
							onClick={generate}
							className={`rounded-full shadow-lg px-6 py-3 text-white font-bold text-lg transform transition-all ease-in-out duration-300 ${isFormValid
									? "bg-purple-500 hover:bg-purple-600 hover:scale-105"
									: "bg-purple-300 cursor-not-allowed"
								}`}
							disabled={!isFormValid}
						>
							Generate Short Link
						</button>
						{generated && (
							<div className="mt-4 text-center">
								<span className="block font-bold text-xl text-purple-700 mb-2">
									Your Shortened Link:
								</span>
								<code className="bg-purple-200 py-2 px-4 rounded-lg text-purple-800 font-mono inline-block">
									<Link target="_blank" href={generated} className="hover:underline">
										{generated}
									</Link>
								</code>
							</div>
						)}
					</div>
					<p className="text-sm text-center text-purple-600 mt-4">
						Your links are secure and will work seamlessly across all platforms.
					</p>
				</div>
			</main>
			<Footer />
		</div>
	);
};

export default Shorten;
