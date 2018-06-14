import React from 'react'
import NewsList from './NewsList'
import NewsListHeader from './NewsListHeader'
import BodySection from './BodySection'
import CoinDetail from './../CoinDetail'

export default function(props) {

  if (props.coinDetailVisible) {
    return (
      <div className="bg-white flex flex-column flex-auto">
        <div className="row no-gutter flex-auto">
          <div className="col-xs-6 bl b--light-gray relative">
            <NewsListHeader {...props} />
            <NewsList {...props} />
          </div>
          <div className="col-xs-6 bl b--light-gray relative">
            <CoinDetail {...props} />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white flex flex-column flex-auto">
      <div className="row no-gutter flex-auto">
        <div className="col-xs-6 bl b--light-gray relative">
          <NewsListHeader {...props} />
          <NewsList {...props} />
        </div>
        <div className="col-xs-6 bl b--light-gray relative">
          <BodySection {...props} />
        </div>
      </div>
    </div>
  )
}
