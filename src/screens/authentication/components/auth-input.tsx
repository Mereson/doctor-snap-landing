import clsx from "clsx"
import { Typography } from "../../../ui/elements"
import type { AnyFieldApi } from "@tanstack/react-form"
import { useState } from "react"

interface AuthInputProps {
	label: string
	placeholder: string
	field: AnyFieldApi
	img?: string
	password?: boolean
}

export const AuthInput: React.FC<AuthInputProps> = (props) => {
	const { label, placeholder, field, img, password } = props

	const [isHidden, setIsHidden] = useState(true)

	return (
		<div className="grid gap-2 w-full col-span-1">
			<label>
				<Typography
					variant="body-s"
					fontWeight={"medium"}
					color={"primary1300"}
					customClassName="leading-[21px]"
				>
					{label}
				</Typography>
			</label>
			<div
				className={clsx(
					"rounded-6 border-[0.8px] border-[#E8F0F2] w-full flex gap-2.5",
					"py-2 px-4 bg-[#46595E1A] items-center",
				)}
			>
				{img && <img src={img} className="size-4.5" alt="input icon" />}
				<input
					type={password && isHidden ? "password" : "text"}
					name={field.name}
					placeholder={placeholder}
					value={field.state.value}
					onChange={(e) => field.handleChange(e.target.value)}
					className="outline-0 placeholder:text-[#0D232980] text-primary1200 leading-[32px] w-full"
				/>
				{password && (
					<div
						onClick={() => setIsHidden((p) => !p)}
						className="cursor-pointer"
					>
						<img
							src="/svgs/Eye-gray.svg"
							className="size-4.5"
							alt="password visibility icon"
						/>
					</div>
				)}
			</div>
			{field.state.meta.errors.map((error, i) => (
				<div
					key={i}
					className="px-2"
				>
					<Typography
						key={i}
						variant="body-xs"
						color={"red100"}
						customClassName="leading-[21px]"
					>
						{error.message}
					</Typography>
				</div>
			))}
		</div>
	)
}
