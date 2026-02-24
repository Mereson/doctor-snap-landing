import { Typography } from "../../../ui/elements"

export const ReadArticleButton = ({
	fontSize = "normal",
	textColor = "neutral100",
	strokeColor = "#FFFFFF",
}: {
	fontSize?: "normal" | "small"
	textColor?: "neutral100" | "primary1200"
	strokeColor?: string
}) => {
	return (
		<div className="flex gap-2.5 cursor-pointer items-center w-fit">
			<Typography
				variant={fontSize === "normal" ? "body-r" : "body-s"}
				fontWeight="medium"
				color={textColor}
				customClassName={`group-hover:text-secondary900 duration-400 ease-linear transition-colors`}
			>
				Read Article
			</Typography>
			{/* Arrow left dark */}

			<svg
				className="group-hover:translate-x-0.5 duration-400 ease-linear transition-all"
				width="24"
				height="24"
				viewBox="0 0 16 16"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					className={`group-hover:stroke-secondary900 duration-400 ease-linear transition-colors`}
					d="M3.3335 8H12.6668"
					stroke={strokeColor}
					strokeWidth="1.33333"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					className={`group-hover:stroke-secondary900 duration-400 ease-linear transition-colors`}
					d="M8 3.33337L12.6667 8.00004L8 12.6667"
					stroke={strokeColor}
					strokeWidth="1.33333"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		</div>
	)
}
