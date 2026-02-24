import { useRouterState } from "@tanstack/react-router"
import { useEffect } from "react"

export const ScrollController = () => {
	const { location } = useRouterState()
	const pathname = location.pathname

	useEffect(() => {
		if (!location.hash) {
			window.scrollTo({ top: 0, behavior: "auto" })
			return
		}

		const id = location.hash.slice(1)
		const element = document.getElementById(id)

		if (element) {
			element.scrollIntoView({ behavior: "smooth", block: "center" })
		}
	}, [location.hash, pathname])

	return null
}
