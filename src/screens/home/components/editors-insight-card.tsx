import clsx from "clsx"
import { Typography } from "../../../ui/elements"
import { Link } from "@tanstack/react-router"
import type { EditorsArticeType } from "../sections"

export const EditorsInsightCard = ({
	editorsArtice,
}: {
	editorsArtice: EditorsArticeType
}) => {
	const {
		articleImg,
		articeTitle,
		articeText,
		articeLink,
		editorsImg,
		editorsName,
	} = editorsArtice
	return (
		<figure
			className={clsx(
				"size-188 rounded-8 relative col-span-7",
				"bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.45)_48.39%,rgba(0,0,0,0.45)_76.4%)]",
			)}
		>
			<div
				className={clsx(
					"size-full rounded-8 absolute inset-0",
					"bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.45)_48.39%,rgba(0,0,0,0.45)_76.4%)]",
				)}
			></div>
			<img src={articleImg} className="size-full rounded-8" alt="blog image" />
			<article className="grid gap-2 px-8 absolute bottom-13.5">
				<div className="flex gap-2 items-center">
					<img
						src={editorsImg}
						className="rounded-full size-12 object-cover object-top"
						alt="author image"
					/>
					<Typography
						tag="div"
						variant="body-l"
						fontWeight="medium"
						color={"neutral100"}
						customClassName="flex gap-1.5 items-center"
					>
						{editorsName}
						<div className="size-1.75 rounded-full bg-neutral100"></div>
						Doctor's Pick
					</Typography>
				</div>
				<Typography
					variant="h5"
					font="title"
					lineHeight="60"
					color={"neutral100"}
				>
					{articeTitle}
				</Typography>
				<Typography variant="body-l" color={"neutral100"}>
					{articeText}
				</Typography>
				<div className="mt-2 p-2.5 w-fit">
					<Link to={articeLink} className="flex gap-2.5 items-center w-fit">
						<Typography fontWeight="medium" color={"neutral100"}>
							Read Article
						</Typography>
						<img
							src="/svgs/arrow-right-Icon.svg"
							className="size-6"
							alt="arrow right"
						/>
					</Link>
				</div>
			</article>
		</figure>
	)
}

