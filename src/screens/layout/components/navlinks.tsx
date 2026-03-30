import { Link, useRouterState } from "@tanstack/react-router"
import {
	useEffect,
	useRef,
	useState,
	type Dispatch,
	type SetStateAction,
} from "react"
import { Typography } from "../../../ui/elements"
import * as motion from "motion/react-client"
import type { NavItemsTypes } from "../navbar"
import { useMediaQuery } from "usehooks-ts"
import clsx from "clsx"

export const NavLinks = ({
	navItems,
	setOpen,
}: {
	navItems: NavItemsTypes[]
	setOpen?: Dispatch<SetStateAction<boolean>>
}) => {
	const pathname = useRouterState({ select: (s) => s.location.pathname })
	const activeIndex = navItems.findIndex(
		(item) => pathname === item.href || pathname.startsWith(item.href + "/"),
	)
	const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 })
	const linkRefs = useRef<(HTMLElement | null)[]>([])
	const containerRef = useRef<HTMLDivElement>(null)

	const md = useMediaQuery("(max-width: 1024px) ")

	useEffect(() => {
		const activeEl = linkRefs.current[activeIndex]
		const containerEl = containerRef.current
		if (!activeEl || !containerEl) return

		const containerLeft = containerEl.getBoundingClientRect().left
		const { left, width } = activeEl.getBoundingClientRect()
		setIndicatorStyle({ left: left - containerLeft, width })
	}, [activeIndex])

	const handleOpen = async () => {
		if (!md || !setOpen) return
		await new Promise<void>((resolve) => setTimeout(resolve, 300))
		setOpen((p) => !p)
	}

	return (
		<div
			ref={containerRef}
			className={clsx(
				"flex  xl:gap-[2.644rem] gap-8 items-center relative",
				md && "flex-col gap-[2.344rem]",
			)}
		>
			{navItems.map((item, index) => {
				const isActive = activeIndex === index
				return (
					<Link
						key={item.href}
						to={item.href}
						ref={(el) => {
							linkRefs.current[index] = el
						}}
						className="outline-0"
						onClick={() => handleOpen()}
					>
						<Typography
							variant="body-l"
							lineHeight="full"
							fontWeight="medium"
							customClassName="lg:text-base! xl:text-xl"
							color={isActive ? "primary1300" : "tertiary600"}
						>
							{item.to}
						</Typography>

						{/* Underline mobile view */}
						{md && isActive && activeIndex !== -1 && (
							<motion.div
								className="h-0.5 mt-1.5 bg-primary1300"
								initial={{ scaleX: 0 }}
								animate={{ scaleX: 1 }}
								transition={{ duration: 0.25, ease: "easeOut" }}
								style={{ width: "100%" }}
							/>
						)}
					</Link>
				)
			})}

			{/* Underline */}
			{!md && activeIndex !== -1 && (
				<motion.div
					className="absolute -bottom-1.5 h-0.5 bg-primary1300"
					animate={indicatorStyle}
					transition={{ type: "spring", stiffness: 300, damping: 30 }}
				/>
			)}
		</div>
	)
}
