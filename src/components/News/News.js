import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import axios from "axios";
import "./News.scss";

// const { NEWS_API_KEY } = process.env;

function News() {
  const [feed, setFeed] = useState([]);
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/everything?qInTitle=super AND smash AND bros AND ultimate&from=2020-03-20&sortBy=popularity&language=en&apiKey=9f1fcd95c1244f438211616327d43374`
      )
      .then((res) => setFeed(res.data.articles))
      .catch((err) => console.log(err));
  }, []);

    

  let newFeed = feed.map((e, i) => {
    for (let i = 0; i < feed.length; i++) {
      for (let j = i + 1; j < feed.length; j++) {
        if (
          feed[i].urlToImage === null ||
          feed[i].title === feed[j].title ||
          feed[i].url.includes("youtube")
        ) {
          feed.splice(i, 1);
        }
      }
    }
    return (
      <Carousel.Item>	
        <a href={e.url} target="_blank">
        <div className="article-body">
        <div className="article-block">
          <h3 className="article-title">{e.title}</h3>
          <img src={e.urlToImage} className='article-image' />
          <p className="article-description">{e.description}</p>
          </div>
            <p style={{color: 'white'}}>powered by NewsAPI.org</p>
        </div>
          </a>
          
      </Carousel.Item>
    );
  });

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Carousel activeIndex={index} onSelect={handleSelect} fade={true} indicators={false} className='carousel'>
       {newFeed}
    
      </Carousel>
    </div>
  );
}

export default News;
