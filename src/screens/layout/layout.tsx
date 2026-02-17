import { Outlet, useRouterState } from "@tanstack/react-router"
import { Navbar } from "./navbar"
import { Footer } from "./footer"
import { useEffect } from "react"

export const Layout = () => {
	const pathname = useRouterState({ select: (s) => s.location.pathname })

	useEffect(() => {
		window.scrollTo({ top: 0, behavior: "smooth" })
	}, [pathname])

	return (
		<>
			<Navbar />
			<Outlet />
			<Footer />
		</>
	)
}
