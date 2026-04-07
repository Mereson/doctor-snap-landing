import { LoginCard, WelcomeCard } from "./components"

export const LoginPage = () => {
	return (
		<section className="max-w-[1440px] mx-auto w-full max-[340px]:px-3 px-5 sm:px-8 py-3 lg:py-25">
			<section className="w-full grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-10.5">
				<WelcomeCard />
				<LoginCard />
			</section>
		</section>
	)
}
