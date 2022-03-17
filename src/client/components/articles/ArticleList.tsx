import { useArticles } from '@hooks/articles'
import React from 'react'

import AddArticleForm from './AddArticleForm'
import ArticleListItem from './ArticleListItem'

const ArticleList = () => {
    const { articles } = useArticles()

    if (!articles) {
        return <span>'Loading...'</span>
    }

    return (
        <>
            <div className="article-list">
                {articles &&
                    articles.map((article, index) => (
                        <ArticleListItem index={index} key={article.id} article={article} />
                    ))}
            </div>

            <AddArticleForm />
        </>
    )
}
export default ArticleList
