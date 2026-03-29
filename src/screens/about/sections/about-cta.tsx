import clsx from "clsx"
import { Button, Typography } from "../../../ui/elements"

export const AboutCTA = () => {
	return (
		<section className="bg-linear-[180deg,#0D2329_0%,#153842_50%,#1D4D5A_100%] grid place-content-center">
			<section
				className={clsx(
					"max-w-[1440px] mx-auto grid gap-6 place-items-center overflow-hidden relative pt-[7.188rem] pb-[6.063rem]",
					"max-sm:px-6 sm:pt-[4.924rem] sm:pb-24.5",
				)}
			>
				<img
					src="/svgs/dots2.svg"
					className="absolute sm:top-[2.884rem] sm:left-[7.721rem]"
					alt="dots"
				/>
				<Typography
					variant="h4"
					font="title"
					align="center"
					customClassName="leading-[38px] sm:leading-[57.6px] max-w-2xl"
					color={"neutral100"}
				>
					Ready to experience healthcare{" "}
					<i className="text-primary300">without barriers?</i>
				</Typography>
				<Typography
					variant="body-m"
					lineHeight="32"
					align="center"
					color={"primary200"}
					customClassName="max-w-[34.688rem] max-sm:leading-7"
				>
					Join thousands of patients who have already discovered a better way to
					access quality medical care.
				</Typography>
				<div className="w-full flex justify-center">
					<Button text="Get Started Today" neutral />
				</div>
			</section>
		</section>
	)
}
