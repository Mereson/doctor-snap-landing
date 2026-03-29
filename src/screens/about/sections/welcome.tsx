import clsx from "clsx"
import { Typography } from "../../../ui/elements"
import { motion } from "framer-motion"

export const Welcome = () => {
	return (
		<section
			className={clsx(
				" bg-center bg-linear-[180deg,#FEFBFB_0%,#E4FEE01F_100%]",
				"pt-13 grid place-items-center gap-11.25 sm:gap-12.25 max-h-[48.938rem] w-screen relative",
				"sm:py-28",
			)}
		>
			<Typography
				variant="h3"
				font="title"
				align="center"
				color={"primary1300"}
				customClassName={clsx(
					"max-w-[35.813rem] text-[28px] z-10 px-3.75",
					"sm:text-[54px] sm:leading-[70px]!",
				)}
			>
				Welcome to <i> Doctor Snap</i> By Ryzone Renal.
			</Typography>
			<img src="/svgs/plus-sign.svg" className="z-10" alt="plus sign" />
			<div className="px-6.5 pt-13 pb-11 sm:p-15 rounded-8 z-10 max-sm:mt-12.5 mx-6 [box-shadow:0px_10px_40px_4px_#80A08726] bg-white">
				<Typography
					variant="body-2xl"
					color={"primary1200"}
					align="center"
					customClassName="max-w-[50.25rem] max-sm:leading-11 leading-12 max-sm:text-sm"
				>
					My name is Arinze Ikeme, MD, FACP.{" "}
					<span className="font-semibold">
						{" "}
						I am a board-certified Internist and Nephrologist
					</span>{" "}
					practicing in the United States, with over 12 years of experience
					caring for patients  across diverse communities.
				</Typography>
			</div>

			<div className="absolute h-full w-full max-w-[2160px] max-md:top-40 flex overflow-hidden items-center">
				<div className="flex shrink-0 min-w-full">
					<CarouselComponent title={title} />
					<CarouselComponent aria title={title} />
				</div>
			</div>
		</section>
	)
}

const title: string[] = ["D", "O", "C", "T", "O", "R", "S", "N", "A", "P"]

const CarouselComponent = ({
	title,
	aria,
}: {
	title: string[]
	aria?: boolean
}) => (
	<motion.div aria-hidden={aria} className="animate-carousel flex ">
		{title.map((letter, i) => (
			<Typography
				key={i}
				variant="title"
				font="title"
				lineHeight="300"
				color={"primary10"}
				customClassName={i === 6 || i === 0 ? "ml-27.5" : ""}
			>
				{letter}
			</Typography>
		))}
	</motion.div>
)
