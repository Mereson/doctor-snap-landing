import { Link, useMatchRoute } from "@tanstack/react-router"
import { Button, Typography } from "../../ui/elements"
import { ApplicationRoutes } from "../../routes"

export const Navbar = () => {
	return (
		<nav className="grid place-content-center border-b border-b-tertiary100">
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
				<div className="flex gap-[2.644rem] items-center">
					<NavItemLarge to="Home" href={ApplicationRoutes.HOME} />
					<NavItemLarge to="About" href={ApplicationRoutes.ABOUT} />
					<NavItemLarge
						to="Affiliate Store"
						href={ApplicationRoutes.AFFILIATE_STORE}
					/>
					<NavItemLarge to="Resources" href={ApplicationRoutes.RESOURCES} />
				</div>
				<div className="flex gap-6 items-center">
					<Link to=".">
						<Typography fontWeight="semi-bold" color={"tertiary600"}>
							Log in
						</Typography>
					</Link>
                    <Button primary text="Create Account"/>
				</div>
			</nav>
		</nav>
	)
}

const NavItemLarge = ({ to, href }: { to: string; href: string }) => {
	const matchRoute = useMatchRoute()
	const isActive = matchRoute({ to: href, fuzzy: true })

	return (
		<Link
			to={href}
			className={isActive ? "border-b-2 border-primary1300 py-0.5" : "py-0.5"}
		>
			<Typography
				variant="body-l"
				lineHeight="full"
				fontWeight="medium"
				color={isActive ? "primary1300" : "tertiary600"}
			>
				{to}
			</Typography>
		</Link>
	)
}
