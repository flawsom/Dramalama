"use client";

import { Input, Progress } from "@nextui-org/react";
import { useState } from "react";

import { SearchManga } from "./requests";
import SearchResults from "./searchResults";

const MangaSearchBar = () => {
	const [mangaTitle, setMangaTitle] = useState("");
	const [loading, setLoading] = useState(<></>);
	const [results, setRes] = useState(<></>);

	async function handleInput() {
		setLoading(
			<Progress
				size="sm"
				isIndeterminate
				aria-label="Loading..."
				className="w-full"
			/>
		);
		const data = await SearchManga(mangaTitle);
		setLoading(<></>);
		setRes(SearchResults(data));
	}

	return (
		<section>
			<div className="flex flex-col gap-4 w-full lg:w-1/2 lg:mx-2">
				<Input
					type="text"
					label="Manga Title"
					placeholder="Enter manga title here"
					autoComplete="off"
					onChange={(event) => {
						if (event.target.value.trim() !== "") {
							setMangaTitle(event.target.value);
						}
					}}
					onKeyDown={async (event) => {
						if (event.key === "Enter" || event.code === "Enter") {
							await handleInput();
						}
					}}
				/>
				{loading}
			</div>
			<div className="overflow-auto">{results}</div>
		</section>
	);
};

export default MangaSearchBar;
