// import { useMemo } from "react"
import { useGetAllPackages } from "../../../lib/services"
import type { PackagesTypes } from "../../../lib/types"
import { Typography } from "../../../ui/elements"
import { PricingCard } from "../components"

export const PricingSection = () => {

	const { data, isLoading } = useGetAllPackages()

	const packagesList: PackagesTypes[] = data || []

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
				{isLoading ? (
					"Loading..."
				) : (
					<div className="mt-7.5 gap-8 grid grid-cols-3 place-items-center place-content-center">
						{packagesList.map((packages, i) => (
							<PricingCard key={i} packages={packages} />
						))}
					</div>
				)}
			</section>
		</section>
	)
}

// const packagesList: PackagesTypes[] = [
// 	{
// 		id: "1",
// 		packageName: "General Physical & Routine Lab Tests",
// 		packageType: "General Care",
// 		packageClass: "A",
// 		features: [
// 			{
// 				id: "1",
// 				feature: { feature: "30-minute video session.", info: "hey" },
// 			},
// 			{ id: "2", feature: { feature: "Medications review." } },
// 			{ id: "3", feature: { feature: "Refills and Prescriptions." } },
// 			{
// 				id: "4",
// 				feature: { feature: "Routine Lab Test and Written Review.", info: "" },
// 			},
// 		],
// 		packagePrice: "$150",
// 	},
// 	{
// 		id: "2",
// 		packageName: "Extensive Health Evaluation",
// 		packageType: "Premium Care",
// 		packageClass: "C",
// 		features: [
// 			{
// 				id: "1",
// 				feature: { feature: "One-hour video session.", info: "hey" },
// 			},
// 			{ id: "2", feature: { feature: "Medications review." } },
// 			{ id: "3", feature: { feature: "Refills and Prescriptions." } },
// 			{
// 				id: "4",
// 				feature: { feature: "Routine Lab Test and Written Review.", info: "" },
// 			},
// 			{
// 				id: "5",
// 				feature: { feature: "Age-appropriate Cancer Screening review" },
// 			},
// 			{ id: "6", feature: { feature: "Cancer Screening Referrals" } },
// 		],
// 		packagePrice: "$150",
// 	},
// 	{
// 		id: "3",
// 		packageName: "Targeted Health Concern",
// 		packageType: "Specialized Care",
// 		packageClass: "B",
// 		features: [],
// 		packagePrice: "$150",
// 	},
// ]
