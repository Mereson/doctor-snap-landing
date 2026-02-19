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
		<Link to={articeLink} className="col-span-7">
			<figure
				className={clsx(
					"size-188 rounded-8 relative group overflow-hidden",
					"bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.45)_48.39%,rgba(0,0,0,0.45)_76.4%)]",
				)}
			>
				<div
					className={clsx(
						"size-full rounded-8 absolute z-10",
						"bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.45)_48.39%,rgba(0,0,0,0.45)_76.4%)]",
					)}
				></div>
				<img
					src={articleImg}
					className="size-full rounded-8 group-hover:scale-[110%] transition-all duration-400 ease-linear"
					alt="blog image"
				/>
				<article className="grid gap-2 px-8 absolute z-11 bottom-13.5">
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
						<div className="flex gap-2.5 items-center w-fit">
							<Typography
								fontWeight="medium"
								color={"neutral100"}
								customClassName="group-hover:text-secondary900 duration-400 ease-linear transition-colors"
							>
								Read Article
							</Typography>
							{/* Arrow left */}
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
									stroke="#FFFFFF"
									strokeWidth="1.33333"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									className="group-hover:stroke-secondary900 duration-400 ease-linear transition-colors"
									d="M8 3.33337L12.6667 8.00004L8 12.6667"
									stroke="#FFFFFF"
									strokeWidth="1.33333"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						</div>
					</div>
				</article>
			</figure>
		</Link>
	)
}
