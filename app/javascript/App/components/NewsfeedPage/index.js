import React, { Component } from 'react'
import debounce from 'debounce'
import newsfeedContainer from '../../containers/newsfeed'
import LayoutDesktop from './LayoutDesktop'
import LayoutTablet from './LayoutTablet'
import LayoutMobile from './LayoutMobile'

class NewsfeedPage extends Component {

  state = {
    coinDetailVisible: false
  }

  componentWillMount() {
    window.addEventListener('resize', debounce(() => this.forceUpdate()), 500)
  }
  showCoinDetail() {
    console.log('showCoinDetail')
    this.setState({
      coinDetailVisible: true
    })
  }

  render() {
    if (window.isMobile) {
      return <LayoutMobile {...this.props} showCoinDetail={this.showCoinDetail.bind(this)} coinDetailVisible={this.state.coinDetailVisible} />
    } else if (window.isTablet) {
      return <LayoutTablet {...this.props} />
    } else {
      return <LayoutDesktop {...this.props} />
    }
  }
}

export default newsfeedContainer(NewsfeedPage)
