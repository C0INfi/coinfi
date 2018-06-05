import React from 'react'
import CoinList from './CoinList'
import NewsItemList from './NewsItemList'
import NewsItemBody from './NewsItemBody'
import CoinBody from './CoinBody'
import Tips from './Tips'
import PageHeader from './PageHeader'
import FilterWrapper from '../Filters/FilterWrapper';

export default function(props) {
  const { activeEntity } = props
  return (
    <div className="flex flex-column flex-auto">
      <PageHeader {...props} />
      <div className="container-wide ph4-l flex-auto flex flex-column">
        <div className="row no-gutter flex-auto bg-white">
          <div className="col-xs-2 relative overflow-y-auto">
            <CoinList {...props} />
          </div>
          <div className="col-xs-5 relative flex flex-column bl b--light-gray">
            <FilterWrapper {...props} />
            <NewsItemList {...props} />
          </div>
          <div className="col-xs-5 relative overflow-y-auto bl b--light-gray">
            {activeEntity ? (
              <div>
                {activeEntity.type === 'coin' ? (
                  <CoinBody {...props} />
                ) : (
                  <NewsItemBody {...props} />
                )}
              </div>
            ) : (
              <Tips />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
