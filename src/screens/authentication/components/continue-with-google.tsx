import clsx from "clsx"
import { Typography } from "../../../ui/elements"
import { handleGoogleCall } from "../../../lib/services"

export const ContinueWithGoogle = () => {
	return (
		<div className="w-full lg:px-8 grid gap-3">
			<div className="flex items-center gap-2.5 py-0.5">
				<p className="w-full h-0.5 bg-primary10"></p>
				<Typography
					variant="body-s"
					color={"tertiary600"}
					customClassName="leading-[21px]"
				>
					Or
				</Typography>
				<p className="w-full h-0.5 bg-primary10"></p>
			</div>
			<div className="max-[400px]:px-0 px-7.25">
				<button
					type="submit"
					onClick={async () => await handleGoogleCall()}
					className={clsx(
						"rounded-full cursor-pointer outline-0 border-[0.8px] border-primary900 py-3 w-full flex justify-center gap-2.5",
						"hover:bg-primary10 duration-300 ease-in-out items-center",
					)}
				>
					<img src="/svgs/Google.svg" className="size-6" alt="Google icon" />
					<Typography
						fontWeight="semi-bold"
						color={"black"}
						customClassName="leading-[24px]"
					>
						Continue with Google
					</Typography>
				</button>
			</div>
		</div>
	)
}
