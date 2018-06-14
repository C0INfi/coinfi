import React, { Component} from 'react'
import CoinDetail from './../CoinDetail'
import axios from 'axios'

// const ShowCoinDrawer = (props, event) => {
//   const slug = event.target.getAttribute('slug')
//   const url = `/api/coins/${slug}.json`
//   props.showCoinDetail(slug)
// }




export default (props) => {
  const { newsItem, setActiveEntity } = props

  const onClick = (coin) => {
  debugger
    setActiveEntity({
      type: 'coin',
      id: coin.get('id'),
      label: coin.get('name')
    })
  }

  return (
	<div>
	  {newsItem.get('coin_link_data').map((data, index) => (
		<a
		  key={index}
		  className="tag pointer"
		  onClick={onClick}
		  slug={data.get('slug')}
		>
		  {data.get('symbol')}
		</a>
	  ))}
	</div>
  )
}

