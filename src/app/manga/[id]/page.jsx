import { Chip, Image } from "@nextui-org/react";

import { MangaInfo } from "../components/requests";
import InfoTabs from "../components/infoTabs";

const MangaInfoPage = async ({ params }) => {
	const { id } = params;

	const data = await MangaInfo(id);

	return (
		<section
			className="h-screen bg-white dark:bg-black"
			style={{
				backgroundImage: `radial-gradient(gray 1px, transparent 1px)`,
				backgroundSize: "40px 40px",
			}}
		>
			<section className="absolute inset-0 bg-gradient-to-b from-transparent to-white dark:to-black">
				<section className="pt-12 lg:w-9/12 m-auto">
					<div className="flex items-center justify-center lg:justify-start md:justify-start">
						<Image
							width={190}
							src={data.image}
							alt="Anime Title Poster"
							className="m-2"
							shadow="lg"
							isBlurred
						/>
						<div className="mx-5">
							<h4 className={`text-2xl`}>
								<strong>
									{data.title.english || data.title.romaji}
								</strong>
							</h4>
							<div className="mt-1">
								{data.genres &&
									data.genres.map((item, index) => (
										<Chip
											key={index}
											color="warning"
											variant="faded"
											className="mr-1 mb-1"
										>
											<p className="text-xs">{item}</p>
										</Chip>
									))}
							</div>
						</div>
					</div>
					<InfoTabs data={data} />
				</section>
			</section>
		</section>
	);
};

export default MangaInfoPage;
