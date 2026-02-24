import { Typography } from "../../../ui/elements"
import { EditorsArticleHero } from "../components"
import { editorsArtice } from "../../../lib/mock-data"
import { BookIcon } from "../../layout"

export const ResourcesHero = () => {
	return (
		<section className="pt-48.5 pb-14">
			<article className="grid gap-3 pb-5.25">
				<figure className="flex gap-3 items-center">
					<figure className="rounded-5 p-2.25 bg-primary1300">
						<BookIcon strokeColor="#9CD1E0" />
					</figure>
					<Typography
						variant="body-s"
						fontWeight="medium"
						lineHeight="20"
						color={"tertiary600"}
						customClassName="tracking-[1.12px]"
					>
						Resources
					</Typography>
				</figure>

				<Typography
					variant="h3"
					font="title"
					lineHeight="64"
					color={"primary1300"}
				>
					Medical Insights
				</Typography>

				<Typography
					variant="body-l"
					color={"tertiary700"}
					customClassName="max-w-[36.75rem]"
				>
					Expert articles, health guides, and the latest medical insights
					curated by Dr. Ikeme and the Doctor Snap team.
				</Typography>
			</article>
			<EditorsArticleHero editorsArtice={editorsArtice} />
		</section>
	)
}
