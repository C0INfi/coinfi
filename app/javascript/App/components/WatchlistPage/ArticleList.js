import React, { Component } from 'react'
import Article from './Article'
import ArticleFilters from './ArticleFilters'

export default class WatchlistArticles extends Component {
  state = { tab: 'news' }
  tabClick = (tab) => () => {
    this.setState({ tab })
  }
  render() {
    const { articles, tags } = this.props
    const { tab } = this.state
    return (
      <div>
        <div className="flex justify-between items-end flex-wrap mb4 ph3 ph0-l">
          <div className="tabs flex-auto justify-center justify-start-l">
            <button className="tab tab-active" onClick={this.tabClick('news')}>
              Trending News
            </button>
            <button className="tab" onClick={this.tabClick('events')}>
              Event Calendar
            </button>
          </div>
          <ArticleFilters />
        </div>
        <div className="pt1 ph1 bg-athens-dark bg-white-m">
          {tab === 'news' ? (
            <div>
              {articles && articles.size > 0 ? (
                articles
                  .valueSeq()
                  .map((article) => (
                    <Article
                      article={article}
                      tags={tags}
                      key={article.get('id')}
                    />
                  ))
              ) : (
                <div className="pt2 o-60">Add items to see news here</div>
              )}
            </div>
          ) : (
            <div>Event calendar coming soon</div>
          )}
        </div>
      </div>
    )
  }
}
