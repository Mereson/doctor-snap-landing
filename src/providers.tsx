import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { UserProvider } from "./context"


const Providers = ({ children }: { children: React.ReactNode }) => {
	const queryClient = new QueryClient()
	return (
		<QueryClientProvider client={queryClient}>
			<UserProvider>{children}</UserProvider>
			<ReactQueryDevtools />
		</QueryClientProvider>
	)
}

export default Providers
