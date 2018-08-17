import React, { Fragment } from 'react'
import Type from 'prop-types'
import ItemSelectorDate from '../../ItemSelectorDate'
import InfiniteCalendar from 'react-infinite-calendar'
import 'react-infinite-calendar/styles.css'
const today = new Date()

const Dates = ({ dates, value, onChange, clickOutside }) => {
  return (
    <div onClick={clickOutside}>
      <InfiniteCalendar
        width={'75%'}
        height={400}
        selected={today}
      />
      {/* <ItemSelectorDate */}
      {/*   items={dates} */}
      {/*   selectedItems={value} */}
      {/*   onChange={onChange('dates')} */}
      {/* /> */}
    </div>
  )
}

export default Dates
