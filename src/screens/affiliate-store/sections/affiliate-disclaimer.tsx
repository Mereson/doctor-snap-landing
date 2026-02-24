import { Typography } from "../../../ui/elements"

export const AffiliateDisclaimer = () => {
	return (
		<section className="py-9.5">
			<div className="w-full bg-[#EDFBFF] border-[#D8E8ED] border-[1.11px] rounded-7 pt-[1.493rem] pb-[1.743rem] px-10 items-center flex gap-4">
				<div className="flex gap-3 items-center">
					<figure className="p-2.5 bg-primary100 rounded-5">
						<img src="/svgs/Info-icon.svg" className="size-5" alt="info-icon" />
					</figure>
					<Typography
						fontWeight="semi-bold"
						lineHeight="32"
						color={"primary1300"}
					>
						Affiliate Disclaimer
					</Typography>
				</div>
				<div className="h-8 w-[0.99px] bg-[#D8E8ED]"></div>
				<Typography
					variant="body-s"
					lineHeight="20"
					color={"tertiary600"}
					customClassName="max-w-[62.125rem]"
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
