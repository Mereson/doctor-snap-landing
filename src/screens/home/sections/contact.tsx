import { Typography } from "../../../ui/elements"
import { UnderConstruction } from "../../layout/components"

export const ContactSection = () => {
	return (
		<section className="grid place-content-center bg-[#FEFBFB] pt-12.5 pb-[2.438rem]">
			<section className="max-w-[1440px] mx-auto grid place-content-center">
				<Typography
					variant="h4"
					font="title"
					lineHeight="72"
					color={"primary1300"}
					align="center"
				>
					Contact Us
				</Typography>
				<Typography lineHeight="32" color={"tertiary700"} align="center">
					Have questions about the affiliate store or our services?
				</Typography>
				<UnderConstruction />
			</section>
		</section>
	)
}
