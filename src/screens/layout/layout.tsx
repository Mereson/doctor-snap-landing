import { Outlet } from "@tanstack/react-router"
import { Navbar } from "./navbar"

export const Layout = () => {
	return (
		<>
			<Navbar />
			<Outlet />
		</>
	)
}
