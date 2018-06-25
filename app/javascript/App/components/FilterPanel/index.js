import React, { Component } from 'react'
import Types from 'prop-types'
import Layout from './Layout'
import FilterComponent from './FilterComponent'
import { normalizeFilterData } from '../../lib/stateHelpers'

class FilterPanel extends Component {
  state = { filters: {} }
  componentWillMount() {
    this.props.activeFilters.forEach((filter) => {
      // this.onChange(filter.get('key'))(filter.get('value'))
      //
      // todo: clicking filter button mounts filter pane, which triggers onChange for key / value
      // this causes the category or source to be selected, whichever is last
    })
  }
  componentDidMount() {
    const filters = { ...this.state.filters }
    this.props.activeFilters.forEach((value) => {
      // console.log('active: filter', filter)
    if (value.toJS) value = value.toJS()
    filters[value.key] = value.value
    this.setState({ filters })
      // this.onChange(filter.get('key'))(filter.get('value'))
      //
      // todo: clicking filter button mounts filter pane, which triggers onChange for key / value
      // this causes the category or source to be selected, whichever is last
    })

  }
  onChange = (key) => (value) => {
    const filters = { ...this.state.filters }
    // has category and sources filter arr
    if (value.toJS) value = value.toJS()
    filters[key] = value
    console.log('on change filters', filters)
    this.setState({ filters })
    // todo :call setState will trigger showing selected category or source
    // and handle toggle of selected cat
  }
  applyFilters = () => {
    const { setFilters, disableUI } = this.props
    setFilters(this.state.filters)
    disableUI('filterPanel')
  }
  resetFilters = () => {
    this.setState({ filters: {} })
  }
  render() {
    const { filterList, filterData, ...props } = this.props
    const pProps = { ...props, filterData: normalizeFilterData(filterData) }
    const { applyFilters, resetFilters } = this
    return (
      <Layout {...{ ...props, applyFilters, resetFilters }} newsFeedStyle>
        {filterList.map((filter, index) => {
          if (filter.get('key') === 'coins') return null // Temp fix for hiding coins
          if (filter.get('key') === 'keywords') return null
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
