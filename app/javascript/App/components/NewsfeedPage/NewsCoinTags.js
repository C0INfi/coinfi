import React from 'react'

const NewsCoinTags = ({ newsItem, selectCoin }) => {
console.log('data.get')
  return (
    <div>
      {newsItem.get('coin_link_data').map((data, index) => {

        return (
          <a
            key={index}
            className="tag pointer"
            onClick={selectCoin.bind(this, data.get('slug'))}
          >
            {data.get('symbol')}
          </a>
        )}
      )}
    </div>
  )
}

export default NewsCoinTags
