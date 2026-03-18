import { useMediaQuery } from "usehooks-ts"
import { Image, Typography } from "../../../ui/elements"
import { motion } from "framer-motion"

export const AboutSection = () => {
	const sm = useMediaQuery("(max-width: 640px)")
	return (
		<section className="pt-[6.786rem] sm:pt-[11.938rem] pb-7 max-w-[1440px] w-screen mx-auto gap-10.5 sm:gap-[5.292rem] px-6.5 sm:px-[4.063rem] flex flex-col sm:flex-row ">
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
					className="w-full sm:w-160 h-58 sm:h-[30.337rem] bg-secondary200 rounded-8"
				/>
				<figure className="w-full sm:w-160 h-58 sm:h-[30.063rem] top-0 right-2 sm:right-[17px] rounded-8 absolute ">
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
			<article className="max-w-[34.063rem] grid gap-y-3 place-content-start">
				<Typography
					variant="body-l"
					fontWeight="medium"
					color={"primary900"}
					customClassName="max-sm:text-base"
				>
					ABOUT DOCTOR SNAP
				</Typography>
				<Typography
					variant="h4"
					font="title"
					lineHeight={sm ? "40" : "72"}
					color={"primary1300"}
					customClassName="max-sm:text-[1.75rem]"
				>
					Bridging the gap between patient and provider.
				</Typography>
				<Typography
					variant="body-xl"
					color={"neutral800"}
					fontWeight={"light"}
					customClassName="mt-3 max-w-[33rem]"
				>
					Doctor Snap was founded on the conviction that quality healthcare
					should be barrier-free, available online, and supported by direct
					access to specialized medical expertise. <br />
					<br className="max-sm:hidden" /> I'm Arinze Ikeme, MD, FACP, a U.S.-based Internist and
					Nephrologist with over 12 years of experience. I created Doctor Snap
					to make healthcare simple, affordable, and accessible for
					everyone—especially the uninsured, immigrants, visitors, and
					underserved communities.
				</Typography>
			</article>
		</section>
	)
}
