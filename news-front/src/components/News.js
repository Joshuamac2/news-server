import React, { useContext } from "react";
import { NewsContext } from "../NewsContext";
import NewsArticle from "./NewsArticle";
import Title from "./Title";


const right = ["Sky.com", "Daily Mail", "ITV News", "The Sun", "Express", "Mirror Online"];
const left = ['The Guardian', 'BBC News', "Evening Standard", "Independent", "Google News"];

function News(props) {
  const { data } = useContext(NewsContext);
  console.log(data);

  return (
    <div className="home">
        <Title />
        <div className="all__news">
          <div className="left">
          <div className="left_news"><h2> News from the Left</h2></div>
            {data
              ? data.articles.filter(wing => left.includes(wing.source.name)).slice(0, 10).map((news, index) => (
                <NewsArticle data={news} key={news.url} id={index} />
                ))
              : "Loading"}
            </div>
            <div className="right">
            <div className="right_news"><h2> News from the right </h2></div>
              {data
                ? data.articles.filter(wing => right.includes(wing.source.name)).slice(0, 10).map((news, index) => (
                  <NewsArticle data={news} key={news.url} id={index} />
                ))
                : "Loading"}
            </div>
        </div>
    </div>
  );
}
export default News;
