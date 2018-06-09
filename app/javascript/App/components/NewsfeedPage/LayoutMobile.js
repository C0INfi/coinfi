import React, { Component, Fragment } from 'react'
import NewsItemList from './NewsItemList'
import BodySection from './BodySection'
import ActionBar from './ActionBar'
import { CSSTransitionGroup } from 'react-transition-group'


export default class LayoutMobile extends Component {
  state = {
    name: '',
    showValidationMessage: false,
    showValidationButton: false,
  };
  render() {
    const { activeEntity, currentUI } = this.props
    const { showValidationMessage } = this.state
    return (
      <div>
        <div className="bg-white">
          <ActionBar {...this.props} />
          <NewsItemList {...this.props} />
        </div>
        {activeEntity &&
          currentUI('newsfeedModal') && (
            <Fragment>
              <div className="modal bg-black-70 pt5 vw100">
                <BodySection {...this.props} mobileLayout />
              </div>

            {/*   <CSSTransitionGroup */}
            {/*     in={showValidationMessage} */}
            {/*     timeout={300} */}
            {/*     classNames="message" */}
            {/*     unmountOnExit */}
            {/*     onExited={() => { */}
            {/*       this.setState({ */}
            {/*         showValidationButton: true, */}
            {/*       }); */}
            {/*     }} */}
            {/*   > */}
            {/*   <h1>foo</h1> */}
            {/* </CSSTransitionGroup> */}
          </Fragment>
        )}
      </div>
    )
  }
}
