import { ResourcesNavSelectProvider } from "./context/resources.provider"
import { ResourcesArticles, ResourcesCTA, ResourcesHero } from "./sections"

export const ResourcesPage = () => {
	return (
		<section className="max-w-[1440px] mx-auto px-16">
			<ResourcesHero />
			<ResourcesNavSelectProvider>
				<ResourcesArticles />
			</ResourcesNavSelectProvider>
			<ResourcesCTA />
		</section>
	)
}
