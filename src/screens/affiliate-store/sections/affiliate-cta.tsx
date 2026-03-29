import clsx from "clsx"
import { Button, Typography } from "../../../ui/elements"

export const AffiliateCTA = () => {
	return (
		<section className="pt-25 pb-16.5">
			<div
				className={clsx(
					"rounded-9 w-full px-7.25 pt-[3.986rem] pb-[4.204rem] grid gap-8",
					"place-content-center relative",
					"bg-linear-[180deg,#0D2329_0%,#122F37_50%,#1D4D5A_100%]",
				)}
			>
				<img
					src="/svgs/dots.svg"
					className="absolute top-6 xl:left-[67px]"
					alt="dots"
				/>
				<article className="grid gap-5 max-w-142.5">
					<Typography
						variant="h5"
						font="title"
						align="center"
						customClassName="text-[28px] sm:text-[32px] lg:text-[42px] leading-[42px] lg:leading-[50px]"
						color={"neutral100"}
					>
						Ready to explore products that {""}
						<i className="text-primary300">support your health?</i>
					</Typography>
					<Typography lineHeight="28" align="center" color={"primary200"}>
						Browse our curated selection of doctor-recommended health devices
						and wellness products. Every purchase supports accessible
						healthcare.
					</Typography>
				</article>
				<div className="w-full flex justify-center">
					<Button text="Visit Affiliate Store" neutral />
				</div>
				<div className="flex items-center gap-2.5 justify-center">
					<img src="/svgs/verified-badge-Icon.svg" alt="disclaimer icon" />
					<Typography
						variant="body-xs"
						lineHeight="20"
						customClassName="text-[#8aabb5]! max-w-[28.813rem]"
					>
						Clicking the button above will redirect you to a trusted external
						partner platform where you can securely complete your purchase.
						Doctor Snap does not process payments directly.
					</Typography>
				</div>
			</div>
		</section>
	)
}
