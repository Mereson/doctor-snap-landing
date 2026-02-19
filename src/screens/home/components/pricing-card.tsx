import clsx from "clsx"
import { Button, Typography } from "../../../ui/elements"
import type { PackagesTypes } from "../sections"

export const PricingCard = ({ packages }: { packages: PackagesTypes }) => {
	const {
		packageName,
		packageClass,
		packageType,
		packageFeatures,
		packagePrice,
	} = packages

	return (
		<div
			className={clsx(
				"rounded-11 bg-white pt-6 pb-15 col-span-1 max-w-104 w-full",
				packageClass === "C"
					? "[box-shadow:0px_8px_12px_4px_#D9FF79]"
					: "[box-shadow:0px_1px_4px_0px_#0C0C0D0D,0px_1px_4px_0px_#0C0C0D1A]",
			)}
		>
			<div className="flex justify-between items-start px-8 pb-2.25 border-b border-b-neutral-200">
				<div className="mt-3.75 grid gap-2.5">
					<Typography
						variant="body-l"
						color={"primary1300"}
						customClassName="max-w-[10.313rem] leading-7.5!"
					>
						{packageName}
					</Typography>
					<Typography lineHeight="32" fontWeight="light" color={"tertiary500"}>
						{packageClass}
					</Typography>
				</div>
				<div className="rounded-4 bg-secondary200 p-2.5">
					<Typography variant="body-s" lineHeight="20" color={"secondary1200"}>
						{packageType}
					</Typography>
				</div>
			</div>
			<div className="mt-6 px-8 grid gap-2.75">
				<Typography fontWeight="medium" color={"primary1300"} lineHeight="32">
					Includes
				</Typography>
				<Typography
					tag="ul"
					fontWeight="medium"
					color={"primary1300"}
					lineHeight="32"
					customClassName="grid gap-y-1.5"
				>
					{packageFeatures.map((list, i) => (
						<li key={i} className="flex gap-2.5 items-center">
							<img src="/svgs/check-icon.svg" alt="check icon" />
							{list.feature}
							{list.info && <img src="/svgs/Info-icon.svg" alt="info icon" />}
						</li>
					))}
				</Typography>
			</div>
			<div className="mt-[2.688rem] mb-6 px-8">
				<Typography
					variant="h9"
					fontWeight="semi-bold"
					color={"black"}
					lineHeight="full"
				>
					{packagePrice}
				</Typography>
				<Typography variant="body-s" lineHeight="20" color={"tertiary400"}>
					Per Reservation
				</Typography>
			</div>
			<div className="px-8">
				<Button secondary text="Reserve Package" />
			</div>
		</div>
	)
}
