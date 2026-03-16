import { Image, Typography } from "../../../ui/elements"

export const CreationStory = () => {
	return (
		<section
			id="creation-story"
			className="max-w-[1440px] mx-auto px-14 py-16 flex gap-[5.076rem] relative"
		>
			<img
				src="/svgs/dots3.svg"
				className="absolute top-[116.78px] left-[97.02px]"
				alt="dots3"
			/>
			<figure className="mt-[4.631rem] ml-13.25 rounded-9 max-w-[34.675rem] w-full bg-primary1200 max-h-[26.143rem] h-full ">
				<Image
					avif="/images/video-consultation-image.avif"
					webp="/images/video-consultation-image.webp"
					img="/images/video-consultation-image.png"
					desc="Consultation img"
					imgClass="max-w-[33.613rem] h-full rounded-9"
				/>
			</figure>
			<article className="grid gap-8 w-full">
				<Typography
					variant="h4"
					font="title"
					lineHeight="72"
					color={"primary1300"}
					customClassName="text-[54px] max-w-[31.5rem]"
				>
					Why <i> Doctor Snap</i> was created
				</Typography>
				<Typography variant="body-l" color={"primary1300"}>
					Over the years, I have been deeply moved by how many people struggle
					to access basic healthcare—not because they don't value their health,
					but because of real barriers. Lack of insurance, financial
					constraints, language challenges, limited social support, and gaps in
					health education continue to prevent many individuals from receiving
					timely medical care. Immigrants, visitors, and uninsured patients are
					especially affected, often needing routine checkups or focused medical
					attention but finding the healthcare system difficult to navigate.
				</Typography>
			</article>
		</section>
	)
}
