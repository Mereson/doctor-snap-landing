import { Link } from "@tanstack/react-router"
import { Typography } from "../../../ui/elements"
import type { InsightsCardProps } from "../sections"

export const InsightsCard = ({ insight }: { insight: InsightsCardProps }) => {
	const { tag, readTime, title, text } = insight

	return (
		<article className="p-8 pb-5.5 grid gap-6 ">
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
				<Typography variant="body-2xl" fontWeight="light" color={"tertiary700"}>
					{text}
				</Typography>
			</div>
			<div className="p-2.5 w-fit">
				<Link to={"."} className="flex gap-2.5 items-center w-fit">
					<Typography fontWeight="medium" color={"primary1200"}>
						Read Article
					</Typography>
					<img
						src="/svgs/arrow-right-Icon-dark.svg"
						className="size-6"
						alt="arrow right dark"
					/>
				</Link>
			</div>
		</article>
	)
}

