import React, { Component } from 'react'
import Types from 'prop-types'
import Layout from './Layout'
import FilterComponent from './FilterComponent'
import { normalizeFilterData } from '../../lib/stateHelpers'

class FilterPanel extends Component {
  state = { filters: {} }
  componentWillMount() {
   // this.props.activeFilters.forEach((filter) => {
    //   this.onChange(filter.get('key'))(filter.get('value'))
    // })
  }
  toggleFilterPanel = (key) => (value) => {
    console.log('toggle filter')
    // const filters = { ...this.state.filters }
    // if (value.toJS) value = value.toJS()
    // filters[key] = value
    // this.setState({ filters })
  }
  onChange = (key) => (value) => {
    console.log('onChange fired')
    const filters = { ...this.state.filters }
    if (value.toJS) value = value.toJS()
    filters[key] = value
    this.setState({ filters })
  }
  applyFilters = () => {
    const { setFilters, disableUI } = this.props
    console.log(this)
    // this.toggleFilterPanel()
    setFilters(this.state.filters)
    disableUI('filterPanel')
  }
  resetFilters = () => {
    this.setState({ filters: {} })
  }
  render() {
    console.log('panel active', this.props.activeFilters)
    const { filterList, filterData, ...props } = this.props
    const pProps = { ...props, filterData: normalizeFilterData(filterData) }
    const { applyFilters, resetFilters, toggleFilterPanel } = this

    return (
      <Layout {...{ ...props, applyFilters, resetFilters, toggleFilterPanel }} newsFeedStyle>

            {/* <FilterComponent */}
            {/*   {...pProps} */}
            {/*   filter={'categories'} */}
            {/*   onChange={this.onChange} */}
            {/*   value={this.state.filters} */}
            {/*   newsFeedStyle */}
            {/* /> */}
        {filterList.map((filter, index) => {
          console.log(filter)
          if (filter.get('key') === 'coins') return null // Temp fix for hiding coins
          if (filter.get('key') === 'keywords') return null
          if (filter.get('key') === 'categories') return null
          return (
            <FilterComponent
              key={index}
              {...pProps}
              filter={filter}
              onChange={this.onChange}
              value={this.state.filters}
              newsFeedStyle
            />
          )
        })}
      </Layout>
    )
  }
}

export default FilterPanel

FilterPanel.propTypes = {
  activeFilters: Types.object.isRequired,
  setFilters: Types.func.isRequired
}
