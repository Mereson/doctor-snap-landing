import { Link } from "@tanstack/react-router"
import { Button, Typography } from "../../ui/elements"
import { ApplicationRoutes } from "../../routes"
import { NavLinks } from "./components"

export interface NavItemsTypes {
	to: string
	href: string
}
const navItems: NavItemsTypes[] = [
	{ to: "Home", href: ApplicationRoutes.HOME },
	{ to: "About", href: ApplicationRoutes.ABOUT },
	{ to: "Affiliate Store", href: ApplicationRoutes.AFFILIATE_STORE },
	{ to: "Resources", href: ApplicationRoutes.RESOURCES },
]

export const Navbar = () => {
	return (
		<nav className="grid place-content-center border-b fixed z-20 bg-white border-b-tertiary100">
			<nav className="py-[1.344rem] px-16 text mx-auto max-w-[1440px] w-screen  flex justify-between">
				<figure className="flex items-center gap-2">
					<img src="/svgs/logo.svg" alt="Logo" />
					<Typography
						variant="h7"
						lineHeight="full"
						fontWeight="medium"
						color={"primary1300"}
					>
						Doctor Snap
					</Typography>
				</figure>

				<NavLinks navItems={navItems} />

				<div className="flex gap-6 items-center">
					<Link to=".">
						<Typography fontWeight="semi-bold" color={"tertiary600"}>
							Log in
						</Typography>
					</Link>
					<Button primary text="Create Account" />
				</div>
			</nav>
		</nav>
	)
}
