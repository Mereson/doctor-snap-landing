import type { ProductCardProps } from "../home/sections";

export const products: ProductCardProps[] = [
	{
		productImg: "/images/watch-product.png",
		productName: "Health Sensor Watch",
		icon: "/svgs/Activity.svg",
		productDesc:
			"Track your wellness in real time with actionable insights, all from your wrist.",
		productLink: ".",
	},
	{
		productImg: "/images/glucose-monitor-product.png",
		productName: "Continuous Glucose Monitor.",
		icon: "/svgs/Trending up.svg",
		productDesc: "Tracks blood sugar in real time—no finger pricks needed.",
		productLink: ".",
	},
	{
		productImg: "/images/oximeter-product.png",
		productName: "Pulse Oximeter",
		icon: "/svgs/Thermometer.svg",
		productDesc: "Measures oxygen levels and pulse quickly and easily.",
		productLink: ".",
	},
	{
		productImg: "/images/ecg-monitor-product.png",
		productName: "ECG monitor",
		icon: "/svgs/Heart.svg",
		productDesc: "Monitors heart rhythm anytime for ongoing heart health.",
		productLink: ".",
	},
]