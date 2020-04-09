import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {useSwipeable, Swipeable} from 'react-swipeable'
import Article from '../Article/Article'

const {NEWS_API_KEY} = process.env

function News(props) {

const [feed, setFeed] = useState([])

useEffect(() => {
  axios.get(`https://newsapi.org/v2/everything?qInTitle=super AND smash AND bros AND ultimate&from=2020-03-10&sortBy=popularity&language=en&apiKey=9f1fcd95c1244f438211616327d43374`).then(res => setFeed(res.data.articles)).catch(err => console.log(err))
}, [])

useEffect(props) => {
  const element = props.current

  const handleTouchStart = e => {

  }

  const handleTouchMove = e => {

  }

  const handleTouchEnd = e => {

  }
})

  return (
    <div style={{display: 'flex'}}>
      {feed.map((e,i) => {
        return <Article article={e} key={i} />
      })}
    </div>
  )
}

export default News