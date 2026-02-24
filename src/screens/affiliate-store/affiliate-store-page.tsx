import { AffiliateCTA, AffiliateDisclaimer, AffiliateHero } from "./sections"

export const AffiliateStorePage = () => {
	return (
		<section className="max-w-[1440px] pt-[12.029rem] w-screen mx-auto px-16">
			<AffiliateHero />
			<AffiliateCTA />
			<AffiliateDisclaimer />
		</section>
	)
}
