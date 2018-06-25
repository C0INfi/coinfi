import React, { Component } from 'react'
import Types from 'prop-types'
import Layout from './Layout'
import FilterComponent from './FilterComponent'
import { normalizeFilterData } from '../../lib/stateHelpers'

class FilterPanel extends Component {
  state = {
      filters: {},
      selectedFilters: []
  }
  componentWillMount() {
    let selectedFilterList = []
    this.props.activeFilters.forEach((filter) => {
      // console.log('active filter', filter, filter.get('key'), filter.get('value'))
      // selectedFilterList.push({filter.get('key'): filter.get('value')})
      // this.onChange(filter.get('key'))(filter.get('value'))
    })
  }

  componentDidMount() {
    let selectedFilterList = []
    this.props.activeFilters.forEach((filter) => {
      // console.log('active filter', filter, filter.get('key'), filter.get('value'))
      selectedFilterList.push({[filter.get('key')]: filter.get('value')})
    })

    this.setState({
      selectedFilters: selectedFilterList
    })

  }
  onChange = (key) => (value) => {
    const filters = { ...this.state.filters }
    if (value.toJS) value = value.toJS()
    filters[key] = value
      // get filter obj structure
    this.setState({ filters })
  }
  applyFilters = () => {
    const { setFilters, disableUI } = this.props
      // console.log('applyFilters', this.state.filters)
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
            <FilterComponent
              {...pProps}
              onChange={this.onChange}
              value={this.state.filters}
              selectedFilters={this.state.selectedFilters}
              filterList={filterList}
              currentFilters={this.state.filters}
              newsFeedStyle
            />
      </Layout>
    )
  }
}

export default FilterPanel

FilterPanel.propTypes = {
  activeFilters: Types.object.isRequired,
  setFilters: Types.func.isRequired
}
