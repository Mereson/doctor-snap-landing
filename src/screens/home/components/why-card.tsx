import clsx from "clsx"
import { Typography } from "../../../ui/elements"
import type { WhyListProps } from "../sections"

export const WhyCard = ({ whyList }: { whyList: WhyListProps }) => {
	const { assetIcon, title, text } = whyList
	return (
		<div
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

			<div
				className={clsx(
					"flex justify-end px-2.5 mt-5.5 max-h-23",
					"group-hover:mt-0 duration-300 ease-linear transition-all",
					"group-hover:opacity-0 ",
				)}
			>
				<figure
					className={clsx(
						"rounded-full p-5.75 size-23 bg-primary1300 grid place-content-center pointer-events-none ",
						"duration-500 ease-linear transition-all group-hover:size-0 group-hover:p-0",
					)}
				>
					<img src="/svgs/resize.svg" alt="resize icon" />
				</figure>
			</div>

			<div className="w-[21.063rem] duration-600 group-hover:mt-10 max-h-0 pointer-events-none group-hover:max-h-96 transition-all ease-linear">
				<div
					className={clsx(
						"group-hover:delay-100 pointer-events-none opacity-0 group-hover:opacity-100",
						"group-hover:duration-700 transition-all ease-linear",
					)}
				>
					<Typography variant="body-xl" fontWeight="light" color="neutral800">
						{text}
					</Typography>
				</div>
			</div>
		</div>
	)
}
