import { fromJS } from 'immutable'

export const namespace = 'newsfeed'

export const filterList = fromJS([
  {
    key: 'search',
    label: 'Search'
  },
  { key: 'coins', label: 'Coins' }
])