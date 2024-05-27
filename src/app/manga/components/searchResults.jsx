import { Card, CardBody, Chip } from "@nextui-org/react";
import Link from "next/link";
import Image from "next/image";
import { MdMenuBook } from "react-icons/md";
import { FaRegThumbsUp } from "react-icons/fa6";

const SearchResults = async (data) => {
	return (
		<section className="flex flex-col items-center mt-2">
			{data &&
				data.results.map((item, index) => (
					<Link
						href={`/manga/${item.id}`}
						className="w-[99%] lg:w-[95%]"
					>
						<Card
							key={index}
							isBlurred
							className="border-none dark:bg-[#1f1f1f] w-full mb-2"
							shadow="sm"
							isPressable
							style={{
								backgroundImage: `url(${item.cover})`,
								backgroundPosition: "center",
								backgroundRepeat: "no-repeat",
								backgroundSize: "cover",
							}}
						>
							<CardBody
								className="flex flex-row items-center bg-[#1f1f1fd2]"
								style={{ backdropFilter: "blur(10px)" }}
							>
								<Image
									src={item.image}
									width={200}
									height={300}
									alt="Manga Poster"
									className="w-[140px] h-[200px] lg:h-[300px] lg:w-[200px] rounded-lg"
								/>
								<div className="ml-2">
									<p className="text-xl font-bold lg:text-2xl">
										{item.title.english ||
											item.title.romaji}
									</p>
									<div className="flex items-center mt-1">
										{item.status &&
											(item.status === "Completed" ? (
												<Chip
													color="success"
													size="sm"
													variant="dot"
												>
													{item.status || "not found"}
												</Chip>
											) : (
												<Chip
													color="warning"
													size="sm"
													variant="faded"
												>
													{item.status || "not found"}
												</Chip>
											))}
										<Chip
											color="warning"
											size="sm"
											variant="bordered"
											className="ml-1"
											startContent={<MdMenuBook />}
										>
											{item.totalChapters || "not found"}
										</Chip>
										<Chip
											size="sm"
											variant="bordered"
											className="ml-1"
											startContent={<FaRegThumbsUp />}
										>
											{item.popularity || "not found"}
										</Chip>
									</div>
								</div>
							</CardBody>
						</Card>
					</Link>
				))}
		</section>
	);
};

export default SearchResults;
