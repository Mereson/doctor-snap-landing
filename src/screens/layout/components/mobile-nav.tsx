import { AnimatePresence, motion } from "motion/react"
import type { Dispatch, SetStateAction } from "react"
import { HamburgerIcon } from "../../../ui/elements"
import { NavLinks } from "./navlinks"
import type { NavItemsTypes } from "../navbar"

export const MobileNav = ({
	open,
	setOpen,
	navItems,
}: {
	open: boolean
	setOpen: Dispatch<SetStateAction<boolean>>
	navItems: NavItemsTypes[]
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
					transition={{ duration: 0.5 }}
					className="bg-[#FFF] min-h-screen h-[110vh] z-40 grid place-content-center inset-0 w-screen left-0 top-[-80px] overflow-hidden fixed"
				>
					<NavLinks navItems={navItems} setOpen={setOpen} />
				</motion.div>
			</section>
		</AnimatePresence>
	)
}
