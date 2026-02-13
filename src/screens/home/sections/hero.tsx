import { Button, Typography } from "../../../ui/elements"

export const Hero = () => {
	return (
		<section className="grid place-content-center overflow-hidden relative">
			<svg className="absolute inset-0 w-full h-full pointer-events-none opacity-10">
				<filter id="multinoise">
					<feTurbulence
						type="fractalNoise"
						baseFrequency="0.9"
						numOctaves="3"
						stitchTiles="stitch"
					/>
				</filter>
				<rect width="100%" height="100%" filter="url(#multinoise)" />
			</svg>
			<section className="pt-53.5 pb-[2.313rem] grid max-w-[1440px] mx-auto place-items-center">
				<Typography
					variant="h1"
					font={"title"}
					customClassName="max-w-[62.375rem]"
					lineHeight="full"
					align="center"
				>
					Accessible healthcare,{" "}
					<span className="italic text-secondary900">simplified</span>
				</Typography>
				<Typography
					variant="body-xl"
					customClassName="mt-6 mb-8 max-w-[42.625rem]"
					align="center"
				>
					Access top-notch healthcare without insurance limits and connect with
					specialists to manage your health data clearly.
				</Typography>
				<Button primary text="Book appointment" />
				<section className="mt-[2.313rem] z-10 bg-white relative">
					<div className="absolute inset-0 pointer-events-none">
						<svg className="absolute inset-0 z-10 w-full h-full pointer-events-none opacity-10">
							<filter id="multinoise">
								<feTurbulence
									type="fractalNoise"
									baseFrequency="0.9"
									numOctaves="3"
									stitchTiles="stitch"
								/>
							</filter>
							<rect width="100%" height="100%" filter="url(#multinoise)" />
						</svg>
						<div className="bg-white h-29 backdrop-blur-[82px] mask-b-from-50% " />
						{/* <div className="bg-white top-[-60px] relative backdrop-blur-[82px] h-14 mask-b-from-0% " /> */}
					</div>

					<img src="/images/Hero-img.png" alt="Hero Image" />
				</section>
			</section>
		</section>
	)
}

// backdrop-filter: blur(82.4000015258789px)
