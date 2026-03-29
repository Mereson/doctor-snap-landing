import clsx from "clsx"
import { Button, Input, Typography } from "../../../ui/elements"
import { useForm } from "@tanstack/react-form"

export const ResourcesCTA = () => {
	const form = useForm({
		defaultValues: { userEmail: "" },
		onSubmit: async ({ value }) => {
			console.log(value)
		},
	})
	return (
		<section className="py-22.5">
			<div
				className={clsx(
					"rounded-9 w-full flex-col lg:flex-row max-w-327.5 py-22 lg:py-[3.488rem] px-5.5 lg:px-10 xl:px-20 flex ",
					"items-center relative lg:max-h-67 h-full",
					"bg-linear-[180deg,#0D2329_0%,#122F37_50%,#1D4D5A_100%]",
				)}
			>
				<p className="size-3 bg-[#D1FF5D] rounded-full opacity-20 absolute left-12 bottom-[42.64px]"></p>
				<p className="size-2.5 bg-[#14EDB9] rounded-full opacity-30 absolute top-[20.81px] right-[13.339rem]"></p>
				<article className="grid gap-[13.11px] max-w-114">
					<Typography
						variant="h6"
						font="title"
						customClassName="text-[36px]! leading-[45px] max-w-[26rem] max-lg:text-center"
						color={"neutral100"}
					>
						Stay informed with {""}
						<i className="text-[#73d3f1]">Medical Insights</i>
					</Typography>
					<Typography lineHeight="28" color={"primary200"} customClassName="max-lg:text-center">
						Subscribe to our newsletter for the latest health articles, wellness
						tips, and medical resources delivered to your inbox.
					</Typography>
				</article>
				<div className=" flex gap-3  lg:mt-0 md:mt-12 mt-16 flex-col lg:flex-row justify-end items-center w-full ">
					<form.Field
						name="userEmail"
						children={(field) => (
							<Input
								field={field}
								emailList
								placeholder="Enter your email"
								emailListCustomClass="max-w-[21.438rem] bg-[#FFFFFF1A]! placeholder:text-[#FFFFFF66]! text-white! px-5! py-[17.5px]!"
							/>
						)}
					/>
					<Button text="Subscribe" primary/>
				</div>
			</div>
		</section>
	)
}
