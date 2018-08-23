import React, { Component } from 'react'
import timeago from 'timeago.js'
import sanitizeHtml from 'sanitize-html'
import _ from 'lodash'
import CoinTags from '../CoinTags'
import BulletSpacer from '../BulletSpacer'
import Icon from '../Icon'

export default class NewsBody extends Component {
  componentDidMount() {
    setTimeout(() => {
      // set max height to enable scroll in ff
      const colWrap = document.querySelector('.column-wrap')
      const newsContent = document.querySelector('.selected-news-content')
      const flashHeight = document.querySelector('.flash-container')
      const filterTagWrapper = document.querySelector('.filter-tag-wrap')
      const topNav = document.querySelector('.topnav')
      // const calcMaxHeight =
      //   colWrap.offsetHeight -
      //   topNav.offsetHeight +
      //   (flashHeight && flashHeight.offsetHeight) +
      //   (filterTagWrapper && filterTagWrapper.offsetHeight)
      const calcMaxHeight = window.outerHeight - topNav.offsetHeight
      console.log('see max', window.outerHeight - topNav.offsetHeight)
      newsContent.style.maxHeight = `${calcMaxHeight}px`
    }, 0)
  }
  render() {
    const {
      selectNewsItemFromList,
      activeEntity,
      selectNewsCategories,
    } = this.props
    const { id } = activeEntity
    const newsItem = selectNewsItemFromList(id)
    if (!newsItem) {
      return null
    }
    const categories = selectNewsCategories(newsItem)
    const content =
      _.trim(newsItem.get('content')) || _.trim(newsItem.get('summary'))
    return (
      <div className="pa3 bg-white min-h-100 selected-news-content">
        <CoinTags itemWithCoinLinkData={newsItem} />
        <h1 className="break-word f4">{newsItem.get('title')}</h1>
        <div className="mb3 f6">
          <a
            href={newsItem.get('url')}
            target="_blank"
            rel="nofollow"
            className="break-all"
          >
            <Icon name="link" className="mr1 f7" regular />
            {newsItem.get('url')}
          </a>
        </div>
        <div className="mb3 f6">
          <Icon name="clock" className="mr1 f7" regular />
          {timeago().format(newsItem.get('feed_item_published_at'))}
          <BulletSpacer />
          <span>
            {new Date(newsItem.get('feed_item_published_at')).toLocaleString()}
          </span>
        </div>
        {categories.size > 0 && (
          <div className="mv3">
            {categories.map((category, index) => (
              <div key={index} className="tag-alt">
                {category.get('name')}
              </div>
            ))}
          </div>
        )}
        <div className="mv3 b--b" />
        <div
          className="lh-copy"
          dangerouslySetInnerHTML={{
            __html: sanitizeHtml(content, {
              allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img']),
            }),
          }}
        />
      </div>
    )
  }
}
