import type { ResourceArticlesType } from "../types"

export const getArticlesTags = (articles: ResourceArticlesType[]) => {
	return [...new Set(articles.map((article) => article.tag.tagName))]
}
