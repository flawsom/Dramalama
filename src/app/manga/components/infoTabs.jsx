"use client";

import { Tabs, Tab, Card, CardBody, Image, Chip } from "@nextui-org/react";
import Link from "next/link";
import { MdMenuBook } from "react-icons/md";

const InfoTabs = ({ data }) => {
	return (
		<section className="w-full mt-1">
			<div className="flex w-full flex-col">
				<Tabs aria-label="Description">
					<Tab key="description" title="Description">
						<Card>
							<CardBody
								dangerouslySetInnerHTML={{
									__html: data.description,
								}}
							></CardBody>
						</Card>
					</Tab>
					<Tab key="relation" title="Relations">
						<Card>
							<CardBody>
								{data.relations &&
									data.relations.map((item, index) => (
										<Card
											shadow="md"
											key={index}
											className="flex flex-row items-center mb-2 p-1"
										>
											<Image
												src={item.image}
												width={100}
												height={150}
												shadow="md"
												isBlurred
												className="p-1"
											></Image>
											<CardBody className="ml-1">
												<h3 className="text-md lg:text-xl">
													{item.title.english ||
														item.title.romaji}
												</h3>
												<p className="lowercase text-amber-300">
													({item.relationType})
												</p>
											</CardBody>
										</Card>
									))}
							</CardBody>
						</Card>
					</Tab>
					<Tab key="information" title="Information">
						<Card>
							<CardBody>
								<h4>
									<strong>Status</strong>:{" "}
									<span>{data.status}</span>
								</h4>
								<h4>
									<strong>Started on</strong>:{" "}
									<span>
										{data.startDate.day}-
										{data.startDate.month}-
										{data.startDate.year}
									</span>
								</h4>
								<h4>
									<strong>Ended on</strong>:{" "}
									<span>
										{data.endDate.day}-{data.endDate.month}-
										{data.endDate.year}
									</span>
								</h4>
								<h4>
									<strong>Ratings</strong>:{" "}
									<span>{Number(data.rating) / 10} / 10</span>
								</h4>
							</CardBody>
						</Card>
					</Tab>
					<Tab key="recommendations" title="Recommendations">
						<Card>
							<CardBody>
								{data.recommendations &&
									data.recommendations.map((item, index) => (
										<Link href={`/manga/${item.id}`}>
											<Card
												key={index}
												shadow="md"
												className="flex flex-row items-center mb-2 p-1 w-full"
												isPressable
											>
												<Image
													shadow="md"
													isBlurred
													src={item.image}
													width={120}
													className="p-1"
												></Image>
												<CardBody className="ml-1">
													<h3 className="text-xl">
														{item.title.english ||
															item.title.romaji}
													</h3>
													<div className="flex items-center">
														<Chip
															color="warning"
															size="sm"
															variant="bordered"
															className="mr-1"
															startContent={
																<MdMenuBook />
															}
														>
															{item.chapters ||
																"not found"}
														</Chip>
														{item.status &&
															(item.status ===
															"Completed" ? (
																<Chip
																	color="success"
																	size="sm"
																	variant="dot"
																>
																	{item.status ||
																		"not found"}
																</Chip>
															) : (
																<Chip
																	color="warning"
																	size="sm"
																	variant="faded"
																>
																	{item.status ||
																		"not found"}
																</Chip>
															))}
													</div>
												</CardBody>
											</Card>
										</Link>
									))}
							</CardBody>
						</Card>
					</Tab>
				</Tabs>
			</div>
		</section>
	);
};

export default InfoTabs;
