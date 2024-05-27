import { PROXY } from "./movie_urls";

const base_url_one = "https://consumet-jade.vercel.app/meta/anilist-manga";
const base_url_two =
	"https://api-consumet-org-ukw6.onrender.com/meta/anilist-manga";

export const search_manga_url = (title) => {
	return `${PROXY}${base_url_one}/${title}`;
};

export const manga_info_url = (id) => {
	return `${PROXY}${base_url_two}/info/${id}?provider=mangadex`;
};
