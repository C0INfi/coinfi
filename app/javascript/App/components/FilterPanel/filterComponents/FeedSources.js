import React from 'react'
import Type from 'prop-types'
import _ from 'lodash'
import ItemSelectorAlt from '../../ItemSelectorAlt'

const FeedSources = ({ feedSources, value, onChange, addRemoveHandler }) => {
console.log('onChange', onChange)
  const sortedSources = _.sortBy(feedSources.map((item) => {
    if (/www/.exec(item) !== null)
      return item.replace('www.', '').concat('.www')
    return item.replace('www.', '')
  }))
  let sourcesSansSocial = sortedSources.filter((source) => source !== 'twitter' && source !== 'reddit')
  return (
    <ItemSelectorAlt
      items={sourcesSansSocial}
      selectedItems={value}
      onChange={onChange('feedSources')}
      addRemoveHandler={addRemoveHandler}
    />
  )
}

FeedSources.propTypes = {
  value: Type.object,
  feedSources: Type.array.isRequired,
  onChange: Type.func
}

export default FeedSources
