import React from 'react'
import timeago from 'timeago.js'
import NewsCoinTags from './NewsCoinTags'

class NewsListItem extends React.Component {
  render() {
    const { activeEntity, newsItem, setActiveNewsItem, preRender, selectCoin, newItem } = this.props
    let className = 'b--b tiber overflow-hidden'
    if (activeEntity) {
      const { type, id } = activeEntity
      if (type === 'newsItem' && id === newsItem.get('id'))
        className += ' bg-foam'
    }
    const url = new URL(newsItem.get('url'))
    if (preRender) className += ' o-0 absolute'
    const style = newItem ? { height: this.props.height || 'auto', border: 'solid 1px #2faeed', transition: 'all 0.3 s linear' } : { height: this.props.height || 'auto' }
    return (
      <div className={className} style={style}>
        <div className="pa3">
          <div className="pointer" onClick={
            () => {
              setActiveNewsItem(newsItem)
              if (document.querySelector('.selected-news-content') && document.querySelector('.selected-news-content').parentNode)
                document.querySelector('.selected-news-content').parentNode.scrollTop = 0
            }
          }>
          <h4 className="fw6 mv3 f4">{newsItem.get('title')}</h4>
        </div>
        <div className="flex justify-between flex-wrap">
          <div className="f6 silver">
            {timeago().format(newsItem.get('feed_item_published_at'))}
            <span className="ph2">~</span>
            <a
              href={newsItem.get('url')}
              target="_blank"
              rel="nofollow"
              className="dib silver"
            >
              {url.hostname}
            </a>
          </div>
          <NewsCoinTags {...this.props} />
        </div>
      </div>
    </div>
    )

  }
}

export default NewsListItem
