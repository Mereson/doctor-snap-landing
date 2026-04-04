import { Outlet, useMatchRoute, useNavigate } from "@tanstack/react-router"
import { useEffect } from "react"
import { ApplicationRoutes } from "../../routes"
import { useUserContext } from "../../context"

export const AuthLayout = () => {
	const matchRoute = useMatchRoute()
	const navigate = useNavigate()

	const { user } = useUserContext()

	useEffect(() => {
		if (matchRoute({ to: "/auth" })) {
			navigate({ to: ApplicationRoutes.LOGIN })
		}

		if (user) {
			navigate({ to: ApplicationRoutes.HOME })
		}
	}, [matchRoute, navigate, user])
	return <Outlet />
}
