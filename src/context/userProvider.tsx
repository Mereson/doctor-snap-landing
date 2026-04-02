import { useEffect, useState } from "react"
import { type UserDataType } from "../lib/types"
import { UserContext } from "./userContext"
import { socialSignIn } from "../lib/services"

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
	const [user, setUserState] = useState<UserDataType | null>(null)
	const [modalIsOpen, setModalIsOpen] = useState(false)

	const setUser = (user: UserDataType | null) => {
		if (user) sessionStorage.setItem("user", JSON.stringify(user))
		else {
			sessionStorage.removeItem("user")
		}
		setUserState(user)
	}
	useEffect(() => {
		const initialiseUser = async () => {
			const storedUser = sessionStorage.getItem("user")
			if (storedUser) {
				setUserState(JSON.parse(storedUser))
				return
			}

			const data = await socialSignIn()

			if (data?.user) {
				setUser(data.user)
			}
		}
		initialiseUser()
	}, [])

	return (
		<UserContext.Provider
			value={{ user, setUser, modalIsOpen, setModalIsOpen }}
		>
			{children}
		</UserContext.Provider>
	)
}
