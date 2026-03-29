import clsx from "clsx"
import { Image, Typography } from "../../../ui/elements"

export const CreationStory = () => {
	return (
		<section
			id="creation-story"
			className={clsx(
				"max-w-[1440px] mx-auto py-19.5 flex gap-15 sm:gap-9 justify-center items-center overflow-hidden xl:gap-[5.076rem] relative flex-col",
				"lg:flex-row px-4.75 md:px-14 md:py-16 max-sm:border-b border-[#E8F0F2]",
			)}
		>
			<img
				src="/svgs/dots3.svg"
				className="absolute left-[10px] top-[116.78px] xl:block sm:hidden sm:left-[40px] lg:left-[97.02px]"
				alt="dots3"
			/>
			<figure className="mt-[4.631rem] md:mt-0 xl:mt-[4.631rem] xl:ml-13.25 rounded-9 lg:max-w-[34.675rem] w-full bg-primary1200 md:max-h-120 lg:max-h-[26.143rem] h-full ">
				<Image
					avif="/images/video-consultation-image.avif"
					webp="/images/video-consultation-image.webp"
					img="/images/video-consultation-image.png"
					desc="Consultation img"
					imgClass="lg:max-w-[33.613rem] w-[95%] lg:w-full h-full max-h-[30rem] lg:max-h-[26.143rem] rounded-9"
				/>
			</figure>
			<article className="grid gap-4 lg:gap-8 w-full">
				<Typography
					variant="h4"
					font="title"
					color={"primary1300"}
					customClassName="text-[32px] md:text-[42px] lg:text-[54px] lg:max-w-[31.5rem] sm:leading-[64px]! lg:leading-[72px]!  max-sm:leading-[38px]"
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
