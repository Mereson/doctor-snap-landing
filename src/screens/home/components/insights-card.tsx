import { Link } from "@tanstack/react-router"
import { Typography } from "../../../ui/elements"
import type { InsightsCardProps } from "../sections"
import clsx from "clsx"

export const InsightsCard = ({ insight }: { insight: InsightsCardProps }) => {
	const { tag, readTime, title, text } = insight

	return (
		<Link to={"."}>
			<article
				className={clsx(
					"p-8 pb-5.5 grid gap-6 group transition-all duration-400 ease-linear rounded-8",
					"hover:[box-shadow:0px_2px_6px_2px_#00000026,0px_1px_2px_0px_#0000004D] ",
				)}
			>
				<div className="flex gap-2 items-center">
					<div className="px-2 py-1.5 bg-secondary200 rounded-2">
						<Typography lineHeight="32" color={"secondary1100"}>
							{tag}
						</Typography>
					</div>
					<Typography variant="body-s" color={"tertiary500"}>
						{readTime} min read
					</Typography>
				</div>
				<div>
					<Typography
						variant="h6"
						font="title"
						color={"primary1300"}
						customClassName="mb-3 text-[2rem]! leading-9.5!"
					>
						{title}
					</Typography>
					<Typography
						variant="body-2xl"
						fontWeight="light"
						color={"tertiary700"}
					>
						{text}
					</Typography>
				</div>
				<div className="p-2.5 w-fit">
					<div className="flex gap-2.5 items-center w-fit">
						<Typography
							fontWeight="medium"
							color={"primary1200"}
							customClassName="group-hover:text-secondary900 duration-400 ease-linear transition-colors"
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
								className="group-hover:stroke-secondary900 duration-400 ease-linear transition-colors"
								d="M3.3335 8H12.6668"
								stroke="#153842"
								strokeWidth="1.33333"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								className="group-hover:stroke-secondary900 duration-400 ease-linear transition-colors"
								d="M8 3.33337L12.6667 8.00004L8 12.6667"
								stroke="#153842"
								strokeWidth="1.33333"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
					</div>
				</div>
			</article>
		</Link>
	)
}
