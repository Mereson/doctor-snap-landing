import { type RefObject } from "react"
import { Typography } from "../../../ui/elements"
import { Link } from "@tanstack/react-router"
import { useUserContext } from "../../../context"
import { useUserSignOut } from "../../../lib/services"

export const UserModal = ({
	modalRef,
}: {
	modalRef: RefObject<HTMLDivElement | null>
}) => {
	const { user, setUser, setModalIsOpen } = useUserContext()

	const { mutateAsync: logout } = useUserSignOut()

	if (!user) {
		return
	}

	const { firstName, lastName, email } = user

	const handleLogout = async () => {
		await logout()
		setUser(null)
		setModalIsOpen(false)
	}

	return (
		<div
			ref={modalRef}
			className="rounded-7 p-5 grid bg-white shadow-sm z-30 absolute top-18 border border-[#E8F0F2] right-16 gap-5"
		>
			<div>
				<Typography
					variant="body-s"
					lineHeight={"18"}
					fontWeight="bold"
					customClassName="text-ellipsis max-w-[24ch] overflow-hidden"
				>
					{firstName} {lastName}
				</Typography>
				<Typography
					variant="body-xs"
					lineHeight={"18"}
					customClassName="text-ellipsis max-w-[24ch] overflow-hidden"
				>
					{email}
				</Typography>
			</div>
			<Link to=".">
				<Typography variant="body-s" lineHeight={"18"} fontWeight="semi-bold">
					Account Settings
				</Typography>
			</Link>
			{user.role === "ADMIN" && (
				<Link to=".">
					<Typography variant="body-s" lineHeight={"18"} fontWeight="semi-bold">
						Dashboard
					</Typography>
				</Link>
			)}
			<p className="w-full h-0.5 bg-primary10"></p>
			<button onClick={() => handleLogout()} className="cursor-pointer">
				<Typography
					variant="body-s"
					lineHeight={"18"}
					color={"red200"}
					fontWeight="semi-bold"
				>
					Log Out
				</Typography>
			</button>
		</div>
	)
}
