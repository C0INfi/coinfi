import React, {Component, Fragment} from 'react';
import NewsItemList from './NewsItemList';
import BodySection from './BodySection';
import ActionBar from './ActionBar';
import {CSSTransition} from 'react-transition-group';

const Fade = ({children, ...props}) => (
  <CSSTransition {...props} timeout={3000} classNames="fade">
    {children}
  </CSSTransition>
);

export default class LayoutMobile extends Component {
  constructor(...args) {
    super(...args);
    this.state = {show: false};

    // setInterval(() => {
    //   this.setState({ show: !this.state.show })
    // }, 5000)
  }

  hideComp() {
    console.log('show comp');
    this.setState({
      show: false,
    });
  }

  showComp() {
    console.log('show comp');
    this.setState({
      show: true,
    });
  }

  render() {
    const {activeEntity, currentUI} = this.props;
    const {showValidationMessage} = this.state;
    return (
      <div>
        <div className="bg-white">
          <ActionBar {...this.props} />

          <Fade in={this.state.show}>
            <div className="greeting">Hello world</div>
          </Fade>

          <NewsItemList
            {...this.props}
            showComp={ this.showComp.bind(this) }
            hideComp={ this.hideComp.bind(this) }
          />
        </div>
        {activeEntity &&
          currentUI('newsfeedModal') && (
            <Fragment>
              <div className="modal bg-black-70 pt5 vw100">
                <BodySection
                  {...this.props}
                  mobileLayout
                  showComp={this.showComp }
                  hideComp={this.hideComp.bind(this) }
                />
              </div>
            </Fragment>
          )}
      </div>
    );
  }
}
