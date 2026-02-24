import { Link } from "@tanstack/react-router"
import { Typography } from "../../../ui/elements"
import clsx from "clsx"
import type { ResourceArticlesType } from "../../../lib/types"
import { ReadArticleButton } from "../../layout"

export const InsightsCard = ({
	insight,
}: {
	insight: ResourceArticlesType
}) => {
	const { tag, readTime, articeText, articeTitle } = insight

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
							{tag.tagName}
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
						{articeTitle}
					</Typography>
					<Typography
						variant="body-2xl"
						fontWeight="light"
						color={"tertiary700"}
						customClassName="line-clamp-3 "
					>
						{articeText}
					</Typography>
				</div>
				<div className="p-2.5 w-fit">
					<ReadArticleButton textColor="primary1200" strokeColor="#153842" />
				</div>
			</article>
		</Link>
	)
}
