import React, { Fragment } from 'react'
import Types from 'prop-types'
import components from './filterComponents'
import MarketMoving from './filterComponents/MarketMoving'
import Categories from './filterComponents/Categories'
import FeedSources from './filterComponents/FeedSources'

const FilterComponent = (props) => {
  const { newsFeedStyle } = props
  // const Component = components[filter.get('key')]
  // if (!Component) {
  //   return null
  // }
  console.log('current', props.selectedFilters)
  // console.log(props.filterList)
  {props.filterList.map((filter, index) => {
    if (filter.get('key') === 'coins') return null // Temp fix for hiding coins
    if (filter.get('key') === 'keywords') return null
    // console.log('schema', index, filter)
  })
  }

  return (
    <Fragment>
      <div className="pv4 bb b--geyser" style={newsFeedStyle ? {paddingTop:'.5rem', paddingBottom:'1.5rem'}: ''}>
        <h4 className="mb2">Market moving</h4>
        <MarketMoving {...props} />
      </div>
      <div className="pv4 bb b--geyser" style={newsFeedStyle ? {paddingTop:'.5rem', paddingBottom:'1.5rem'}: ''}>
        <h4 className="mb2" style={{margin:'15px 0'}}>Categories</h4>
        <Categories {...props} />
      </div>
      <div className="pv4 bb b--geyser" style={newsFeedStyle ? {paddingTop:'.5rem', paddingBottom:'1.5rem'}: ''}>
        <h4 className="mb2" style={{margin:'15px 0', fontWeight:'bold'}}>Sources</h4>
        <FeedSources {...props} />
      </div>
    </Fragment>
  )
}

export default FilterComponent

FilterComponent.propTypes = {
  activeFilters: Types.object.isRequired,
  setFilter: Types.func.isRequired,
  removeFilter: Types.func.isRequired
}
