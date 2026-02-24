import clsx from "clsx"
import { Typography } from "../../../ui/elements"
import { BookIcon } from "../../layout"

export const CoreValues = ({
	value,
}: {
	value: "Compassion" | "Accessibility" | "Education" | "Integrity"
}) => {
	return (
		<div
			className={clsx(
				"bg-white border-[1.11px] py-3 px-6 rounded-full border-[#E0EAED] flex items-center gap-3 ",
				"[box-shadow:0px_2px_12px_0px_#0000000A] transition-all duration-250 ease-linear",
				value === "Compassion" &&
					"hover:border-[#14EDB9] hover:[box-shadow:0px_2px_12px_0px_#14EDB9B8]",
				value === "Accessibility" &&
					"hover:border-[#73D3F1] hover:[box-shadow:0px_2px_12px_0px_#73D3F1]",
				value === "Education" &&
					"hover:border-[#C8FF3D] hover:[box-shadow:0px_2px_12px_0px_#E8FFAE]",
				value === "Integrity" &&
					"hover:border-[#1D4D5A] hover:[box-shadow:0px_2px_12px_0px_#3CA4C1]",
			)}
		>
			{value === "Compassion" && (
				<figure className="rounded-full p-2.25 bg-[#14EDB925]">
					<img src="/svgs/heart-Icon-green.svg" alt="heart icon" />
				</figure>
			)}
			{value === "Accessibility" && (
				<figure className="rounded-full p-2.25 bg-[#73D3F125]">
					<img src="/svgs/people-Icon.svg" alt="people icon" />
				</figure>
			)}
			{value === "Education" && (
				<figure className="rounded-full p-2.25 bg-[#D1FF5D25]">
					<BookIcon />
				</figure>
			)}
			{value === "Integrity" && (
				<figure className="rounded-full p-2.25 bg-[#1D4D5A25]">
					<img src="/svgs/shield-Icon.svg" alt="shield icon" />
				</figure>
			)}
			<Typography
				fontWeight="medium"
				color={"primary1300"}
				customClassName="leading-[22.5px] text-[15px]!"
			>
				{value === "Compassion" && "Compassion"}
				{value === "Accessibility" && "Accessibility"}
				{value === "Education" && "Education"}
				{value === "Integrity" && "Integrity"}
			</Typography>
		</div>
	)
}
