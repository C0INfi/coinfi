import React, { Component } from 'react'
import NewsItemList from './NewsItemList'
import BodySection from './BodySection'
import ActionBar from './ActionBar'
import { Transition } from 'react-transition-group'


export default class LayoutMobile extends Component {

  constructor(props) {
    super(props)
    this.state = {
      show: false,
      entered: false,
    }
  }

  render() {

    const { activeEntity, currentUI } = this.props
    const { show } = this.state;

    let drawerStyle = {
      top: 1000,
      top: '20%',
      transition: 'all 400ms ease',
      height: 800,
      background: '#fff',
    }


    return (
      <div>

        <button
          onClick={() => {
            this.setState(state => ({
              show: !state.show,
            }))
          }}
        >
          Toggle
        </button>
        <Transition
          in={show}
          timeout={500}
          unmountOnExit
        >
          {state => {
            switch (state) {
              case 'entering':
                return 'Entering…'
              case 'entered':
                return 'Entered!'
              case 'exiting':
                return 'Exiting…'
              case 'exited':
                return 'Exited!'
            }
          }}
        </Transition>

        <div className="bg-white">
          <ActionBar {...this.props} />
          <NewsItemList {...this.props} />
        </div>
        {activeEntity &&
            (
              <div className="overlay" style={drawerStyle}>
                <BodySection {...this.props} mobileLayout />
              </div>
            )}
          </div>
    )

  }
}
