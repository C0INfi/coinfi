import * as React from 'react'
import FilterButton from './FilterButton'

declare global {
  interface Window {
    isMobile?: any
  }
}


export interface FilterBarProps {
  toggleFilterPanel: Function
  children: any
}

export default function(props: FilterBarProps) {
  return (
    <div
      id="panel-header"
      className="pa3 b--b flex-none flex justify-between items-center bg-athens"
      style={{ height: 60 }}
    >
      <div className="flex items-center flex-auto">
        {!window.isMobile && (
          <button
            className="btn btn-blue btn-xs coins-btn mr2"
            style={
              window.isMobile
                ? {
                    ...{
                      background: '#2495ce',
                      flex: 1,
                      textTransform: 'none',
                    },
                  }
                : {}
            }
          >
            <i className="material-icons f6 mr2">list</i>
            Coins
          </button>
        )}
        <FilterButton onClick={props.toggleFilterPanel} />
        {props.children}
      </div>
    </div>
  )
}
