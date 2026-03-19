import clsx from "clsx"
import { Image, Typography } from "../../../ui/elements"
import { Link } from "@tanstack/react-router"
import type { EditorsArticeType } from "../../../lib/types"
import { ReadArticleButton } from "../../layout"

export const EditorsInsightCard = ({
	editorsArtice,
}: {
	editorsArtice: EditorsArticeType
}) => {
	const { articleImg, articeTitle, articeText, editorsImg, editorsName } =
		editorsArtice
	return (
		<Link to={"."} className="col-span-full  lg:col-span-7">
			<figure
				className={clsx(
					"w-full h-[32.813rem] sm:size-188 lg:size-150 xl:size-188 rounded-8 relative group overflow-hidden",
				)}
			>
				<div
					className={clsx(
						"size-full rounded-8 absolute z-10",
						"bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.45)_48.39%,rgba(0,0,0,0.45)_76.4%)]",
					)}
				></div>
				<Image
					img={articleImg}
					desc="blog image"
					imgClass="size-full rounded-8 group-hover:scale-[110%] object-cover lg:object-fill transition-all duration-400 ease-linear"
				/>

				<article className="grid gap-2 pl-5.25 pr-6.75 sm:px-8 absolute z-11 bottom-8 sm:bottom-13.5">
					<div className="flex gap-2 items-center">
						<img
							src={editorsImg}
							className="rounded-full size-8 lg:size-12 object-cover object-top"
							alt="author image"
						/>
						<Typography
							tag="div"
							variant="body-l"
							fontWeight="medium"
							color={"neutral100"}
							customClassName="flex gap-1.5 items-center max-sm:text-xs"
						>
							{editorsName}
							<div className="size-1.75 rounded-full bg-[#FFFFFFCC] sm:bg-neutral100"></div>
							<span className="max-sm:text-[#FFFFFFCC]">Doctor's Pick</span>
						</Typography>
					</div>
					<Typography
						variant="h5"
						font="title"
						lineHeight="60"
						color={"neutral100"}
						customClassName=" max-lg:leading-[30px]"
					>
						{articeTitle}
					</Typography>
					<Typography
						variant="body-l"
						color={"neutral100"}
						customClassName="max-sm:text-sm max-sm:leading-[20px]"
					>
						{articeText}
					</Typography>
					<div className="sm:mt-2 pt-2.5 sm:p-2.5 w-fit">
						<ReadArticleButton />
					</div>
				</article>
			</figure>
		</Link>
	)
}
