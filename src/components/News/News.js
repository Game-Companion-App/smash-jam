import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import axios from "axios";
import "./News.css";

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
        `https://newsapi.org/v2/everything?qInTitle=super AND smash AND bros AND ultimate&from=2020-03-10&sortBy=popularity&language=en&apiKey=9f1fcd95c1244f438211616327d43374`
      )
      .then((res) => setFeed(res.data.articles))
      .catch((err) => console.log(err));
  }, []);

  console.log(feed);

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
        <div className="article-body">
          <a href={e.url} target="_blank">
            <h3 style={{ fontSize: ".9rem" }}>{e.title}</h3>
            <img
              src={e.urlToImage}
              style={{ height: "200px", width: "100%" }}
            />
            <p className="article-description">{e.description}</p>
          </a>
        </div>
      </Carousel.Item>
    );
  });

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Carousel activeIndex={index} onSelect={handleSelect} fade={true}>
        {newFeed}
      </Carousel>
    </div>
  );
}

export default News;
