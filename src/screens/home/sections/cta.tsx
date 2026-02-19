import { Button, Typography } from "../../../ui/elements"

export const CTASection = () => {
	return (
		<section className="grid place-content-center py-25">
			<section className="max-w-172.5 mx-auto grid gap-4 place-content-center">
				<Typography
					variant="h4"
					font="title"
					lineHeight="72"
					color={"primary1300"}
					align="center"
				>
					Your care starts here. Book an online appointment today.
				</Typography>
				<Typography lineHeight="32" color={"tertiary700"} align="center">
					Take the first step toward better health. Book an online appointment
					and get care that’s accessible, affordable, and built around your
					needs.
				</Typography>
				<div className="mt-2 flex justify-center">
					<Button text="Book appointment" primary />
				</div>
			</section>
		</section>
	)
}
