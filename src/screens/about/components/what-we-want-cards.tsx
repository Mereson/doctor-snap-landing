import clsx from "clsx"
import { Typography } from "../../../ui/elements"

export interface WhatWeWantCardProps {
	title: string
	text: string
	type: "Mission" | "Vision" | "Values"
}

export const WhatWeWantCards = ({ props }: { props: WhatWeWantCardProps }) => {
	const { title, text, type } = props
	return (
		<div
			className={clsx(
				"col-span-1 px-5 border-[1.11px] border-[#E8F0F2] rounded-9 transition-all duration-250 ease-linear",
				type === "Vision" &&
					"bg-linear-[180deg,#E8F7FC_0%,#F0FBFE_100%] hover:[box-shadow:0px_8px_8px_0px_#D3F0FA]",
				type === "Mission" &&
					"bg-linear-[180deg,#E6FDF5_0%,#F0FEF9_100%] hover:[box-shadow:0px_8px_8px_0px_#C0FAEA]",
				type === "Values" &&
					"bg-linear-[180deg,#F5FFE8_0%,#F9FFF0_100%] hover:[box-shadow:0px_8px_8px_0px_#EEFFCE]",
			)}
		>
			<div
				className={clsx(
					"w-full h-1 rounded-t-9",
					type === "Vision" && "bg-[#73D3F1]",
					type === "Mission" && "bg-[#14EDB9]",
					type === "Values" && "bg-[#D1FF5D]",
				)}
			></div>
			<div
				className={clsx(
					" w-full xl:pl-[21.99px] xl:pr-[9.3px] pt-9 pb-10.25 grid gap-4",
				)}
			>
				{type === "Vision" && (
					<figure className="mb-2 w-fit rounded-7 bg-[#73D3F130] p-3.5">
						<img src="/svgs/eye-Icon.svg" alt="vision icon" />
					</figure>
				)}
				{type === "Mission" && (
					<figure className="mb-2 w-fit rounded-7 bg-[#14EDB930] p-3.5">
						<img src="/svgs/heart-Icon-green.svg" alt="mission icon" />
					</figure>
				)}
				{type === "Values" && (
					<figure className="mb-2 w-fit rounded-7 bg-[#D1FF5D30] p-3.5">
						<img src="/svgs/diamond-Icon.svg" alt="values icon" />
					</figure>
				)}

				<Typography
					variant="h8"
					font="title"
					color={"primary1300"}
					customClassName="text-[26px]! leading-[33.8px]"
				>
					{title}
				</Typography>
				<Typography
					lineHeight="28"
					color={"tertiary600"}
					customClassName="lg:max-w-[20.063rem] pb-7"
				>
					{text}
				</Typography>
			</div>
		</div>
	)
}
