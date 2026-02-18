import { Link } from "@tanstack/react-router"
import { Typography } from "../../../ui/elements"
import { ApplicationRoutes } from "../../../routes"
import { EditorsInsightCard, InsightsCard } from "../components"

export interface EditorsArticeType {
	articleImg: string
	editorsImg: string
	editorsName: string
	articeTitle: string
	articeText: string
	articeLink: string
}

export interface InsightsCardProps {
	tag: string
	readTime: string
	title: string
	text: string
}

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
						{insights.map((insight, i) => (
							<InsightsCard key={i} insight={insight} />
						))}
					</div>
				</div>
			</section>
		</section>
	)
}

const editorsArtice: EditorsArticeType = {
	articleImg: "/images/cardiovascular model.png",
	editorsImg: "/images/author img.png",
	editorsName: "Dr. Ikeme",
	articeTitle:
		"The Future of Cardiology is on Your Wrist: A Deep Dive into Wearable Tech",
	articeText:
		"How modern consumer devices are bridging the gap in early detection of arrhythmias and what you should look for in your next device.",
	articeLink: ".",
}

const insights: InsightsCardProps[] = [
	{
		tag: "Nutrition",
		readTime: "5",
		title: "Understanding Glycemic Index",
		text: "Blood sugar spikes aren't just a concern for people with diabetes—they can affect anyone...",
	},
	{
		tag: "Mental Health",
		readTime: "7",
		title: "The Physiology of Anxiety",
		text: "Stress can show up as headaches, muscle tension, rapid heartbeat, or fatigue.",
	},
]
