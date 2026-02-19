import { Typography } from "../../../ui/elements"
import { motion } from "framer-motion"

export const AboutSection = () => {
	return (
		<section className="pt-[11.938rem] pb-7 grid place-items-center">
			<section className="max-w-[1440px] w-screen mx-auto gap-[5.292rem] px-[4.063rem] flex ">
				<div className="relative top-[1.112rem]">
					{/* <div className="w-160 h-[30.337rem] bg-secondary200 rounded-8 rotate-[3.2deg]"></div> */}
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
						className="w-160 h-[30.337rem] bg-secondary200 rounded-8"
					/>
					<figure className="w-160 h-[30.063rem] top-0 right-[17px] rounded-8 absolute ">
						<img
							src="/public/images/about-img.png"
							className="rounded-8 w-full object-cover object-top h-full"
							alt="about img"
						/>
					</figure>
				</div>
				<article className="max-w-[34.063rem] grid gap-y-3 place-content-start">
					<Typography variant="body-l" fontWeight="medium" color={"primary900"}>
						ABOUT DOCTOR SNAP
					</Typography>
					<Typography
						variant="h4"
						font="title"
						lineHeight="72"
						color={"primary1300"}
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
						<br /> I'm Arinze Ikeme, MD, FACP, a U.S.-based Internist and
						Nephrologist with over 12 years of experience. I created Doctor Snap
						to make healthcare simple, affordable, and accessible for
						everyone—especially the uninsured, immigrants, visitors, and
						underserved communities.
					</Typography>
				</article>
			</section>
		</section>
	)
}
