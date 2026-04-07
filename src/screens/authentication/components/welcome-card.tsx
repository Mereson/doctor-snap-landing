import clsx from "clsx"
import { Typography } from "../../../ui/elements"

export const WelcomeCard = () => {
	return (
		<div
			className={clsx(
				"col-span-1 rounded-8 pl-16 pt-24.5",
				"bg-[linear-gradient(180deg,#0D2329_0%,#1D4D5A_100%)]",
			)}
		>
			<div className="max-w-100 grid gap-4.25">
				<Typography
					font="title"
					variant="h4"
					color={"neutral100"}
					customClassName="leading-[72px]"
				>
					Welcome Back to{" "}
					<span className="italic text-primary400"> Doctor Snap</span>
				</Typography>
				<Typography color={"primary200"} customClassName="leading-[32px]">
					Continue your wellness journey...
				</Typography>
			</div>
		</div>
	)
}
