import React, { Component, Fragment } from 'react'
import NewsItemList from './NewsItemList'
import BodySection from './BodySection'
import ActionBar from './ActionBar'

export default function(props) {
  const { activeEntity, currentUI } = props
  return (
    <div>
      <div className="bg-white">
        <ActionBar {...props} />
        <NewsItemList {...props} />
      </div>
      {activeEntity &&
        currentUI('newsfeedModal') && (
        <Fragment>
          <div className="modal bg-black-70 pt5 vw100">
            <BodySection {...props} mobileLayout />
          </div>
          <div />
        </Fragment>
      )}
    </div>
  )
}
