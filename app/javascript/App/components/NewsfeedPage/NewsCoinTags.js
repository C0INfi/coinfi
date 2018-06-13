import React from 'react'

const NewsCoinTags = ({ newsItem, setActiveEntity }) => {

  const onClick = (event, coin) => {

    setActiveEntity({
      type: 'coin',
      id: coin.get('id'),
      label: coin.get('name')
    })
  }
  return (
    <div>
      {newsItem.get('coin_link_data').map((coin, index) => {
      return (
        <div
          key={index}
          className="tag pointer"
          onClick={onClick.bind(this)}
          coin={coin}
        >
          {coin.get('symbol')}
        </div>
      )}

      )}
    </div>
  )
}

export default NewsCoinTags
