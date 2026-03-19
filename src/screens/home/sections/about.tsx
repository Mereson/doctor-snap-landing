import { useMediaQuery } from "usehooks-ts"
import { Image, Typography } from "../../../ui/elements"
import { motion } from "framer-motion"
import clsx from "clsx"

export const AboutSection = () => {
	const sm = useMediaQuery("(max-width: 640px)")
	const md = useMediaQuery("(max-width: 1024px) and (min-width: 640px")
	const lg = useMediaQuery("(max-width: 1280px) and (min-width: 1024px")

	return (
		<section
			className={clsx(
				"max-w-[1440px] w-screen mx-auto",
				"pt-[6.786rem] px-6.5 pb-7 flex flex-col gap-15",
				"md:pt-36 md:gap-[5.292rem] md:px-10",
				"xl:pt-[11.938rem] lg:flex-row lg:px-[4.063rem] lg:gap-16 xl:gap-[5.292rem]",
			)}
		>
			<div className="md:flex justify-center">
				<div className="relative top-[1.112rem]">
					<motion.div
						animate={{ rotate: [3.2, -3.2] }}
						transition={{
							stiffness: 100,
							damping: 1,
							mass: 15,
							duration: 0.8,
							repeat: Infinity,
							repeatType: "reverse",
							ease: "easeInOut",
							repeatDelay: 1,
						}}
						className={clsx(
							"w-full h-80 bg-secondary200 rounded-8",
							"max-[475px]:h-58!",
							"sm:h-100",
							"md:h-[30.063rem] md:w-160 lg:w-90 xl:w-160",
						)}
					/>
					<figure
						className={clsx(
							"w-full h-80 top-0 right-2 rounded-8 absolute",
							"max-[475px]:h-58!",
							"sm:h-100 ",
							"md:h-[30.063rem] md:w-160 lg:w-90 xl:w-160",
							"lg:right-[17px]",
						)}
					>
						<Image
							avif="/images/about-img.avif"
							webp="/images/about-img.webp"
							img="/images/about-img.png"
							imgClass="rounded-8 w-full object-cover object-top h-full"
							desc="about img"
							priority
						/>
					</figure>
				</div>
			</div>
			<article className="lg:max-w-[34.063rem]  grid gap-y-3 place-content-start">
				<Typography
					variant="body-l"
					fontWeight="medium"
					color={"primary900"}
					customClassName=""
				>
					ABOUT DOCTOR SNAP
				</Typography>
				<Typography
					variant="h4"
					font="title"
					lineHeight={sm ? "40" : lg ? "60" : "72"}
					color={"primary1300"}
					customClassName={clsx(md && "leading-13! max-w-[34.063rem]")}
				>
					Bridging the gap between patient and provider.
				</Typography>
				<Typography
					variant="body-xl"
					color={"neutral800"}
					fontWeight={"light"}
					customClassName="mt-3 lg:max-w-[33rem]"
				>
					Doctor Snap was founded on the conviction that quality healthcare
					should be barrier-free, available online, and supported by direct
					access to specialized medical expertise. <br />
					<br className="max-sm:hidden" /> I'm Arinze Ikeme, MD, FACP, a
					U.S.-based Internist and Nephrologist with over 12 years of
					experience. I created Doctor Snap to make healthcare simple,
					affordable, and accessible for everyone—especially the uninsured,
					immigrants, visitors, and underserved communities.
				</Typography>
			</article>
		</section>
	)
}
