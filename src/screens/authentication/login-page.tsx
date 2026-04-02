import { LoginCard, WelcomeCard } from "./components"

export const LoginPage = () => {
	return (
		<section className="max-w-[1440px] mx-auto w-full px-8 py-25">
			<section className="w-full grid grid-cols-2 gap-10.5">
				<WelcomeCard />
				<LoginCard />
			</section>
		</section>
	)
}
