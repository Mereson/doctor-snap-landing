import { ResourcesNavSelectProvider } from "./context/resources.provider"
import { ResourcesArticles, ResourcesCTA, ResourcesHero } from "./sections"

export const ResourcesPage = () => {
	return (
		<section className="max-w-[1440px] mx-auto px-5.5 sm:px-10 md:px-12 lg:px-16">
			<ResourcesHero />
			<ResourcesNavSelectProvider>
			<ResourcesArticles />
			</ResourcesNavSelectProvider>
			<ResourcesCTA />
		</section>
	)
}
