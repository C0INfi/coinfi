import React, { Component } from 'react'
import Type from 'prop-types'

export default class ItemSelectorAlt extends Component {
  selectedItems = () => this.props.selectedItems || []
  isSelected = (item) => {
    const selected = this.selectedItems().feedSources
                  && this.selectedItems().feedSources.length
                  && this.selectedItems().feedSources.map((item) => JSON.stringify(item))
                  // console.log(selected)
    if (selected) {
      return selected.includes(JSON.stringify(item))
    }
  }
  add = (item) => {
    let items = this.selectedItems()
    if (!items.feedSources) {
      items.feedSources = []
    }
    items.feedSources.push(item)
    this.props.addRemoveHandler({action: 'add', value: item.feedSources})
  }
  remove = (removedItem) => {
    let items = this.selectedItems()
    const filteredItems = items.feedSources.filter(item => item !== removedItem)
    console.log('filteredItems', filteredItems)
    const filteredItemList = {}
    filteredItemList['feedSources'] = filteredItems
    // let items = this.selectedItems().feedSources
    // items = items.filter((c) => JSON.stringify(c) !== JSON.stringify(item))
    this.props.addRemoveHandler.call(this, {action: 'remove', value: filteredItemList})
    // this.props.addRemoveHandler('foo')
    // let removeArr = []
    // removeArr.push(item)
    // this.props.onChange(removeArr)
  }
  itemLabel = (item) => {
    if (/www/.exec(item) !== null) {
      item = item.replace('www.', '')
    }
    if (item instanceof Object) {
      return item.name || item.title || item.label
    }
    return item
  }

  ItemLink = ({ item }) => {
    if (this.isSelected(item)) {
      // console.log(item)
      return (
        <a className="mid-gray selected" onClick={() => this.remove(item)}>
          <input type="checkbox" className="mr2 w-auto" defaultChecked />
          {this.itemLabel(item)}
        </a>
      )
    } else {
      return (
        <a className="mid-gray" onClick={() => this.add(item)}>
          <input type="checkbox" className="mr2 w-auto" />
          {this.itemLabel(item)}
        </a>
      )
    }
  }
  render() {
    const { ItemLink } = this
    return (
      <div className="item-selector-alt">
        <ul>
          {this.props.items.map((item, i) => {
            if (/www/.exec(item) !== null) {
              item = item.replace('.www','').replace(/^/, 'www.')
            }
            return (
            <li className="mv2" key={i}>
              <ItemLink item={item} />
            </li>
            )
          }
          )}
        </ul>
      </div>
    )
  }
}

ItemSelectorAlt.propTypes = {
  items: Type.array.isRequired,
  selectedItems: Type.object,
  onChange: Type.func
}
