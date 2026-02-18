import clsx from "clsx"
import { Typography } from "../../../ui/elements"
import type { WhyListProps } from "../sections"
import * as motion from "motion/react-client"

export const WhyCard = ({ whyList }: { whyList: WhyListProps }) => {
	const { assetIcon, title, text } = whyList
	return (
		<motion.div
			layout
			className={clsx(
				"px-7.5 pt-52.5 pb-8.5 rounded-6 w-76 hover:w-104 hover:[box-shadow:0px_2px_6px_2px_#00000026,0px_1px_2px_0px_#0000004D] overflow-hidden group cursor-pointer bg-white",
				"transition-all duration-500 ease-linear",
				"hover:pt-43.5 hover:pb-5.5",
			)}
		>
			<div className="mb-2.5 bg-secondary200 w-fit rounded-3 p-2.5">
				<img src={assetIcon} alt="asset icon" />
			</div>

			<Typography
				variant="h5"
				font="title"
				lineHeight="60"
				color={"primary1100"}
				customClassName="max-w-[15.125rem] transition-all duration-500 ease-linear"
			>
				{title}
			</Typography>

			<motion.div
				className={clsx(
					"flex justify-end px-2.5 mt-5.5 group-hover:h-0 group-hover:opacity-0 translate-y-0 group-hover:-translate-y-16 duration-400 ease-linear transition-all max-h-23",
				)}
			>
				<motion.figure
					className={clsx(
						"rounded-full size-23 bg-primary1300 grid place-content-center pointer-events-none",
					)}
				>
					<img src="/svgs/resize.svg" alt="resize icon" />
				</motion.figure>
			</motion.div>

			<motion.div className="w-[21.063rem] duration-600 group-hover:mt-10 max-h-0 group-hover:max-h-96 transition-all ease-linear">
				<motion.div
					layout
					className={clsx(
						"translate-y-7 group-hover:delay-300 group-hover:translate-y-0 pointer-events-none opacity-0 group-hover:opacity-100",
						"group-hover:duration-700 transition-all ease-initial",
					)}
				>
					<Typography variant="body-xl" fontWeight="light" color="neutral800">
						{text}
					</Typography>
				</motion.div>
			</motion.div>
			
		</motion.div>
	)
}

