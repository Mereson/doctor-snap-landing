import { Button, Typography } from "../../../ui/elements"

export const CTASection = () => {
	return (
		<section className="max-w-172.5 mx-auto max-sm:px-7 py-25 grid gap-4 place-content-center">
			<Typography
				variant="h4"
				font="title"
				color={"primary1300"}
				align="center"
				customClassName="max-sm:text-[32px] leading-[38px] sm:leading-[49px] lg:leading-[60px] xl:leading-[72px]"
			>
				Your care starts here. Book an online appointment today.
			</Typography>
			<Typography lineHeight="32" color={"tertiary700"} align="center">
				Take the first step toward better health. Book an online appointment and
				get care that's accessible, affordable, and built around your needs.
			</Typography>
			<div className="mt-[39px] sm:mt-2 flex justify-center">
				<Button text="Book appointment" primary />
			</div>
		</section>
	)
}
