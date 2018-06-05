import React from 'react'
import FilterComponent from './FilterComponent'
import SelectFilter from './SelectFilter'

const filterStyle = {
  background: '#fff',
  height: '100%',
  width: '100%',
  zIndex: 1,
  position: 'absolute',
}

export default (props) => {
  // const { coins, feedSources } = props

  const normalizedData = () => {
    const data = {}
    Object.entries(this.props.filterData).forEach(([key, values]) => {
      data[key] = values.map((value) => {
        let id, label
        if (value instanceof Object) {
          if (value.toJS) value = value.toJS()
          id = value.id
          label = value.label || value.title || value.name
        } else {
          id = value
          label = value
        }
        return { id, label }
      })
    })
    return data
  }


  const uiKey = 'newFilter'
  const filterKey = props.currentUI(uiKey)
  const filter = props.availableFilters.find((o) => o.get('key') === filterKey)
  const {coins, feedSources} = props

  return (
    <div style={filterStyle}>


      <SelectFilter {...{...props, uiKey }} />
      {/* <FilterComponent {...{...props, filter, uiKey, filterData: normalizedData.bind(this)}} /> */}
    </div>
  )
}
