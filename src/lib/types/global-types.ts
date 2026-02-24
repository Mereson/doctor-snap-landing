export interface ProductCardProps {
	productImg: string
	productName: string
	icon: string
	productDesc: string
	productLink: string
}

export interface ResourcesTags {
	tagName: string
	tagBgColor: string
	tagColor: string
}

export interface ResourceArticlesType {
	id: string
	tag: ResourcesTags
	articleImg: string
	datePublished: string
	readTime: string
	articeTitle: string
	articeText: string
}

export interface EditorsArticeType extends ResourceArticlesType {
	editorsImg: string
	editorsName: string
}

// type ResourcesTagBgColors =
//   | '#E8FFAE'
//   | 'GovTech'
//   | 'Cybersecurity'
//   | 'EdTech'
//   | 'HealthTech'
//   | 'CleanEnergy'
//   | 'ArtificialIntelligence'
//   | 'Fintech'
//   | 'other';

// const mappedCategory: Record<string, IdeaCategory> = {
//   'Agric Tech': 'AgricTech',
//   'Gov Tech': 'GovTech',
//   Cybersecurity: 'Cybersecurity',
//   'Ed Tech': 'EdTech',
//   'Health Tech': 'HealthTech',
//   'Clean Energy': 'CleanEnergy',
//   'Artificial Intelligence': 'ArtificialIntelligence',
//   'Fin Tech': 'Fintech',
//   Other: 'other',
// };