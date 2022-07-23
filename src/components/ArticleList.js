import React from "react";
import Article from './Article';

function ArticleList({posts}){
    const post = posts.map((article) => {
        return <Article key={article.id} title={article.title} date={article.date} preview={article.preview}  />
    });

    return(
        <div>
            <main>
                {post}
              
            </main>
        </div>
    )
}

export default ArticleList;