import React from "react";
import ShopLink from "../shopLink/ShopLink";
import Article from "./article/Article";
import CursiveTitle from "../cursiveTitle/CursiveTitle";
import "./articles.css";
const Articles = ({ articles, title, direction }) => {
  return (
    <div className="articles">
      <div className="articles__header globalHomeHeader">
        <CursiveTitle title={title} />
      </div>
      <div
        className="articles__wrapper"
        style={{ flexDirection: `${direction}` }}
      >
        <Article articles={articles} />
      </div>
      <ShopLink title={"view more articles"} />
    </div>
  );
};

Articles.defaultProps = {
  title: "Articles",
  articles: [
    {
      article: "Promotional Advertising Specialty You Ve Waited Long Enough",
      by: "admin",
      date: "May 7,2021",
    },
    {
      article: "What Is The Big R For Marketing Your Business",
      by: "admin",
      date: "May 7,2021",
    },
  ],
};

export default Articles;
