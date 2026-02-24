import { Link, useRouterState } from "@tanstack/react-router"
import { useEffect, useRef, useState } from "react"
import { Typography } from "../../../ui/elements"
import * as motion from "motion/react-client"
import type { NavItemsTypes } from "../navbar"

export const NavLinks = ({ navItems }: { navItems: NavItemsTypes[] }) => {
	const pathname = useRouterState({ select: (s) => s.location.pathname })
	const activeIndex = navItems.findIndex(
		(item) => pathname === item.href || pathname.startsWith(item.href + "/"),
	)
	const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 })
	const linkRefs = useRef<(HTMLElement | null)[]>([])
	const containerRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const activeEl = linkRefs.current[activeIndex]
		const containerEl = containerRef.current
		if (!activeEl || !containerEl) return

		const containerLeft = containerEl.getBoundingClientRect().left
		const { left, width } = activeEl.getBoundingClientRect()
		setIndicatorStyle({ left: left - containerLeft, width })
	}, [activeIndex])

	return (
		<div
			ref={containerRef}
			className="flex gap-[2.644rem] items-center relative"
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
					>
						<Typography
							variant="body-l"
							lineHeight="full"
							fontWeight="medium"
							color={isActive ? "primary1300" : "tertiary600"}
						>
							{item.to}
						</Typography>
					</Link>
				)
			})}

			{activeIndex !== -1 && (
				<motion.div
					className="absolute bottom-3 h-0.5 bg-primary1300"
					animate={indicatorStyle}
					transition={{ type: "spring", stiffness: 300, damping: 30 }}
				/>
			)}
		</div>
	)
}
