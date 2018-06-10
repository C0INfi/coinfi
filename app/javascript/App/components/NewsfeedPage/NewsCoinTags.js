import React from 'react'
import CoinDetail from './../CoinDetail'

const ShowCoinDrawer = (props, event) => {
  const slug = event.target.getAttribute('slug')
  const url = `https://develop.coinfi.com/api/coins/${slug}.json`
  console.log('show', url, event)
  props.showCoinDetail()
}


const NewsCoinTags = (props) => {
  console.log('props', props)
  const { newsItem } = props
  return (
    <div>
      {newsItem.get('coin_link_data').map((data, index) => (
        <a
          key={index}
          className="tag pointer"
          onClick={ShowCoinDrawer.bind(this, props)}
          slug={data.get('slug')}
        >
          {data.get('symbol')}
        </a>
      ))}
    </div>
  )
}

export default NewsCoinTags
