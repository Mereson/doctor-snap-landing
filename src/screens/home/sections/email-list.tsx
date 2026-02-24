import clsx from "clsx"
import { Button, Input, Typography } from "../../../ui/elements"
import { useForm } from "@tanstack/react-form"

export const EmailListSection = () => {
	const form = useForm({
		defaultValues: { userEmail: "" },
		onSubmit: async ({ value }) => {
			console.log(value)
		},
	})
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
			<div className="mt-5.5 flex gap-8 z-10 items-center">
				<form.Field
					name="userEmail"
					children={(field) => (
						<Input
							field={field}
							placeholder="Enter your email address"
							emailList
						/>
					)}
				/>
				<Button text="Subscribe" primary customClassname="px-[44px]!" />
			</div>
		</section>
	)
}
