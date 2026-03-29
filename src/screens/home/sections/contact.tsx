import clsx from "clsx"
import { Button, Input, TextArea, Typography } from "../../../ui/elements"
import { useForm } from "@tanstack/react-form"

interface ContactMessage {
	firstName: string
	lastName: string
	email: string
	message: string
}

export const ContactSection = () => {
	const defaultState: ContactMessage = {
		firstName: "",
		lastName: "",
		email: "",
		message: "",
	}

	const form = useForm({
		defaultValues: defaultState,
		onSubmit: async ({ value }) => {
			console.log(value)
		},
	})

	return (
		<section className="grid  bg-[#FEFBFB] pt-12.5 pb-[2.438rem]">
			<section className="max-w-[1440px] mx-auto w-full grid px-3.5 md:px-10 lg:px-0 lg:place-content-center">
				<div className="max-sm:px-20 max-[375px]:px-10! grid max-sm:gap-3">
				<Typography
					variant="h4"
					font="title"
					lineHeight="72"
					color={"primary1300"}
					align="center"
					customClassName="max-sm:text-[32px] max-sm:leading-[38px]"
				>
					Contact Us
				</Typography>
				<Typography lineHeight="32" color={"tertiary700"} align="center">
					Have questions about the affiliate store or our services?
				</Typography>
				</div>
				<div
					className={clsx(
						"rounded-7 grid gap-[3.063rem] px-5 md:px-13 pt-[2.688rem] pb-[2.938rem] mt-6.25",
						"max-w-[60.563rem] w-full lg:w-screen place-items-center",
						"bg-white [box-shadow:0px_1px_3px_1px_#00000026,0px_1px_2px_0px_#0000004D]",
					)}
				>
					<div className="grid gap-8 grid-cols-1 place-content-center w-full ">
						<div className="col-span-1 grid grid-cols-2 gap-4 sm:gap-8 w-full">
							<form.Field
								name="firstName"
								children={(field) => (
									<Input label="First Name" placeholder="John" field={field} />
								)}
							/>
							<form.Field
								name="lastName"
								children={(field) => (
									<Input label="Last Name" placeholder="Doe" field={field} />
								)}
							/>
						</div>
						<form.Field
							name="email"
							children={(field) => (
								<Input
									label="Email"
									placeholder="johndoe@example.com"
									field={field}
								/>
							)}
						/>

						<form.Field
							name="message"
							children={(field) => (
								<TextArea
									label="Message"
									placeholder="Write your message here"
									field={field}
								/>
							)}
						/>
					</div>
					<Button
						type="submit"
						text="Send Message"
						primary
						onClick={() => form.handleSubmit()}
					/>
				</div>
			</section>
		</section>
	)
}
