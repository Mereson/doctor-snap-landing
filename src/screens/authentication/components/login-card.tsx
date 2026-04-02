import clsx from "clsx"
import { Logo } from "../../layout"
import { Button, Typography } from "../../../ui/elements"
import { loginSchema, type LoginSchemaType } from "../../../lib"
import { useForm } from "@tanstack/react-form"
import { AuthInput } from "./auth-input"
import { Link } from "@tanstack/react-router"
import { ApplicationRoutes } from "../../../routes"
import { ContinueWithGoogle } from "./continue-with-google"

export const LoginCard = () => {
	const defaultState: LoginSchemaType = {
		email: "",
		password: "",
		remember: false,
	}

	const form = useForm({
		defaultValues: defaultState,
		validators: {
			onSubmit: loginSchema,
		},
		onSubmit: async ({ value }) => {
			console.log(value)
		},
	})

	return (
		<div
			className={clsx(
				"col-span-1 px-16 pt-16 pb-8 rounded-8",
				"border border-[#E8F0F2] shadow-[0px_8px_40px_0px_#0000000F]",
			)}
		>
			<div>
				<Logo />
				<Typography
					variant="h5"
					font="title"
					color={"primary1300"}
					customClassName="leading-[60px] mt-6 mb-2"
				>
					Log in
				</Typography>
				<Typography color={"tertiary600"} customClassName="leading-[32px]">
					Enter your credentials to access your account
				</Typography>
			</div>
			<div className="grid gap-6 w-full mt-8 mb-6">
				<form.Field
					name="email"
					children={(field) => (
						<AuthInput
							label="Email address"
							field={field}
							placeholder="you@example.com"
							img="/svgs/Mail-gray.svg"
						/>
					)}
				/>
				<form.Field
					name="password"
					children={(field) => (
						<AuthInput
							label="Password"
							field={field}
							placeholder="Enter your password"
							img="/svgs/Lock-gray.svg"
							password
						/>
					)}
				/>
				<div className="flex items-center justify-between">
					<div className="flex gap-2 items-center">
						<form.Field
							name="remember"
							children={(field) => (
								<input
									type="checkbox"
									onChange={(e) => field.handleChange(e.target.checked)}
									className="cursor-pointer"
								/>
							)}
						/>
						<Typography
							variant="body-s"
							color={"tertiary600"}
							customClassName="leading-[21px]"
						>
							Remember me
						</Typography>
					</div>
					<Typography
						variant="body-s"
						color={"primary1100"}
						customClassName="leading-[21px] cursor-pointer"
					>
						Forgot password?
					</Typography>
				</div>
				<Button
					primary
					width="w-full"
					text="Log in"
					auth
					onClick={() => form.handleSubmit()}
				/>
			</div>
			<ContinueWithGoogle />
			<div className="mt-6 flex gap-1 w-full items-center justify-center">
				<Typography
					variant="body-s"
					color={"tertiary600"}
					customClassName="leading-[21px]"
				>
					Don't have an account?
				</Typography>
				<Link to={ApplicationRoutes.SIGNUP}>
					<Typography
						fontWeight="semi-bold"
						color={"primary1100"}
						customClassName="leading-[24px]"
					>
						Sign up
					</Typography>
				</Link>
			</div>
		</div>
	)
}
