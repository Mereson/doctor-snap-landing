import { AffiliateCTA, AffiliateDisclaimer, AffiliateHero } from "./sections"

export const AffiliateStorePage = () => {
	return (
		<section className="pt-[12.029rem] grid place-content-center">
			<section className="max-w-[1440px] w-screen mx-auto px-16">
				<AffiliateHero />
				<AffiliateCTA />
				<AffiliateDisclaimer />
			</section>
		</section>
	)
}
