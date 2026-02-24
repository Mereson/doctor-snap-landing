import { useState } from "react"
import { ResourcesNavSelectContext } from "./resources.context"

export const ResourcesNavSelectProvider = ({
	children,
}: {
	children: React.ReactNode
}) => {
	const [selectedTab, setSelectedTab] = useState("All")

	return (
		<ResourcesNavSelectContext.Provider value={{ selectedTab, setSelectedTab }}>
			{children}
		</ResourcesNavSelectContext.Provider>
	)
}

// Provider is seperated from context due to react fast refresh