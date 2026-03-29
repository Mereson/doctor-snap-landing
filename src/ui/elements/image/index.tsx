type ImageProps = {
	avif?: string
	webp?: string
	img: string
	desc: string
	picClass?: string
	imgClass?: string
	priority?: boolean
	sizes?: string
	width?: number
	height?: number
}

export const Image = ({
	avif,
	webp,
	img,
	desc,
	picClass,
	imgClass,
	priority = false,
	sizes = "100vw",
	width,
	height,
}: ImageProps) => {
	return (
		<picture className={picClass}>
			{avif && <source srcSet={avif} type="image/avif" sizes={sizes} />}
			{webp && <source srcSet={webp} type="image/webp" sizes={sizes} />}

			<img
				src={img}
				alt={desc}
				className={imgClass}
				width={width}
				height={height}
				sizes={sizes}
				loading={priority ? "eager" : "lazy"}
				fetchPriority={priority ? "high" : "auto"}
				decoding="async"
			/>
		</picture>
	)
}