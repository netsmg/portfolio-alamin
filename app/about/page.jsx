"use client";
import { useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Button from "@/components/Button";
import Image from "next/legacy/image";
import FixedButon from "@/components/FixedButton";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";


// images
import Me1 from "@/public/img/me1.jpg";
import Me2 from "@/public/img/me2.jpg";
import Me3 from "@/public/img/me3.jpg";
import Hr from "@/components/Hr";
export default function Page() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	
	const handleBack = () => {
		window.location.href = "/";
	};
	return (
		<>
			<main className="overflow-hidden">
				<FixedButon onClick={handleBack}>
					<FontAwesomeIcon
						icon={faChevronLeft}
						className="text-black pr-10"
					/>
				</FixedButon>
				<div className="relative h-screen w-screen  gap-4 p-10 flex justify-center items-center flex-col mb-10 overflow-hidden">
					<div className="z-0 mb-48 md:mb-0  md:absolute top-1/4  md:right-[10%] md:-translate-y-16 ">
						<motion.div
							initial={{ scale: 1 }}
							animate={{ scale: 1.6 }}
							transition={{ ease: "circOut", duration: 1 }}
							className="bg-slate-300 rounded-sm h-[400px] md:h-[600px] w-[80vw] md:w-[30vw] grayscale hover:grayscale-0">
							<Image
								src={Me2}
								alt="techinsightshub"
								layout="fill"
								objectFit="cover"
								placeholder="blur"
							/>
						</motion.div>
					</div>
					<div className="z-10 w-full absolute md:w-auto md:left-[10%] top-[60%] md:top-1/3 col-span-2 flex flex-col justify-center items-start md:items-start text-start px-10 pt-4 backdrop-filter backdrop-blur-sm md:backdrop-blur-none bg-gray-100 bg-opacity-50 md:bg-transparent md:pt-0">
						<h1 className="md:bg-white bg-transparent lg:bg-transparent bg-opacity-50 md-px-0 text-black text-5xl md:text-8xl font-bold">
							About 
						</h1>
						<Hr />
						<p className="title text-xl mt-4 tracking-wider text-gray-900 leading-[1.7rem] mb-5 ">Welcome to TechInsightsHub:
						{" "}
							<span className="bg-transparent md:bg-gray-100 bg-opacity-50 xl:bg-transparent">
								{" "}
								Unleashing the Pulse of Tech Brilliance.
								
							</span>
						</p>
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.5, ease: "circOut" }}
							onClick={() => {
								window.scrollTo({
									top: 1000,
									behavior: "smooth",
								});
							}}
							className="mb-3">
							<Button variation="primary">Scroll Down</Button>
						</motion.div>
					</div>
				</div>
				<div className="mt-10 flex flex-col justify-start items-center w-full pl-10 md:pl-32">
					<div className="flex justify-center items-center flex-col my-5 self-start ">
						<div className="bg-gray-700 w-28 h-1 rounded-full mb-3 self-start"></div>
						<div className="bg-gray-700 w-28 h-1 rounded-full translate-x-12"></div>
						<h1 className="text-3xl font-bold mt-3">Who Are We?</h1>
					</div>
				</div>
				<div className="relative w-screen mx-auto container gap-4 px-10 grid grid-cols-1 md:grid-cols-2 mb-10">
					<div className="flex justify-center items-start flex-col mb-5 ">
						<div className="images relative w-full  aspect-square">
							<div className="absolute top-28 left-10 w-[50%]  aspect-square grayscale hover:grayscale-0 transition-all ease duration-300">
								<motion.div
									initial={{ opacity: 0, scale: 0.5, x: 100 }}
									whileInView={{
										opacity: 1,
										scale: 1,
										x: 0,
									}}
									className="w-full h-full">
									<Image
										src={Me1}
										alt="techinsightshub"
										layout="fill"
										objectFit="cover"
										placeholder="blur"
									/>
								</motion.div>
							</div>
							<div className="absolute top-16 right-28 w-[30%]  aspect-square grayscale hover:grayscale-0 transition-all ease duration-300">
								<motion.div
									initial={{
										opacity: 0,
										scale: 0.5,
										x: -100,
									}}
									whileInView={{
										opacity: 1,
										scale: 1,
										x: 0,
									}}
									transition={{ delay: 0.3 }}
									className="w-full h-full">
									<Image
										src={Me2}
										alt="techinsightshub"
										layout="fill"
										objectFit="cover"
										placeholder="blur"
									/>
								</motion.div>
							</div>
							<div className="absolute bottom-16 right-20 w-[40%]  aspect-square grayscale hover:grayscale-0 transition-all ease duration-300">
								<motion.div
									initial={{
										opacity: 0,
										scale: 0.5,
										x: -100,
									}}
									whileInView={{
										opacity: 1,
										scale: 1,
										x: 0,
									}}
									transition={{
										delay: 0.5,
									}}
									className="w-full h-full">
									<Image
										src={Me3}
										alt="techinsightshub"
										layout="fill"
										objectFit="cover"
										placeholder="blur"
									/>
								</motion.div>
							</div>
						</div>
					</div>
					<motion.div
						className="flex justify-center items-start flex-col mb-5 md:px-10"
						initial={{
							opacity: 0,
							x: 200,
						}}
						whileInView={{
							opacity: 1,
							x: 0,
						}}
						transition={{
							delay: 0.5,

							type: "spring",
						}}>
						<h2 className="text-2xl font-bold tracking-wider mb-3">
						TechInsightsHub:
						</h2>
						<p className="text-gray-600 text-justify title text-lg">
						    
							a
							<span className="text-black font-medium">
								{" "}
								technology company
							</span>{" "}
							and
							<span className="text-black font-medium">
								{" "}
								aspiring Web Developer.
							</span>{" "}
							
							Our Journey:{" "}
							<span className="text-black font-medium">Nurturing Curiosity,
								
							</span>{" "}
							Igniting Discovery
							{" "}
							<span className="text-black font-medium">
								Informatics Engineering.
							</span>{" "}
							Embark on a journey with us as we navigate the dynamic landscapes of technology. Picture a genesis fueled by passion, where bytes of curiosity collided to spark the inception of TechInsightsHub.
							<span className="text-black font-medium">
								{" "}
								Each click, each scroll, and every shared insight represents a step in our expedition to demystify the intricate dance between humans and technology.
							</span>{" "}
							is not just a choice, but a necessity. Let&rsquo;s
							connect and explore this ever-evolving world of tech
							together!
						</p>
					</motion.div>
				</div>
				<div className=" w-screen mx-auto container gap-4 p-10 grid grid-cols-1 md:grid-cols-2 mt-10 mb-24">
					<motion.div
						className="flex justify-center items-center flex-col mb-5 "
						initial={{
							opacity: 0,
							x: -200,
						}}
						whileInView={{
							opacity: 1,
							x: 0,
						}}
						transition={{
							delay: 0.5,

							type: "spring",
						}}>
						<h2 className="text-2xl md:text-xl font-normal mb-3 md:tracking-[.3rem] lg:tracking-[.5rem] uppercase ">
						Meet the Minds Behind the Hub
						</h2>
						<p className="text-gray-500 text-center tracking-widest md:px-5">
							<span className="text-black font-bold">HTMLs </span> |{" "}
							<span className="text-black font-bold">CSS</span> |{" "}
							<span className="text-black font-bold">
								Javascript
							</span>{" "}
							|{" "}
							<span className="text-black font-medium">
								Typescript
							</span>{" "}
							|{" "}
							<span className="text-black font-bold">React</span>{" "}
							|{" "}
							<span className="text-black font-medium">
								NextJS
							</span>{" "}
							|{" "}
							<span className="text-black font-bold">
								TailwindCSS
							</span>{" "}
							|{" "}
							<span className="text-black font-bold">
								Bootstrap
							</span>{" "}
							|{" "}
							<span className="text-black font-medium">
								NodeJS
							</span>{" "}
							|{" "}
							<span className="text-black font-medium">
								ExpressJS
							</span>{" "}
							|{" "}
							<span className="text-black font-medium">
								MongoDB
							</span>{" "}
							|{" "}
							<span className="text-black font-bold">MySQL</span>{" "}
							|{" "}
							<span className="text-black font-medium">
								Firebase
							</span>{" "}
							|{" "}
							<span className="text-black font-medium">PHP</span>{" "}
							|{" "}
							<span className="text-black font-bold">
								Laravel
							</span>{" "}
							|{" "}
							<span className="text-black font-medium">
								Python
							</span>
						</p>
					</motion.div>
					<motion.div
						className="flex justify-start items-center flex-col mb-5 "
						initial={{
							opacity: 0,
							x: 200,
						}}
						whileInView={{
							opacity: 1,
							x: 0,
						}}
						transition={{
							delay: 0.6,

							type: "spring",
						}}>
						<h2 className="text-2xl md:text-xl font-normal mb-3 md:tracking-[.3rem] lg:tracking-[.5rem] uppercase">
							Tools
						</h2>
						<p className="text-gray-500 text-center tracking-wider md:px-">
							<span className="text-black font-bold">
								Visual Studio Code
							</span>{" "}
							|{" "}
							<span className="text-black font-medium">
								Jet Brains
							</span>{" "}
							| <span className="text-black font-bold">Git</span>{" "}
							|{" "}
							<span className="text-black font-bold">Github</span>{" "}
							|{" "}
							<span className="text-black font-medium">
								Figma
							</span>{" "}
							|{" "}
							<span className="text-black font-medium">
								Adobe Photoshop
							</span>{" "}
							|{" "}
							<span className="text-black font-medium">
								Adobe Premiere Pro
							</span>{" "}
							|{" "}
							<span className="text-black font-medium">
								Adobe After Effect
							</span>{" "}
							|{" "}
						</p>
					</motion.div>
				</div>
				<div className="mt-16 flex flex-col justify-start items-center w-full pl-10 md:pl-32">
					<div className="flex justify-center items-center flex-col my-5 self-start ">
						<motion.div
							className="bg-gray-700 w-28 h-1 rounded-full mb-3 self-start"
							initial={{
								opacity: 0,
								x: -100,
							}}
							whileInView={{
								opacity: 1,
								x: 0,
							}}
							transition={{
								delay: 0.5,

								type: "spring",
							}}></motion.div>
						<motion.div
							className="bg-gray-700 w-28 h-1 rounded-full"
							initial={{
								opacity: 0,
								x: 200,
							}}
							whileInView={{
								opacity: 1,
								x: -50,
							}}
							transition={{
								delay: 0.5,

								type: "spring",
							}}></motion.div>
						<motion.h1
							className="text-3xl font-bold mt-3"
							initial={{
								opacity: 0,
								x: -200,
							}}
							whileInView={{
								opacity: 1,
								x: 0,
							}}
							transition={{
								delay: 0.7,

								type: "spring",
							}}>
							Education &amp; Experience
						</motion.h1>
					</div>
				</div>
				<div className="w-screen mx-auto container gap-10 p-10 grid grid-cols-1 md:grid-cols-2 my-10 ">
					<motion.div
						className="flex justify-center items-start flex-col mb-5 "
						initial={{
							opacity: 0,
							x: -200,
						}}
						whileInView={{
							opacity: 1,
							x: 0,
						}}
						transition={{
							delay: 0.5,

							type: "spring",
						}}>
						<h2 className="text-2xl font-bold mb-3">
							Our North Star: Mission and Values
						</h2>
						<h3 className="text-md font-medium mb-3 text-gray-500">
						    In this digital cosmos, our mission pulsates with the rhythm of innovation. We are here to empower, educate, and exhilarate. We value authenticity, inclusivity, and the relentless pursuit of knowledge. TechInsightsHub is more than a website; it's a commitment to nurturing a global community tethered by the strings of technological wonder.

							
						</h3>
						<p className="pl-3 text-gray-500  relative text-justify">
							<span className="before:border-s-2 before:absolute before:left-0 before:top-0 before:h-full before:border-gray-400 before:block before:w-2 before:content-'' "></span>
							Beyond the Horizon: Vision and Future Endeavors

As we stand at the precipice of tomorrow, envision TechInsightsHub as the compass guiding you through the uncharted territories of technology. Our gaze is fixed on the horizon of possibilities, where every pixel on your screen conceals a potential breakthrough. Join us as we unfold chapters yet written and explore the uncharted frontiers of the digital realm.

						</p>
					</motion.div>
					<motion.div
						className="flex justify-center items-start flex-col mb-5 "
						initial={{
							opacity: 0,
							x: 200,
						}}
						whileInView={{
							opacity: 1,
							x: 0,
						}}
						transition={{
							delay: 0.5,

							type: "spring",
						}}>
						<h2 className="text-2xl font-bold mb-3">
						    Engage,
							
						</h2>
						<h3 className="text-md font-medium mb-3 text-gray-500">
						    Explore , Evolve
							
						</h3>
						<p className="pl-3 text-gray-500 relative text-justify">
							<span className="before:border-s-2 before:absolute before:left-0 before:top-0 before:h-full before:border-gray-400 before:block before:w-2 before:content-'' "></span>
							TechInsightsHub is more than a spectator sport; it&rsquo;s an interactive odyssey. Engage with our community, immerse yourself in thought-provoking content, and explore the nuances of the tech universe. The journey is limitless, and the discoveries are boundless. Together, let&rsquo;s evolve the narrative of technology.
							TechInsightsHub: Where Tech Unleashes Its Story.

						</p>
					</motion.div>
				</div>
			</main>
		</>
	);
}
