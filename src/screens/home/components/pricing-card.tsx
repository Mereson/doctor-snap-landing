import clsx from "clsx"
import { Button, Typography } from "../../../ui/elements"
import type { PackagesTypes } from "../../../lib/types"
import { useMediaQuery } from "usehooks-ts"

export const PricingCard = ({ packages }: { packages: PackagesTypes }) => {
	const { packageName, packageClass, packageType, features, packagePrice } =
		packages

	const sm = useMediaQuery("(max-width: 640px)")
	return (
		<div
			className={clsx(
				"rounded-11 bg-white pt-6 pb-9 sm:pb-15 col-span-1 max-w-104 w-full",
				packageClass === "C"
					? "[box-shadow:0px_8px_12px_4px_#D9FF79]"
					: "[box-shadow:0px_1px_4px_0px_#0C0C0D0D,0px_1px_4px_0px_#0C0C0D1A]",
			)}
		>
			<div className="flex max-[375px]:flex-col justify-between items-start px-4 sm:px-6 xl:px-8 pb-2.25 border-b border-b-neutral-200">
				<div className="max-[375px]:mt-0 mt-3.75 grid gap-2.5">
					<Typography
						variant="body-l"
						color={"primary1300"}
						customClassName="max-w-[10.313rem] leading-[24px] sm:leading-7.5! max-sm:text-base max-sm:font-semibold"
					>
						{packageName}
					</Typography>
					<Typography
						lineHeight="32"
						fontWeight="light"
						color={"tertiary500"}
						customClassName="max-sm:text-sm"
					>
						Package {packageClass}
					</Typography>
				</div>
				<div className="max-[375px]:justify-end flex max-[375px]:mt-2  max-[375px]:w-full">
					<div className="rounded-4 bg-[linear-gradient(259.86deg,#B8E75A_17.8%,#FAFFA4_52.41%,#9BB94F_88.46%)] p-2.5">
						<Typography
							variant="body-s"
							lineHeight="20"
							color={"secondary1200"}
							customClassName="max-sm:text-xs"
						>
							{packageType}
						</Typography>
					</div>
				</div>
			</div>
			<div className="mt-6 px-4 sm:px-8 grid gap-2.75">
				<Typography
					fontWeight="medium"
					color={"primary1300"}
					lineHeight="32"
					customClassName="max-sm:text-sm"
				>
					Includes
				</Typography>
				{features.length < 1 ? (
					<Typography
						tag="ul"
						fontWeight="medium"
						color={"primary1300"}
						lineHeight="32"
						customClassName="grid gap-5 sm:gap-y-1.5 max-sm:text-sm max-sm:leading-6"
					>
						Nothing to display
					</Typography>
				) : (
					<Typography
						tag="ul"
						fontWeight="medium"
						color={"primary1300"}
						lineHeight="32"
						customClassName="grid gap-5 sm:gap-y-1.5 max-sm:text-sm max-sm:leading-6"
					>
						{features.map((list, i) => (
							<li key={i} className="flex gap-2.5 items-center">
								<img src="/svgs/check-icon.svg" alt="check icon" />
								{list.feature.feature}
								{list.feature.info && (
									<img src="/svgs/Info-icon.svg" alt="info icon" />
								)}
							</li>
						))}
					</Typography>
				)}
			</div>
			<div className="mt-[2.688rem] mb-6 px-4 sm:px-8">
				<Typography
					variant="h9"
					fontWeight="semi-bold"
					color={"black"}
					lineHeight="full"
					customClassName="max-sm:text-base"
				>
					{packagePrice}
				</Typography>
				<Typography
					variant="body-s"
					lineHeight="20"
					color={"tertiary400"}
					customClassName="max-sm:text-xs"
				>
					Per Reservation
				</Typography>
			</div>
			<div className="px-4 sm:px-8">
				<Button
					secondary
					text="Reserve Package"
					width={sm ? "w-full" : "w-fit"}
				/>
			</div>
		</div>
	)
}
