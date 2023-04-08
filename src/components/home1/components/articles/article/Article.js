import React from "react";
import "./article.css";
const Article = ({ articles }) => {
  return (
    <>
      {articles.map((article) => (
        <div className="article">
          {article.image ? (
            <div className="article__image">
              <img src={article.image} alt="article" />
            </div>
          ) : (
            ""
          )}
          <div className="article__header">
            <a href="#">
              {article.article.length > 45
                ? article.article.slice(0, 50) + "..."
                : article.article}
            </a>
          </div>
          <div className="article__details">
            <div className="article__detailsLeft">
              <span>By: </span>
              <a href="#">{article.by}</a>
            </div>
            <div className="article__detailsRight">
              <span>Post on: </span>
              <a href="#">{article.date}</a>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Article;
