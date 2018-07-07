import React, { Fragment } from "react"
import timeago from "timeago.js"
import NewsCoinTags from "./NewsCoinTags"
import twitterLogo from "../../images/logo-twitter.svg"
import linkLogo from "../../images/logo-link.svg"
import redditLogo from "../../images/logo-reddit.svg"

const NewsListItem = props => {
  const { activeEntity, newsItem, setActiveNewsItem, preRender } = props
  let className = "b--b tiber overflow-hidden"
  if (activeEntity) {
    const { type, id } = activeEntity
    if (type === "newsItem" && id === newsItem.get("id"))
      className += " bg-foam"
  }
  const url = new URL(newsItem.get("url"))
  if (preRender) className += " o-0 absolute"
  return (
    <div className={className} style={{ height: props.height || "auto" }}>
      <div className="pa3">
        <div className="pointer" onClick={() => setActiveNewsItem(newsItem)}>
          <h4 className="fw6 mv3 f4">{newsItem.get("title")}</h4>
        </div>
        <div className="flex justify-between flex-wrap">
          <div className="f6 silver">
            {url.hostname === "twitter.com" && (
              <Fragment>
                <span style={{ marginRight: 10 }}>
                  <img src={redditLogo} />
                </span>
                <a
                  href={newsItem.get("url")}
                  target="_blank"
                  rel="nofollow"
                  className="dib silver"
                >
                  {url.hostname}
                </a>
                <span className="ph2" style={{fontSize: 35, position:'relative', top: 6}}>&middot;</span>
                {timeago().format(newsItem.get("feed_item_published_at"))}
              </Fragment>
            )}
            {url.hostname === "reddit.com" && (
              <Fragment>
                <span style={{ marginRight: 10 }}>
                  <img src={redditLogo} />
                </span>
                <a
                  href={newsItem.get("url")}
                  target="_blank"
                  rel="nofollow"
                  className="dib silver"
                >
                  {url.hostname}
                </a>
                <span className="ph2" style={{fontSize: 35, position:'relative', top: 6}}>&middot;</span>
                {timeago().format(newsItem.get("feed_item_published_at"))}
              </Fragment>
            )}
            {url.hostname !== "twitter.com" && url.hostname !== 'reddit' (
              <Fragment>
                <span style={{ marginRight: 10 }}>
                  <img src={linkLogo} />
                </span>
                <a
                  href={newsItem.get("url")}
                  target="_blank"
                  rel="nofollow"
                  className="dib silver"
                >
                  {url.hostname}
                </a>
                <span className="ph2" style={{fontSize: 35, position:'relative', top: 6}}>&middot;</span>
                {timeago().format(newsItem.get("feed_item_published_at"))}
              </Fragment>
            )}
          </div>
          <NewsCoinTags {...props} />
        </div>
      </div>
    </div>
  )
}

export default NewsListItem
