import { createContext, useContext, type Dispatch, type SetStateAction } from "react"
import type { UserDataType } from "../lib/types"

interface UserContextType {
	user: UserDataType | null
	modalIsOpen: boolean
	setUser: (user: UserDataType | null) => void
	setModalIsOpen: Dispatch<SetStateAction<boolean>>
}

export const UserContext = createContext<UserContextType | undefined>(undefined)

export const useUserContext = () => {
	const context = useContext(UserContext)
	if (!context)
		throw new Error("useUserContext must be used within a UserProvider")
	return context
}
