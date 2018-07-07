import React from 'react'
import Icon from '../Icon'

const WatchButton = ({
  isWatching,
  coin,
  updateUser,
  onWatch,
  hasText,
  user,
  addToCoinList,
  foo
}) => {
  const hasTextClassNames = 'btn btn-xs btn-gray'
  // console.log(addToCoinList)

  if (isWatching(coin.get('id'))) {
    return (
      <Icon
        name="star"
        solid
        className={`aqua ${hasText ? hasTextClassNames : ''}`}
        onClick={() => {
          updateUser({ unwatchCoin: coin.get('id') })
        }}>
        {hasText && 'Watching'}
      </Icon>
    )
  }
  console.log(addToCoinList, foo)
  return (
    <div className="div tooltipped">
      <Icon
        name="star"
        light
        className={`light-silver ${hasText ? hasTextClassNames : ''}`}
        onClick={() => {
          // TODO: Implement new onboarding signup flow.
          if (!user) return (window.location = '/login')
          if (onWatch) onWatch(coin)
          updateUser({ watchCoin: coin.get('id') })
          console.log('watch', addToCoinList)
          if (addToCoinList) console.log('has add')
          if (addToCoinList) addToCoinList()

    console.log(addToCoinList)
        }}
      >
        {hasText && 'Watch'}
      </Icon>
    </div>
  )
}

export default WatchButton
