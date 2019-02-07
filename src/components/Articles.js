import React from "react";

const Articles = props => (
  <div className="news_articles">
    {props.article0Title && (
      <div className="article0">
        <img src={props.article0Img} />
        <article className="article-content">
          <h2 className="article-title">{props.article0Title}</h2>
          <p className="article-content">{props.article0Content}</p>
        </article>
      </div>
    )}
    {props.article1Title && (
      <div className="article1">
        <img src={props.article1Img} />
        <article className="article-wrapper">
          <h2 className="article-title">{props.article1Title}</h2>
          <p className="article-content">{props.article1Content}</p>
        </article>
      </div>
    )}
    {props.article2Title && (
      <div className="article2">
        <img src={props.article2Img} />
        <article className="article-wrapper">
          <h2 className="article-title">{props.article2Title}</h2>
          <p className="article_-content">{props.article2Content}</p>
        </article>
      </div>
    )}
    {props.error && <p>{props.error}</p>}
  </div>
);

export default Articles;
