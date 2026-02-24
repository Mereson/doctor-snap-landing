import { Link } from "@tanstack/react-router"
import { Typography } from "../../../ui/elements"
import { ApplicationRoutes } from "../../../routes"
import { EditorsInsightCard, InsightsCard } from "../components"
import { editorsArtice, resourceArticles } from "../../../lib/mock-data"

export const InsightsSection = () => {
	return (
		<section className="pt-11.5 pb-[5.563rem] grid place-content-center ">
			<section className="max-w-[1440px] w-screen mx-auto px-16">
				<div className="flex justify-between mb-8">
					<Typography
						variant="h4"
						font="title"
						lineHeight="72"
						color={"primary1300"}
					>
						Medical Insights
					</Typography>
					<Link to={ApplicationRoutes.RESOURCES}>
						<Typography
							fontWeight="medium"
							customClassName="underline"
							color={"primary1200"}
						>
							View More Articles
						</Typography>
					</Link>
				</div>
				<div className="grid grid-cols-12 gap-8 place-items-start">
					<EditorsInsightCard editorsArtice={editorsArtice} />
					<div className="grid col-span-5 gap-8">
						{resourceArticles.slice(-2).map((insight) => (
							<InsightsCard key={insight.id} insight={insight} />
						))}
					</div>
				</div>
			</section>
		</section>
	)
}
