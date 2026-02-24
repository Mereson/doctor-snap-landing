import type { EditorsArticeType, ResourceArticlesType } from "../types"

export const editorsArtice: EditorsArticeType = {
	id: "1",
	articleImg: "/images/cardiovascular model.png",
	editorsImg: "/images/author img.png",
	editorsName: "Dr. Ikeme",
	articeTitle:
		"The Future of Cardiology is on Your Wrist: A Deep Dive into Wearable Tech",
	articeText:
		"How modern consumer devices are bridging the gap in early detection of arrhythmias and what you should look for in your next device.",
	datePublished: "Feb 8, 2026",
	readTime: "12",
	tag: { tagName: "Cardiology", tagBgColor: "#DAF0F7", tagColor: "#1D4D5A" },
}

export const resourceArticles: ResourceArticlesType[] = [
	{
		id: "1",
		tag: { tagName: "Cardiology", tagBgColor: "#E8FFAE", tagColor: "#587A00" },
		readTime: "9",
		articeTitle: "Heart Rate Variability Explained",
		articeText:
			"HRV is one of the most powerful biomarkers you can track. Learn what it tells you about your stress, recovery, and overall cardiovascular health.",
		articleImg: "/images/article-img-1.png",
		datePublished: "Jan 12, 2026",
	},
	{
		id: "2",
		tag: {
			tagName: "Sleep",
			tagBgColor: "#E8E0FF",
			tagColor: "#4A3580",
		},
		readTime: "8",
		articeTitle: "Sleep Hygiene: More Than Just Bedtime",
		articeText:
			"Your sleep quality affects everything from immune function to mood. Discover evidence-based habits that can transform your rest and recovery.",
		articleImg: "/images/article-img-2.png",
		datePublished: "Jan 22, 2026",
	},
	{
		id: "3",
		tag: { tagName: "Telehealth", tagBgColor: "#1A5070", tagColor: "#D8F0FA" },
		readTime: "10",
		articeTitle: "Telehealth: The New Front Door to Healthcare",
		articeText:
			"Virtual visits have evolved far beyond pandemic necessity. Explore how telehealth is making quality medical care accessible to underserved communities.",
		articleImg: "/images/article-img-3.png",
		datePublished: "Jan 18, 2026",
	},
	{
		id: "4",
		tag: { tagName: "Fitness", tagBgColor: "#FFEADB", tagColor: "#8A5020" },
		readTime: "6",
		articeTitle: "Building a Sustainable Exercise Routine",
		articeText:
			"Why consistency beats intensity, and how to create a fitness plan that adapts to your lifestyle—whether you're a beginner or getting back on track.",
		articleImg: "/images/article-img-4.png",
		datePublished: "Jan 28, 2026",
	},
	{
		id: "5",
		tag: {
			tagName: "Mental Health",
			tagBgColor: "#CEE8EF",
			tagColor: "#153842",
		},
		readTime: "7",
		articeTitle: "The Physiology of Anxiety",
		articeText:
			"Stress can show up as headaches, muscle tension, rapid heartbeat, or fatigue. Understanding the physical side of anxiety is the first step to managing it.",
		articleImg: "/images/article-img-5.png",
		datePublished: "Feb 2, 2026",
	},
	{
		id: "6",
		tag: { tagName: "Nutrition", tagBgColor: "#E8FFAE", tagColor: "#587A00" },
		readTime: "5",
		articeTitle: "Understanding Glycemic Index",
		articeText:
			"Blood sugar spikes aren't just a concern for people with diabetes—they can affect anyone. Learn how to read and use the glycemic index for better daily nutrition choices.",
		articleImg: "/images/article-img-6.png",
		datePublished: "Feb 5, 2026",
	},
]
