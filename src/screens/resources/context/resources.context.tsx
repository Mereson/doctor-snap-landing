import {
	createContext,
	useContext,
	type Dispatch,
	type SetStateAction,
} from "react"

interface ResourcesNavSelectType {
	selectedTab: string
	setSelectedTab: Dispatch<SetStateAction<string>>
}

export const ResourcesNavSelectContext = createContext<ResourcesNavSelectType>({
	selectedTab: "All",
	setSelectedTab: () => {},
})

// See ResourcesNavSelectProvider in resources.provider.tsx file

export const useResourcesNavSelect = () => {
	const context = useContext(ResourcesNavSelectContext)
	if (!context)
		throw new Error(
			"useResourcesNavSelect must be used within a ResourcesNavSelectProvider",
		)
	return context
}
