export const ClockIcon = ({
	strokeColor = "#5B747A",
}: {
	strokeColor?: string
}) => {
	return (
		<svg
			width="14"
			height="14"
			viewBox="0 0 14 14"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g clip-path="url(#clip0_247_459)">
				<path
					d="M6.99658 3.49805V6.99631L9.32876 8.1624"
					stroke={strokeColor}
					strokeOpacity="0.8"
					strokeWidth="1.16609"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M6.99646 12.8269C10.2165 12.8269 12.8269 10.2165 12.8269 6.99646C12.8269 3.77639 10.2165 1.16602 6.99646 1.16602C3.77639 1.16602 1.16602 3.77639 1.16602 6.99646C1.16602 10.2165 3.77639 12.8269 6.99646 12.8269Z"
					stroke={strokeColor}
					strokeOpacity="0.8"
					strokeWidth="1.16609"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</g>
			<defs>
				<clipPath id="clip0_247_459">
					<rect width="13.9931" height="13.9931" fill="white" />
				</clipPath>
			</defs>
		</svg>
	)
}
