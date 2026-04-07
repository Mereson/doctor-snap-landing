// import { useMemo } from "react"
import { useGetAllPackages } from "../../../lib/services"
import type { PackagesTypes } from "../../../lib/types"
import { Typography } from "../../../ui/elements"
import { PricingCard } from "../components"

export const PricingSection = () => {
	const { data, isLoading } = useGetAllPackages()

	const packagesList: PackagesTypes[] = data || []

	return (
		<section
			id="pricing-section"
			className="grid place-content-center bg-[#FEFBFB] pt-12.5 pb-30 sm:pb-[10.938rem]"
		>
			<section className="max-w-[1440px] mx-auto grid place-content-center">
				<Typography
					variant="h3"
					font="title"
					color={"primary1300"}
					align="center"
					customClassName="leading-[38px] sm:leading-[5.438rem]! mb-4 sm:mb-0 lg:mb-4 "
				>
					Transparent Pricing
				</Typography>
				<Typography
					variant="body-l"
					color={"tertiary700"}
					align="center"
					customClassName="max-[375px]:px-7 px-13 max-sm:text-base leading-[32px]"
				>
					Transparent pricing designed to make quality healthcare accessible,
					with no hidden costs or surprises.
				</Typography>
				{isLoading ? (
					"Loading..."
				) : (
					<div className="mt-7.5 gap-8 grid grid-cols-1 px-5 md:grid-cols-2 lg:grid-cols-3 place-items-center place-content-center">
						{packagesList.map((packages, i) => (
							<PricingCard key={i} packages={packages} />
						))}
					</div>
				)}
			</section>
		</section>
	)
}
