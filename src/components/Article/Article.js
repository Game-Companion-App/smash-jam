import React from 'react'
import './Article.css'

function Article(props) {
console.log(props)
  const {title, source, author, description, url, urlToImage, content, publishedAt} = props.article

  return (
    <div className="article-body">
      <h3 style={{fontSize: '.9rem'}}>{title}</h3>
      <img src={urlToImage} style={{height: '150px', width: '300px'}}/>
      <p className="article-description">{description}</p>
      <div className='control-button'>
      <button>Prev</button>
      <button>Next</button>
      </div>
    </div>
  )
}

export default Article