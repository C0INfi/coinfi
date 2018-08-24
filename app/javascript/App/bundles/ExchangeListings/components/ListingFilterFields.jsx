import React from 'react'
import Select from 'react-select'
import DateRangeListing from '~/components/DateRangeListing'
import { Consumer } from '~/bundles/common/context'

export default (props) => {
  const selectedSymbolData = props.selectedSymbols.map(item => {
    return {
      label: item,
      value: item
    }
  })
  const selectedExchangeSlugs = props.selectedExchanges.map(slug => {
    return {
      label: slug,
      value: slug
    }
  })
return (
  <div className="pa3">

      <Consumer>{
      ({ title }) => <h1>Title: { title }</h1>
    }</Consumer>
    <div className="mb4">
      <h4 className="mb2">Quote Symbol</h4>
      <Select
        isMulti
        name="quote_symbols"
        options={props.quoteSymbols}
        onChange={props.changeSymbol}
        value={selectedSymbolData}
      />
    </div>

    <div className="mb4">
      <h4 className="mb2">Date Range</h4>
      <DateRangeListing
        onChange={props.filterDates}
        selectedItems={props.selectedItems}
      />
    </div>

    <div>
      <h4 className="mb2">Exchanges</h4>
      <Select
        isMulti
        name="exchanges"
        options={props.exchanges}
        onChange={props.changeExchange}
        value={selectedExchangeSlugs}
      />
    </div>
  </div>
)

}
