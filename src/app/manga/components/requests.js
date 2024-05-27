"use server";

import { search_manga_url, manga_info_url } from "../../../../utils/manga_urls";

export const SearchManga = async (title) => {
	console.log(search_manga_url(title));
	const res = await fetch(search_manga_url(title), {
		next: { revalidate: 21600 },
	});
	const data = await res.json();
	return data;
};

export const MangaInfo = async (id) => {
	console.log(manga_info_url(id));
	const res = await fetch(manga_info_url(id), {
		next: { revalidate: 21600 },
	});
	const data = await res.json();
	return data;
};
