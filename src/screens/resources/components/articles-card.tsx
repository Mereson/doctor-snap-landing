import clsx from "clsx"
import { TagBadge } from "./tag-badge"
import { ClockIcon, ReadArticleButton } from "../../layout"
import { Typography } from "../../../ui/elements"
import type { ResourceArticlesType } from "../../../lib/types"
import { Link } from "@tanstack/react-router"

export const ArticlesCard = ({
	article,
}: {
	article: ResourceArticlesType
}) => {
	const { articeText, articeTitle, articleImg, tag, readTime, datePublished } =
		article

	return (
		<Link to=".">
			<article
				
				className={clsx(
					"col-span-1 p-5 pb-8 group rounded-7 border border-[#71717161]",
					"bg-white [box-shadow:0px_4px_16px_0px_#00000026]",
				)}
			>
				<figure className="rounded-7 relative max-h-[15.688rem] h-screen max-w-[23.563rem] w-screen">
					<img
						src={articleImg}
						className="rounded-7 h-full w-full"
						alt="article image"
					/>
					<div className="absolute top-6 left-6">
						<TagBadge tag={tag} />
					</div>
				</figure>

				<div className="flex items-center gap-1.5 mt-3 mb-5">
					<ClockIcon strokeColor="#5B747A" />
					<Typography variant="body-s" lineHeight="20" color={"tertiary500"}>
						{readTime} min read
					</Typography>
					<Typography variant="body-s" lineHeight="20" color={"tertiary200"}>
						{datePublished}
					</Typography>
				</div>

				<div className="grid gap-2 mb-5.5">
					<Typography
						variant="h9"
						font="title"
						lineHeight="28"
						color={"primary1300"}
						customClassName="line-clamp-2"
					>
						{articeTitle}
					</Typography>
					<Typography
						variant="body-s"
						lineHeight="24"
						color={"tertiary600"}
						customClassName="line-clamp-3"
					>
						{articeText}
					</Typography>
				</div>
				<div>
					<ReadArticleButton
						fontSize="small"
						textColor="primary1200"
						strokeColor="#153842"
					/>
				</div>
			</article>
		</Link>
	)
}
