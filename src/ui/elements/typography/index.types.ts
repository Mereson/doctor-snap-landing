import React from "react"
import type { HTMLAttributes } from "react"

export const variantMapping = {
	h1: "h1",
	h2: "h2",
	h3: "h3",
	h4: "h4",
	h5: "h5",
	h6: "h6",
	h7: "h6",
	h8: "h6",
	h9: "h6",
	"body-2xl": "p",
	"body-xl": "p",
	"body-l": "p",
	"body-m": "p",
	"body-r": "p",
	"body-s": "p",
	"body-xs": "p",
}

export type TypographyLineHeight =
	| "16"
	| "18"
	| "20"
	| "24"
	| "28"
	| "32"
	| "36"
	| "40"
	| "64"
	| "full"

export type TypographyVariant = keyof typeof variantMapping

export type TypographyColors =
	| "primary10"
	| "primary100"
	| "primary200"
	| "primary300"
	| "primary400"
	| "primary500"
	| "primary600"
	| "primary700"
	| "primary800"
	| "primary900"
	| "primary1000"
	| "primary1100"
	| "primary1200"
	| "primary1300"
	| "primary1400"
	| "secondary10"
	| "secondary100"
	| "secondary200"
	| "secondary300"
	| "secondary400"
	| "secondary500"
	| "secondary600"
	| "secondary700"
	| "secondary800"
	| "secondary900"
	| "secondary1000"
	| "secondary1100"
	| "secondary1200"
	| "neutral10"
	| "neutral100"
	| "neutral200"
	| "neutral300"
	| "neutral400"
	| "neutral500"
	| "neutral600"
	| "neutral700"
	| "neutral800"
	| "neutral900"
	| "neutral1000"
	| "tertiary10"
	| "tertiary100"
	| "tertiary200"
	| "tertiary300"
	| "tertiary400"
	| "tertiary500"
	| "tertiary600"
	| "tertiary700"
	| "tertiary800"
	| "red10"
	| "red100"
	| "red200"
	| "yellow10"
	| "yellow100"
	| "yellow200"
	| "green10"
	| "green100"
	| "green200"

export type TypographyAlign =
	| "start"
	| "end"
	| "left"
	| "right"
	| "center"
	| "justify"

export type TypographyFontWeight =
	| "thin"
	| "extra-light"
	| "light"
	| "regular"
	| "medium"
	| "semi-bold"
	| "bold"
	| "extra-bold"
	| "black"

export type TypographyFont = "title" | "text"

export interface TypographyProps extends HTMLAttributes<HTMLOrSVGElement> {
	tag?: keyof React.JSX.IntrinsicElements
	variant?: TypographyVariant
	color?: TypographyColors
	fontWeight?: TypographyFontWeight
	lineHeight?: TypographyLineHeight
	gutterBottom?: boolean
	align?: TypographyAlign
	noWrap?: boolean
	underline?: "none" | "always" | "hover"
	customClassName?: string
	children?: React.ReactNode
	font?: TypographyFont
}
