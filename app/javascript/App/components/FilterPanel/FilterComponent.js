import React, { Fragment } from 'react'
import Types from 'prop-types'
import components from './filterComponents'
import MarketMoving from './filterComponents/MarketMoving'
import Categories from './filterComponents/Categories'

const FilterComponent = (props) => {
  const { filter } = props
  const Component = components[filter.get('key')]
  if (!Component) {
    return null
  }
  return (
    <Fragment>
      <div className="pv4 bb b--geyser">
        <h4 className="mb2">Market Moving</h4>
        <MarketMoving {...props} />
      </div>
      <div className="pv4 bb b--geyser">
        <h4 className="mb2">Categories</h4>
        <Categories {...props} />
      </div>
      <div className="pv4 bb b--geyser">
        <h4 className="mb2">{filter.get('label')}</h4>
        <Component {...props} />
      </div>
    </Fragment>
  )
}

export default FilterComponent

FilterComponent.propTypes = {
  activeFilters: Types.object.isRequired,
  filter: Types.object.isRequired,
  setFilter: Types.func.isRequired,
  removeFilter: Types.func.isRequired
}
