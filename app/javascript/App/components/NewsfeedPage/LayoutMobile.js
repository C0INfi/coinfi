import React, { Component } from 'react'
import NewsItemList from './NewsItemList'
import BodySection from './BodySection'
import ActionBar from './ActionBar'
import { CSSTransition } from 'react-transition-group'


export default class LayoutMobile extends Component {

  constructor(props) {
    super(props)
    this.state = {
      show: false,
      entered: false,
      showValidationMessage: false,
      showValidationButton: false,
      drawerOpen: false
    }
  }

  openDrawer() {
    console.log('open')
    this.setState({
      drawerOpen: true
    })
  }

  render() {

    const { activeEntity, currentUI } = this.props
    const { show, showValidationMessage, drawerOpen } = this.state
    const duration = 300;
    const pageTop = window.pageYOffset

    const defaultStyle = {
      height: 200,
      background: '#fff',
      top: 1000 + pageTop,
      transition: `all ${duration}ms ease`,
    }

    const transitionStyles = {
      entering: { top: 1000 + pageTop },
      entered:  { top: 200 + pageTop },
    };

    console.log('transitionStyles', transitionStyles)

    var drawerStyle = {
      top: '20%',
      transition: 'all 400ms ease',
    }


    return (
      <div>

        {/* <button */}
        {/*     onClick={() => { */}
        {/*       this.setState(state => ({ */}
        {/*         drawerOpen: !this.drawerOpen */}
        {/*       })); */}
        {/*     }} */}
        {/* > */}
        {/*   Toggle */}
        {/* </button> */}

        <div className="bg-white">
          <ActionBar {...this.props} />
          <NewsItemList {...this.props} />
        </div>

        {/* {activeEntity && ( */}
        {/* )} */}



          <CSSTransition
            in={drawerOpen}
            timeout={5000}
            classNames="message"
            unmountOnExit
            onExited={() => {
              console.log('exit')
              this.setState({
                showValidationButton: true,
              });
            }}
          >
            {state => {
              console.log(state)
            return (
              <div>
                <h1 className='message'>foobar top</h1>

                {/* <div className="overlay" style={defaultStyle}> */}
                {/*   <BodySection {...this.props} mobileLayout /> */}
                {/* </div> */}

              {/* <div style={{position: 'absolute', top: 0}}> */}
              {/*   Your name rocks! */}
                <CSSTransition
                  in={state === 'entered'}
                  timeout={300}
                  classNames="star"
                  unmountOnExit
                >
                <h1 style={{position:'absolute', top:200, padding:100}}>foobar enterex</h1>
                  {/* <div className="star">⭐</div> */}

                <div className="overlay" style={defaultStyle}>
                  <BodySection {...this.props} mobileLayout openDrawer={this.openDrawer} />
                </div>

                </CSSTransition>
              </div>
            )}}
          </CSSTransition>

      </div>
    )

  }
}
