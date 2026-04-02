import { Link } from "@tanstack/react-router"
import { Button, Typography } from "../../ui/elements"
import { ApplicationRoutes } from "../../routes"
import { MobileNav, NavLinks, UserIcon } from "./components"
import { useMediaQuery } from "usehooks-ts"
import { useEffect, useState } from "react"
import clsx from "clsx"
import { useUserContext } from "../../context"


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
	const md = useMediaQuery("(max-width: 1024px)")
	const [open, setOpen] = useState(false)

	const { user } = useUserContext()

	useEffect(() => {
		if (open) {
			document.body.style.overflow = "hidden"
		} else {
			document.body.style.overflow = ""
		}

		return () => {
			document.body.style.overflow = ""
		}
	}, [open])
	return (
		<nav className="grid place-content-center border-b w-screen fixed z-20 bg-white border-b-tertiary100">
			<nav
				className={clsx(
					"py-[1.344rem] px-6 sm:px-12 xl:px-16 text mx-auto max-w-[1440px] w-screen items-center flex justify-between",
				)}
			>
				<figure className="flex items-center gap-2">
					<img
						src="/svgs/logo.svg"
						className="w-10.75 h-10 xl:w-11.25 xl:h-10.25"
						alt="Logo"
					/>
					<Typography
						variant="h7"
						lineHeight="full"
						fontWeight="medium"
						color={"primary1300"}
					>
						Doctor Snap
					</Typography>
				</figure>
				{!md ? (
					<NavLinks navItems={navItems} />
				) : (
					<>
						<MobileNav open={open} setOpen={setOpen} navItems={navItems} />
					</>
				)}
				{!md && !user && (
					<div className="flex gap-6 items-center">
						<Link to={ApplicationRoutes.LOGIN}>
							<Typography fontWeight="semi-bold" color={"tertiary600"}>
								Log in
							</Typography>
						</Link>
						<Link to={ApplicationRoutes.SIGNUP}>
							<Button primary text="Create Account" />
						</Link>
					</div>
				)}

				{user && <UserIcon />}
			</nav>
		</nav>
	)
}
