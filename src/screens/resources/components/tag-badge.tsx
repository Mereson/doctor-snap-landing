import type { ResourcesTags } from "../../../lib/types"

export const TagBadge = ({ tag }: { tag: ResourcesTags }) => {
	const { tagBgColor, tagName, tagColor } = tag

	return (
		<div
			style={{ background: tagBgColor }}
			className={`rounded-3 px-2.5 py-[0.234rem]`}
		>
			<p
				style={{ color: tagColor }}
				className="text-[13px] leading-5.25 font-medium"
			>
				{tagName}
			</p>
		</div>
	)
}
