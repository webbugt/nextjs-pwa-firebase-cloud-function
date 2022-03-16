import React from 'react'
import { useArticles } from 'hooks/articles'

import AddArticleForm from './AddArticleForm'
import ArticleListItem from './ArticleListItem'

const ArticleList = () => {
    const { articles } = useArticles()

    if (!articles) {return 'Loading...'}

    return (
      <>
        <div className='article-list'>
          {articles && articles.map(article => (
            <ArticleListItem
              key={article.id}
              article={article}
          />
            </div>

            <AddArticleForm />
        </>
    )
}
export default ArticleList
