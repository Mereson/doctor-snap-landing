import clsx from "clsx"

interface ButtonProps {
	primary?: boolean
	secondary?: boolean
	neutral?: boolean
	text: string
	img?: string
	customClassname?: string
	width?: "w-full" | "w-fit"
	type?: "button" | "submit" | undefined
	loading?: boolean
	onClick?: () => unknown
}

const Button: React.FC<ButtonProps> = (props) => {
	const {
		primary,
		secondary,
		neutral,
		text,
		customClassname,
		width = "w-fit",
		type = "button",
		onClick,
		loading,
		...rest
	} = props
	return (
		<div className={`relative group rounded-full overflow-hidden ${width}`}>
			{!secondary && (
				<div
					className="
    absolute inset-0
    -translate-x-full
    group-hover:translate-x-full
    transition-transform duration-400 ease-linear
    pointer-events-none
  "
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
					primary && "bg-primary1300! text-white",
					secondary &&
						"bg-secondary900 text-white hover:bg-secondary1100 transition-colors duration-300 ease-out",
					neutral && "bg-white text-primary1300s",
					loading && "bg-gray-300 cursor-not-allowed!",
					customClassname,
				)}
				disabled={loading}
				{...rest}
			>
				{text}

				{secondary && (
					<img
						src="/svgs/arrow-right-Icon.svg"
						className="size-6 group-hover:translate-x-1 transition-all duration-300 ease-out"
						alt="arrow right"
					/>
				)}
			</button>
		</div>
	)
}

export { Button }
