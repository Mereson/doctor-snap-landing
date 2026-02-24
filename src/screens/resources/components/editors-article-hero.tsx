import clsx from "clsx"
import type { EditorsArticeType } from "../../../lib/types"
import { Typography } from "../../../ui/elements"
import { Link } from "@tanstack/react-router"
import { ClockIcon, ReadArticleButton } from "../../layout"
import { TagBadge } from "./tag-badge"

export const EditorsArticleHero = ({
	editorsArtice,
}: {
	editorsArtice: EditorsArticeType
}) => {
	const {
		articeTitle,
		articeText,
		articleImg,
		editorsImg,
		editorsName,
		tag,
		readTime,
		datePublished,
	} = editorsArtice

	return (
		<Link to={"."}>
			<figure
				className={clsx(
					"my-14 rounded-7 group max-h-130 h-screen max-w-327.5 w-screen relative",
				)}
			>
				<div
					className={clsx(
						"size-full rounded-7 absolute",
						"bg-linear-[0deg,rgba(0,0,0,0.56)_0%,rgba(0,0,0,0.24)_50%,rgba(0,0,0,0)_100%]",
					)}
				></div>

				<img
					src={articleImg}
					className="rounded-7 w-full h-full object-cover"
					alt="article image"
				/>

				<article className=" px-8 absolute bottom-[2.063rem]">
					<div className="flex gap-2 mb-4 items-center">
						<img
							src={editorsImg}
							className="rounded-full size-11 object-cover object-top"
							alt="author image"
						/>
						<Typography
							tag="div"
							fontWeight="medium"
							color={"neutral100"}
							customClassName="flex gap-1.5 items-center"
						>
							{editorsName}
							<div className="size-1.75 rounded-full bg-neutral100"></div>
							Doctor's Pick
						</Typography>
					</div>
					<div className="grid gap-3">
						<Typography
							variant="h5"
							font="title"
							color={"neutral100"}
							customClassName="max-w-[33.75rem] leading-12"
						>
							{articeTitle}
						</Typography>
						<Typography
							variant="body-m"
							lineHeight="28"
							color={"neutral100"}
							customClassName="max-w-[35.375rem]"
						>
							{articeText}
						</Typography>
					</div>
					<div className="flex items-center mt-6 justify-between w-screen max-w-[75.813rem]">
						<div className="flex gap-4 items-center">
							<TagBadge tag={tag}/>
							<div className="flex items-center gap-1.5">
								<ClockIcon strokeColor="white" />
								<Typography
									variant="body-s"
									lineHeight="20"
									customClassName="text-[#FFFFFFCC]"
								>
									{readTime} min read
								</Typography>
							</div>
							<Typography
								variant="body-s"
								lineHeight="20"
								customClassName="text-[#FFFFFFCC]"
							>
								{datePublished}
							</Typography>
						</div>
						<ReadArticleButton />
					</div>
				</article>
			</figure>
		</Link>
	)
}
