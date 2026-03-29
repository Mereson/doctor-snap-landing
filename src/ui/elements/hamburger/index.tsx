import { motion } from "motion/react"

export const HamburgerIcon = ({
	color,
	open,
}: {
	color: string
	open: boolean
}) => {
	return (
		<motion.svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<motion.path
				animate={open ? "open" : "closed"}
				variants={{
					closed: { rotate: 0, y: 0 },
					open: { rotate: -45, y: 6 },
				}}
				transition={{ duration: 0.2 }}
				d="M3.97461 5.97485H19.9746"
				stroke={color}
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<motion.path
				animate={open ? "open" : "closed"}
				variants={{
					closed: { opacity: 1 },
					open: { opacity: 0 },
				}}
				transition={{ duration: 0.2 }}
				d="M3.97461 11.9748H19.9746"
				stroke={color}
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<motion.path
				animate={open ? "open" : "closed"}
				variants={{
					closed: { rotate: 0, y: 0 },
					open: { rotate: 45, y: -6 },
				}}
				transition={{ duration: 0.2 }}
				d="M3.97461 17.9748H19.9746"
				stroke={color}
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</motion.svg>
	)
}
