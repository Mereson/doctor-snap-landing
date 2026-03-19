import { Link } from "@tanstack/react-router"
import { Typography } from "../../../ui/elements"
import { ApplicationRoutes } from "../../../routes"
import { EditorsInsightCard, InsightsCard } from "../components"
import { editorsArtice, resourceArticles } from "../../../lib/mock-data"
import { useMediaQuery } from "usehooks-ts"

export const InsightsSection = () => {
	const sm = useMediaQuery("(max-width: 425px)")
	return (
		<section className="pt-11.5 pb-12 sm:pb-[5.563rem] grid place-content-center ">
			<section className="max-w-[1440px] w-screen mx-auto px-6 sm:px-10 xl:px-16">
				<div className="flex justify-between mb-8">
					<Typography
						variant="h4"
						font="title"
						lineHeight={"72"}
						color={"primary1300"}
						customClassName="max-sm:leading-[38px] max-sm:text-[32px]"
					>
						Medical Insights
					</Typography>
					{!sm && (
						<Link to={ApplicationRoutes.RESOURCES}>
							<Typography
								fontWeight="medium"
								customClassName="underline"
								color={"primary1200"}
							>
								View More Articles
							</Typography>
						</Link>
					)}
				</div>
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 place-items-center  lg:place-items-start">
					<EditorsInsightCard editorsArtice={editorsArtice} />
					<div className="grid sm:grid-cols-2 lg:grid-cols-1 col-span-full lg:col-span-5 gap-4 xl:gap-8">
						{resourceArticles.slice(-2).map((insight) => (
							<InsightsCard key={insight.id} insight={insight} />
						))}
					</div>
				</div>
				{sm && (
					<div className="mt-12 flex justify-center">
					<Link to={ApplicationRoutes.RESOURCES} >
						<Typography
							fontWeight="medium"
							customClassName="underline w-fit"
							color={"primary1200"}
						>
							View More Articles
						</Typography>
					</Link>
					</div>
				)}
			</section>
		</section>
	)
}
