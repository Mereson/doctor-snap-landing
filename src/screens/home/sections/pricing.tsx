import { Typography } from "../../../ui/elements"
import { PricingCard } from "../components"

export interface PackagesTypes {
	packageName: string
	packageType: string
	packageClass: "A" | "B" | "C"
	packageFeatures: {
		feature: string
		info?: string
	}[]
	packagePrice: string
}

export const PricingSection = () => {
	return (
		<section className="grid place-content-center bg-[#FEFBFB] pt-12.5 pb-[10.938rem]">
			<section className="max-w-[1440px] mx-auto grid place-content-center">
				<Typography
					variant="h3"
					font="title"
					color={"primary1300"}
					align="center"
					customClassName="leading-[5.438rem]! mb-4"
				>
					Transparent Pricing
				</Typography>
				<Typography variant="body-l" color={"tertiary700"} align="center">
					Transparent pricing designed to make quality healthcare accessible,
					with no hidden costs or surprises.
				</Typography>
				<div className="mt-7.5 gap-8 grid grid-cols-3 place-items-center place-content-center">
					{packagesList.map((packages, i) => (
						<PricingCard key={i} packages={packages} />
					))}
				</div>
			</section>
		</section>
	)
}

const packagesList: PackagesTypes[] = [
	{
		packageName: "General Physical & Routine Lab Tests",
		packageType: "General Care",
		packageClass: "A",
		packageFeatures: [
			{ feature: "30-minute video session.", info: "hey" },
			{ feature: "Medications review." },
			{ feature: "Refills and Prescriptions." },
			{ feature: "Routine Lab Test and Written Review.", info: "" },
		],
		packagePrice: "$150",
	},
	{
		packageName: "Extensive Health Evaluation",
		packageType: "Premium Care",
		packageClass: "C",
		packageFeatures: [
			{ feature: "One-hour video session.", info: "hey" },
			{ feature: "Medications review." },
			{ feature: "Refills and Prescriptions." },
			{ feature: "Routine Lab Test and Written Review.", info: "" },
			{ feature: "Age-appropriate Cancer Screening review" },
			{ feature: "Cancer Screening Referrals" },
		],
		packagePrice: "$150",
	},
	{
		packageName: "Targeted Health Concern",
		packageType: "Specialized Care",
		packageClass: "B",
		packageFeatures: [
			{ feature: "30-minute video session. ", info: "hey" },
			{ feature: "Target Medications review." },
			{
				feature: "Written Lab Test review with Optional 15 mins Video Session.",
			},
			{ feature: "Targeted Lab Test to address health Issue" },
		],
		packagePrice: "$150",
	},
]
