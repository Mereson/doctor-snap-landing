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

export interface PackagesTypes {
	id: string
	packageName: string
	packageType: string
	packageClass: "A" | "B" | "C"
	features: {
		id: string
		feature: {
			feature: string
			info?: string
		}
	}[]
	packagePrice: string
}

export interface UserDataType {
	id: string
	firstName: string
	lastName: string
	email: string
	role: "ADMIN" | "USER"
}