import clsx from "clsx"
import { Typography } from "../../../ui/elements"

export const AffiliateDisclaimer = () => {
	return (
		<section className="py-9.5">
			<div
				className={clsx(
					"w-full bg-[#EDFBFF] border-[#D8E8ED] border-[1.11px] rounded-7 pt-[1.493rem] pb-[1.743rem] px-6 sm:px-10 flex gap-4",
					"md:flex-row flex-col md:items-center"
				)}
			>
				<div className="flex gap-3 items-center ">
					<figure className="size-10 grid place-content-center bg-primary100 rounded-5">
						<img src="/svgs/Info-icon.svg" className="size-5 " alt="info-icon" />
					</figure>
					<Typography
						fontWeight="semi-bold"
						customClassName="leading-7!"
						color={"primary1300"}
					>
						Affiliate Disclaimer
					</Typography>
				</div>
				<div className="h-8 w-[0.99px] bg-[#D8E8ED] hidden md:block"></div>
				<Typography
					variant="body-s"
					lineHeight="20"
					color={"tertiary600"}
					customClassName="max-w-[62.125rem] max-sm:text-xs"
				>
					Doctor Snap participates in affiliate programs. When you purchase
					through the links on our store page, we may earn a small commission at
					no additional cost to you. All products are independently selected and
					recommended by our medical team. We only recommend products we trust
					and believe will benefit your health journey.
				</Typography>
			</div>
		</section>
	)
}
