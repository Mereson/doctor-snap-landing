import clsx from "clsx"
import { Button, Typography } from "../../../ui/elements"

export const EmailListSection = () => {
	return (
		<section
			className={clsx(
				"max-w-[1600px] mx-auto pt-[4.438rem] w-screen pb-24 grid place-content-center relative",
				"bg-[url(/images/minimalist-home.png)] bg-center bg-cover",
			)}
		>
			<div className="size-full bg-[#0000004D] absolute"></div>
			<div className="grid gap-3 z-10">
				<Typography
					variant="h4"
					font="title"
					lineHeight="72"
					color={"neutral100"}
					align="center"
				>
					Stay Healthy, Stay Informed
				</Typography>
				<Typography lineHeight="32" color={"neutral100"} align="center">
					Join our weekly newsletter for doctor-approved health tips, new device
					reviews, and community updates.
				</Typography>
			</div>
			<form className="mt-5.5 flex gap-8 z-10 items-center">
				<input
					name="emailList"
					placeholder="Enter your email address"
					className="pl-[2.938rem] pr-7 py-6.25 rounded-full font-roboto-flex outline-0 w-full max-w-160 bg-white placeholder:text-tertiary700 text-primary1300"
				/>
				<Button text="Subscribe" primary customClassname="px-[44px]!" />
			</form>
		</section>
	)
}
