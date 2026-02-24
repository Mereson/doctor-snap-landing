import { useMemo } from "react"
import { getArticlesTags } from "../../../lib"
import { resourceArticles } from "../../../lib/mock-data"
import { Typography } from "../../../ui/elements"
import clsx from "clsx"
import { useResourcesNavSelect } from "../context/resources.context"

export const ArticlesNavTabs = () => {
	const articlesTags = useMemo(() => getArticlesTags(resourceArticles), [])

	return (
		<div className="flex gap-2">
			<NavTab tagName="All" />
			{articlesTags.map((tagName, i) => (
				<NavTab key={i} tagName={tagName} />
			))}
		</div>
	)
}

const NavTab = ({ tagName }: { tagName: string }) => {
	const { selectedTab, setSelectedTab } = useResourcesNavSelect()
	return (
		<div
			onClick={() => setSelectedTab(tagName)}
			className={clsx(
				"rounded-full cursor-pointer border-[1.11px] px-4.25 py-2.5",
				selectedTab === tagName
					? "bg-primary1300 border-primary1300"
					: "border-[#D8E8ED]",
			)}
		>
			<Typography
				variant="body-s"
				lineHeight="20"
				fontWeight="medium"
				color={selectedTab === tagName ? "neutral100" : "tertiary600"}
			>
				{tagName}
			</Typography>
		</div>
	)
}
