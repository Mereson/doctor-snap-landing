import { Link } from "@tanstack/react-router"
import { Button, HamburgerIcon, Typography } from "../../ui/elements"
import { ApplicationRoutes } from "../../routes"
import { NavLinks } from "./components"
import { useMediaQuery } from "usehooks-ts"
import { AnimatePresence, motion } from "motion/react"
import { useEffect, useState, type Dispatch, type SetStateAction } from "react"
import clsx from "clsx"

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
						<MobileNav open={open} setOpen={setOpen} />
					</>
				)}
				{!md && (
					<div className="flex gap-6 items-center">
						<Link to=".">
							<Typography fontWeight="semi-bold" color={"tertiary600"}>
								Log in
							</Typography>
						</Link>
						<Button primary text="Create Account" />
					</div>
				)}
			</nav>
		</nav>
	)
}

const MobileNav = ({
	open,
	setOpen,
}: {
	open: boolean
	setOpen: Dispatch<SetStateAction<boolean>>
}) => {
	return (
		<AnimatePresence>
			<section className="grid">
				<div
					key={1}
					className="z-50 cursor-pointer"
					onClick={() => {
						setOpen((p) => !p)
					}}
				>
					<HamburgerIcon open={open} color={"black"} />
				</div>

				<motion.div
					key={2}
					initial={false}
					animate={open ? { x: 0 } : { x: 1440 }}
					transition={{ duration: 0.7 }}
					className="bg-[#FFF] min-h-screen h-[110vh] z-40 grid place-content-center inset-0 w-screen left-0 top-[-80px] overflow-hidden fixed"
				>
					<NavLinks navItems={navItems} setOpen={setOpen} />
				</motion.div>
			</section>
		</AnimatePresence>
	)
}
