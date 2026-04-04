import clsx from "clsx"

interface ButtonProps {
	primary?: boolean
	secondary?: boolean
	neutral?: boolean
	negative?: boolean
	text: string
	img?: string
	customClassname?: string
	width?: "w-full" | "w-fit"
	type?: "button" | "submit" | undefined
	loading?: boolean
	auth?: boolean
	onClick?: () => unknown
}

const Button: React.FC<ButtonProps> = (props) => {
	const {
		primary,
		secondary,
		neutral,
		negative,
		text,
		customClassname,
		width = "w-fit",
		type = "button",
		onClick,
		loading,
		auth,
		...rest
	} = props
	return (
		<div
			className={clsx(
				`relative group rounded-full overflow-hidden transition-all duration-300 ease-linear ${width}`,
				neutral &&
					"hover:[box-shadow:4px_6px_16px_0px_#FFFFFF4D,-4px_4px_16px_0px_#FFFFFF4D]",
				primary &&
					"hover:[box-shadow:0px_1px_3px_0px_#0000004D,0px_4px_8px_3px_#00000026]",
			)}
		>
			{primary && !loading && (
				<div
					className={clsx(
						" absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-400 ease-linear pointer-events-none ",
						width === "w-full" && "duration-600",
					)}
				>
					<div className="absolute top-5 left-[-20%] w-[200%] rotate-[-52.1deg]">
						<div className="h-[4.45px] bg-white mb-0.25 " />
						<div className="h-[2.34px] bg-white" />
					</div>
				</div>
			)}
			<button
				type={type}
				onClick={onClick}
				className={clsx(
					"w-full cursor-pointer rounded-full py-4 px-6.25 font-semibold justify-center font-roboto-flex ",
					"transition-colors duration-200 ease-linear flex gap-2 items-center",
					primary && "bg-primary1300 text-white",
					secondary &&
						"bg-secondary900 text-white hover:bg-secondary1100 transition-colors duration-300 ease-out",
					neutral && "bg-white text-primary1300 ",
					negative &&
						"bg-white text-primary1200 px-7 border-primary1200 border-[1.11px] hover:bg-primary1200 hover:text-white duration-300!",
					loading && "bg-neutral-500! cursor-not-allowed!",
					customClassname,
				)}
				disabled={loading}
				{...rest}
			>
				{text}

				{secondary ||
					(auth && (
						<div className="flex items-center">
							<img
								src="/svgs/arrow-right-Icon.svg"
								className={clsx(
									"size-6 transition-all duration-300 ease-out",
									auth && "size-4.5!",
									!loading && "group-hover:translate-x-1"
								)}
								alt="arrow right"
							/>
						</div>
					))}
			</button>
		</div>
	)
}

export { Button }
