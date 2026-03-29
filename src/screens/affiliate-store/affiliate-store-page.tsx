import { AffiliateCTA, AffiliateDisclaimer, AffiliateHero } from "./sections"

export const AffiliateStorePage = () => {
	return (
		<section className="max-w-[1440px] pt-40 lg:pt-[12.029rem] w-screen mx-auto px-6 md:px-8 lg:px-12 xl:px-16">
			<AffiliateHero />
			<AffiliateCTA />
			<AffiliateDisclaimer />
		</section>
	)
}
