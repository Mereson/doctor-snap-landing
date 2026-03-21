import clsx from "clsx"
import { Typography } from "../../../ui/elements"
import type { WhyListProps } from "../sections"
import type { Dispatch, SetStateAction } from "react"
import { useMediaQuery } from "usehooks-ts"

export const WhyCard = ({
	whyList,
	clicked,
	setClicked,
}: {
	whyList: WhyListProps
	clicked: { id: string; open: boolean }
	setClicked: Dispatch<SetStateAction<{ id: string; open: boolean }>>
}) => {
	const { assetIcon, title, text } = whyList
	const sm = useMediaQuery("(max-width: 1024px)")

	const handleClick = () => {
		if (!sm) return

		setClicked((prev) => ({
			id: whyList.id,
			open: prev.id === whyList.id ? !prev.open : true,
		}))
	}

	const openCard = clicked.open && clicked.id === whyList.id

	return (
		<div
			onClick={() => handleClick()}
			className={clsx(
				"px-7.5 pt-52.5 pb-8.5 rounded-6 max-sm:max-w-104 sm:w-76 hover:w-104 hover:[box-shadow:0px_2px_6px_2px_#00000026,0px_1px_2px_0px_#0000004D] overflow-hidden group cursor-pointer bg-white",
				"transition-all duration-500 ease-linear relative",
				sm && openCard && "w-104! pt-43.5! pb-5.5!",
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
					"flex justify-end px-2.5 mt-5.5 max-h-23 relative ",
					"group-hover:mt-0 duration-300 ease-linear transition-all",
					"group-hover:opacity-0 ",
					sm && openCard && "mt-0 opacity-100",
				)}
			>
				<figure
					className={clsx(
						"rounded-full p-5.75 size-23 bg-primary1300 grid place-content-center pointer-events-none ",
						"duration-500 ease-linear transition-all group-hover:size-0 group-hover:p-0",
						sm && openCard && "size-0! p-0!",
					)}
				>
					<img src="/svgs/resize.svg" alt="resize icon" />
				</figure>
			</div>

			<div
				className={clsx(
					"sm:w-[21.063rem] duration-600 group-hover:mt-10 max-h-0 pointer-events-none group-hover:max-h-96 transition-all ease-linear",
					sm && openCard && "max-h-96",
				)}
			>
				<div
					className={clsx(
						"group-hover:delay-100 pointer-events-none opacity-0 group-hover:opacity-100",
						"group-hover:duration-700 transition-all ease-linear",
						sm && openCard && "delay-100 opacity-100 duration-700",
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
