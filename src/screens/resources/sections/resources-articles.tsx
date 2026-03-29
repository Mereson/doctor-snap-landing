import { resourceArticles } from "../../../lib/mock-data"
import { Typography } from "../../../ui/elements"
import { ArticlesCard, ArticlesNavTabs } from "../components"
import { useResourcesNavSelect } from "../context/resources.context"
import { useMemo } from "react"

export const ResourcesArticles = () => {
	const { selectedTab } = useResourcesNavSelect()

	const filteredArticles = useMemo(() => {
		if (selectedTab === "All") return resourceArticles

		return resourceArticles.filter((item) => item.tag.tagName === selectedTab)
	}, [selectedTab])

	return (
		<section className="pt-7 pb-19">
			<div className="grid gap-2 mb-7">
				<div className="flex gap-2 py-[2.5px] items-center">
					<img
						src="/svgs/filter-Icon.svg"
						className="size-4"
						alt="filter-icon"
					/>
					<Typography
						variant="body-s"
						lineHeight="20"
						fontWeight="medium"
						color={"tertiary600"}
						customClassName="text-nowrap"
					>
						Filter by topic
					</Typography>

					<div className="h-[0.99px] ml-2 w-full bg-[#D8E8ED]" />
				</div>
				<ArticlesNavTabs />
			</div>
			<section>
				<div className="flex items-center gap-3 mb-[2.488rem]">
					<img
						src="/svgs/Trending up.svg"
						className="size-5"
						alt="trending up icon"
					/>
					<Typography
						variant="h7"
						font="title"
						lineHeight="36"
						color={"primary1300"}
					>
						{selectedTab === "All" && "All"} Articles
					</Typography>
					<Typography
						variant="body-s"
						lineHeight="20"
						customClassName="text-[#8AABB5]!"
					>
						({filteredArticles.length})
					</Typography>
				</div>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-content-center gap-8">
					{[...filteredArticles].reverse().map((article) => (
						<ArticlesCard key={article.id} article={article} />
					))}
				</div>
			</section>
		</section>
	)
}
