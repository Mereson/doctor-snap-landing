import { AnimatePresence, motion } from "motion/react"
import type { Dispatch, SetStateAction } from "react"
import { Button, HamburgerIcon, Typography } from "../../../ui/elements"
import { NavLinks } from "./navlinks"
import type { NavItemsTypes } from "../navbar"
import { ApplicationRoutes } from "../../../routes"
import { Link } from "@tanstack/react-router"
import clsx from "clsx"
import { useUserContext } from "../../../context"

export const MobileNav = ({
	open,
	setOpen,
	navItems,
}: {
	open: boolean
	setOpen: Dispatch<SetStateAction<boolean>>
	navItems: NavItemsTypes[]
}) => {
	const { user } = useUserContext()

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
					transition={{ duration: 0.5 }}
					className="bg-[#FFF] min-h-screen z-40 grid place-content-center inset-0 w-screen left-0 top-[-80px] overflow-hidden fixed"
				>
					<NavLinks navItems={navItems} setOpen={setOpen} />
					{!user && (
						<div className="grid gap-4 mt-10 w-screen items-center px-[15%] md:px-[30%]">
							<Link
								to={ApplicationRoutes.LOGIN}
								className={clsx(
									"rounded-full cursor-pointer outline-0 border-[0.8px] border-primary900 py-2 w-full flex justify-center gap-2.5",
									"bg-primary10 duration-300 ease-in-out items-center",
								)}
							>
								<Typography fontWeight="semi-bold" color={"tertiary600"}>
									Log in
								</Typography>
							</Link>
							<Link to={ApplicationRoutes.SIGNUP}>
								<Button primary text="Create Account" width="w-full" />
							</Link>
						</div>
					)}
				</motion.div>
			</section>
		</AnimatePresence>
	)
}
