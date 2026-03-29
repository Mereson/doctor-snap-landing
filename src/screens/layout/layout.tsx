import { Outlet } from "@tanstack/react-router"
import { Navbar } from "./navbar"
import { Footer } from "./footer"
import { ScrollController } from "../../lib"

export const Layout = () => {
	return (
		<>
			<Navbar />
			<Outlet />
			<Footer />
			<ScrollController />
		</>
	)
}
