import React from "react";

function Article({title, date, preview}){
    return(
        <div>
            <article>
                <h3>{title}</h3>
                {date == null ? <small>January 1, 1970</small> : <small>{date}</small>}
                <p>{preview}</p>
            </article>
          
        </div>
    )
}

export default Article;