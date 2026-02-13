import clsx from "clsx"
import { variantMapping, type TypographyProps } from "./index.types"
import { cva } from "class-variance-authority"

const typography = cva("", {
	variants: {
		intent: {
			h1: "text-8xl",
			h2: "text-[5.25rem]", // 84px
			h3: "text-[3.635rem]", //
			h4: "text-5xl", // 48px
			h5: "text-[2.5rem]", // 40px
			h6: "text-[2.125rem]", // 34px
			h7: "text-[1.75rem]", // 28px
			h8: "text-2xl", // 24px
			h9: "text-xl", // 20px
			"body-2xl": "text-[1.75rem]", //28px
			"body-xl": "text-2xl", // 24px
			"body-l": "text-xl", // 20px
			"body-m": "text-lg", // 18px
			"body-r": "text-base", //16px
			"body-s": "text-sm", // 14px
			"body-xs": "text-xs", //12px
		},

		color: {
			primary10: "text-[#0D23291A]",
			primary100: "text-[#CEE8EF]",
			primary200: "text-[#B5DDE7]",
			primary300: "text-[#9CD1E0]",
			primary400: "text-[#83C6D8]",
			primary500: "text-[#6BBAD0]",
			primary600: "text-[#52AFC8]",
			primary700: "text-[#3CA2BD]",
			primary800: "text-[#348DA5]",
			primary900: "text-[#2C778C]",
			primary1000: "text-[#256273]",
			primary1100: "text-[#1D4D5A]",
			primary1200: "text-[#153842]",
			primary1300: "text-[#0D2329]",
			primary1400: "text-[#0A1A1E]",
			secondary10: "text-[#D1FF5D1A]",
			secondary100: "text-[#F4FFD7]",
			secondary200: "text-[#E8FFAE]",
			secondary300: "text-[#DCFF86]",
			secondary400: "text-[#D1FF5D]",
			secondary500: "text-[#C8FF3D]",
			secondary600: "text-[#BFFF1D]",
			secondary700: "text-[#B4FB00]",
			secondary800: "text-[#9DDB00]",
			secondary900: "text-[#86BB00]",
			secondary1000: "text-[#6F9B00]",
			secondary1100: "text-[#587A00]",
			secondary1200: "text-[#405A00]",
			neutral10: "text-[#3333331A]",
			neutral100: "text-[#FFFFFF]",
			neutral200: "text-[#E8E8E8]",
			neutral300: "text-[#D2D2D2]",
			neutral400: "text-[#BBBBBB]",
			neutral500: "text-[#A4A4A4]",
			neutral600: "text-[#8E8E8E]",
			neutral700: "text-[#777777]",
			neutral800: "text-[#606060]",
			neutral900: "text-[#4A4A4A]",
			neutral1000: "text-[#333333]",
			tertiary10: "text-[#46595E1A]",
			tertiary100: "text-[#C6D2D5]",
			tertiary200: "text-[#AABBC0]",
			tertiary300: "text-[#8EA5AB]",
			tertiary400: "text-[#718E96]",
			tertiary500: "text-[#5B747A]",
			tertiary600: "text-[#46595E]",
			tertiary700: "text-[#324044]",
			tertiary800: "text-[#1F2729]",
			red10: "text-[#FB37481A]",
			red100: "text-[#FB3748]",
			red200: "text-[#D00416]",
			yellow10: "text-[#FFDB431A]",
			yellow100: "text-[#FFDB43]",
			yellow200: "text-[#DFB400]",
			green10: "text-[#1FC16B1A]",
			green100: "text-[#84ebb4]",
			green200: "text-[#1fc16b]",
		},
		font: {
			title: "font-source-serif-4",
			text: "font-roboto-flex",
		},
		fontWeight: {
			thin: "font-thin",
			"extra-light": "font-extra-light",
			light: "font-light",
			regular: "font-regular",
			medium: "font-medium",
			"semi-bold": "font-semibold",
			bold: "font-bold",
			"extra-bold": "font-extra-bold",
			black: "font-black",
		},
		lineHeight: {
			"16": "leading-4",
			"18": "leading-4.5",
			"20": "leading-5",
			"24": "leading-6",
			"28": "leading-7",
			"32": "leading-8",
			"36": "leading-9",
			"40": "leading-10",
			"64": "leading-16",
			full: "md:leading-[100%] leading-[120%]",
		},
		underline: { always: "underline", hover: "hover:underline", none: "" },
		align: {
			center: "text-center",
			start: "text-start",
			end: "text-end",
			left: "text-left",
			right: "text-right",
			justify: "text-justify",
		},
	},
	compoundVariants: [],
})

// Typography component
const Typography: React.FC<TypographyProps> = (props) => {
	const {
		variant = "body-r",
		color = "tertiary700",
		tag,
		underline = "none",
		font = "text",
		fontWeight = "regular",
		lineHeight = "36",
		gutterBottom,
		noWrap,
		align = "left",
		customClassName = "",
		children,
	} = props

	// Resolved tag
	const Tag = (tag ??
		variantMapping[variant]) as keyof React.JSX.IntrinsicElements

	// Classes
	const className = clsx(
		gutterBottom && "mb-4",
		noWrap && "overflow-hidden text-ellipsis whitespace-nowrap",
	)

	return (
		<Tag
			className={typography({
				intent: variant,
				color,
				underline,
				font,
				fontWeight,
				lineHeight,
				align,
				className: `${className} ${customClassName} `,
			})}
		>
			{children}
		</Tag>
	)
}

export { Typography }
