import clsx from "clsx"
import { Logo } from "../layout"
import { AuthInput, ContinueWithGoogle } from "./components"
import { Button, Typography } from "../../ui/elements"
import { useForm } from "@tanstack/react-form"
import { signupSchema, type SignupSchemaType } from "../../lib"
import { Link, useNavigate } from "@tanstack/react-router"
import { ApplicationRoutes } from "../../routes"
import { useUserContext } from "../../context"
import { useUserSignUp } from "../../lib/services"

export const SignupPage = () => {
	const { setUser } = useUserContext()
	const { mutateAsync: signup, isSuccess, isPending } = useUserSignUp()

	const navigate = useNavigate()

	const defaultState: SignupSchemaType = {
		firstName: "",
		lastName: "",
		email: "",
		password: "",
	}

	const formInput = useForm({
		defaultValues: defaultState,
		validators: {
			onSubmit: signupSchema,
		},
		onSubmit: async ({ value }) => {
			const {
				firstName: userFirstName,
				lastName: userLastName,
				email,
				password,
			} = value

			// Convert names to sentence case
			const firstName =
				userFirstName.slice(0, 1).toUpperCase() +
				userFirstName.slice(1, userFirstName.length)

			const lastName =
				userLastName.slice(0, 1).toUpperCase() +
				userLastName.slice(1, userLastName.length)

			// Signup logic
			const signupData = { firstName, lastName, email, password }
			const res = await signup(signupData)
			if (isSuccess) {
				setUser(res.user)
				navigate({ to: ApplicationRoutes.HOME })
			}
		},
	})

	return (
		<section className="max-w-[1440px] mx-auto bg-white w-full p-5 sm:p-8">
			<Logo />
			<div className="grid gap-16 w-full max-w-[42.188rem] mx-auto">
				<div className=" sm:pt-8"></div>
				<div
					className={clsx(
						"bg-white border border-[#E8F0F2] w-full",
						"shadow-[0px_8px_40px_0px_#0000000F] rounded-8 max-[340px]:px-6 px-8 max-[570px]:pb-10 py-16 sm:px-16",
					)}
				>
					<article>
						<div className="flex gap-2.5 pb-2 items-center">
							<figure className="rounded-6 p-2.5 bg-[#E8F7FC]">
								<img
									src="/svgs/user-icon.svg"
									className="size-5"
									alt="user icon"
								/>
							</figure>
							<Typography
								font="title"
								variant="h6"
								color={"primary1300"}
								customClassName="max-[408px]:text-[1.5rem] max-[408px]:leading-[32px] leading-[51px]"
							>
								Create your account
							</Typography>
						</div>
						<Typography
							color={"tertiary600"}
							customClassName="max-[408px]:leading-7 leading-[32px] max-[408px]:mt-1"
						>
							Let's start with your basic information
						</Typography>
					</article>
					<form className="pt-3.25 pb-8 grid gap-6">
						<div className="grid max-[425px]:grid-cols-1 grid-cols-2 gap-6 place-items-start">
							<formInput.Field
								name="firstName"
								children={(field) => (
									<AuthInput
										field={field}
										label="First Name"
										placeholder="John"
									/>
								)}
							/>
							<formInput.Field
								name="lastName"
								children={(field) => (
									<AuthInput
										field={field}
										label="Last Name"
										placeholder="Doe"
									/>
								)}
							/>
						</div>
						<formInput.Field
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
						<formInput.Field
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
					</form>
					<div className=" border-t border-t-primary10 flex justify-between py-4">
						<div className="flex gap-1 w-full items-center max-[570px]:hidden">
							<Typography
								variant="body-s"
								color={"tertiary600"}
								customClassName="leading-[21px]"
							>
								Already have an account?
							</Typography>
							<Link to={ApplicationRoutes.LOGIN}>
								<Typography
									fontWeight="semi-bold"
									color={"primary1100"}
									customClassName="leading-[24px]"
								>
									Log in
								</Typography>
							</Link>
						</div>
						<div className="max-[570px]:max-w-full max-w-[12.938rem] w-full">
							<Button
								primary
								text="Continue"
								auth
								width="w-full"
								onClick={() => formInput.handleSubmit()}
								loading={isPending}
							/>
						</div>
					</div>
					<ContinueWithGoogle />

					<div className="hidden gap-1 w-full mt-6 items-center justify-center max-[570px]:flex">
						<Typography
							variant="body-s"
							color={"tertiary600"}
							customClassName="leading-[21px]"
						>
							Already have an account?
						</Typography>
						<Link to={ApplicationRoutes.LOGIN}>
							<Typography
								fontWeight="semi-bold"
								color={"primary1100"}
								customClassName="leading-[24px]"
							>
								Log in
							</Typography>
						</Link>
					</div>
				</div>
			</div>
		</section>
	)
}
