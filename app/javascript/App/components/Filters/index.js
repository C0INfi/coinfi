/*
 * Renders a layout based on the screen's breakpoint; note that it doesn't
 * change on resize, only on page refresh. 
 */
import React from 'react'
import DesktopLayout from './DesktopLayout'
import MobileLayout from './MobileLayout'
import debounce from 'debounce'

class Filters extends React.Component {
  componentWillMount() {
    window.addEventListener('resize', debounce(() => this.forceUpdate()), 500)
  }
  render() {
    if (window.isMobile) {
      return <MobileLayout {...this.props} />
    } else {
      return <DesktopLayout {...this.props} />
    }
  }
}

export default Filters