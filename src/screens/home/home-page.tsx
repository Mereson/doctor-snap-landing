import {
	AboutSection,
	AffiliateSection,
	ContactSection,
	CTASection,
	EmailListSection,
	Hero,
	InsightsSection,
	PricingSection,
	WhySection,
} from "./sections"

export const Home = () => {
	return (
		<>
			<Hero />
			<AboutSection />
			<WhySection />
			<AffiliateSection />
			<InsightsSection />
			<PricingSection />
			<EmailListSection />
			<ContactSection />
			<CTASection />
		</>
	)
}
