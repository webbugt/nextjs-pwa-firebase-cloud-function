import { articlePath, useArticles } from '@hooks/articles'
import showNotification from '@lib/showNotification'
import Link from 'next/link'
import React from 'react'

const usePromptAndUpdateArticle = (article, fieldName) => {
    const { updateArticle } = useArticles()

    const handleUpdate = async () => {
        // eslint-disable-next-line no-undef
        const newValue = window.prompt(`New value for ${fieldName}?`, article[fieldName])
        if (newValue !== null) {
            const notificationId = showNotification('Updating article...')
            await updateArticle({
                id: article.id,
                [fieldName]: newValue === '' ? null : newValue
            })
            showNotification('Article updated', 'success', { notificationId })
        }
    }

    return handleUpdate
}

const usePromptAndDeleteArticle = article => {
    const { deleteArticle } = useArticles()

    const handleDelete = async () => {
        // eslint-disable-next-line no-undef
        if (window.confirm(`Delete ${article.title}?`)) {
            const notificationId = showNotification('Deleting article...')
            await deleteArticle({ id: article.id })
            showNotification('Article deleted', 'success', { notificationId })
        }
    }

    return handleDelete
}

const ArticleListItem = ({ article, index, inProgress = false }) => {
    const promptAndUpdateArticle = usePromptAndUpdateArticle(article, 'title')
    const promptAndDeleteArticle = usePromptAndDeleteArticle(article)

    return (
        <div className={`article${inProgress === article.id ? ' in-progress' : ''}`} title={`id: ${article.id}`}>
            <Link {...articlePath(article)}>
                <a>{article.title}</a>
            </Link>

            <span className="actions">
                <a
                    className="action update"
                    onClick={() => {
                        promptAndUpdateArticle()
                    }}>
                    Update
                </a>
                <a
                    className="action delete"
                    onClick={() => {
                        promptAndDeleteArticle()
                    }}>
                    Delete
                </a>
            </span>

            <style jsx={true}>
                {`
                    .article {
                        margin: 0.3em 0;
                    }

                    a.action {
                        margin-left: 0.5em;
                        cursor: pointer;
                        font-size: 0.6em;
                        text-transform: uppercase;
                        border-bottom: none;
                        background-color: rgba(0, 0, 0, 0.1);
                        padding: 0.5em;
                        border-radius: 0.5em;
                    }
                    a.update {
                        color: limegreen;
                    }
                    a.delete {
                        color: tomato;
                    }

                    a:hover {
                        filter: brightness(70%);
                    }

                    .in-progress {
                        opacity: 0.3;
                    }
                `}
            </style>
        </div>
    )
}
export default ArticleListItem
