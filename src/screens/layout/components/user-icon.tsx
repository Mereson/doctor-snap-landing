import { useEffect, useRef } from "react"
import { useUserContext } from "../../../context"
import { UserModal } from "./user-modal"

export const UserIcon = () => {
	const { setModalIsOpen, modalIsOpen } = useUserContext()
	const modalRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const handleClickOutside = (e: MouseEvent) => {
			if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
				setModalIsOpen(false)
			}
		}

		if (modalIsOpen) {
			document.addEventListener("mousedown", handleClickOutside)
		}

		return () => document.removeEventListener("mousedown", handleClickOutside)
	}, [modalIsOpen, setModalIsOpen])

	return (
		<>
			<div
				onClick={() => setModalIsOpen((p) => !p)}
				className="cursor-pointer rounded-full p-2 bg-primary1100"
			>
				<img
					src="/public/svgs/user-regular-full.svg"
					className="size-6"
					alt="user-icon"
				/>
			</div>

			{modalIsOpen && <UserModal modalRef={modalRef} />}
		</>
	)
}
