import React, { Component } from 'react'
import debounce from 'debounce'
import newsfeedContainer from '../../containers/newsfeed'
import LayoutDesktop from './LayoutDesktop'
import LayoutTablet from './LayoutTablet'
import LayoutMobile from './LayoutMobile'

class NewsfeedPage extends Component {
  state = {
    initialRenderTips: false
  }
  componentWillMount() {
    window.addEventListener('resize', debounce(() => this.forceUpdate()), 500)
  }

  componentDidMount() {
    console.log('did mount')
    this.props.fetchUser()
  }

  newsfeedTips() {
    this.setState({initialRenderTips: !this.state.initialRenderTips})
  }

  addToCoinList() {
    console.log('addToCoinList', this.props)
  }

  render() {
    console.log('newsfeed index')
    if (window.isMobile) {
      return <LayoutMobile {...this.props} newsfeedTips={(event) => this.newsfeedTips(event)} initialRenderTips={this.state.initialRenderTips} />
    } else if (window.isTablet) {
      return <LayoutTablet {...this.props} initialRenderTips={this.state.initialRenderTips} />
    } else {
      return <LayoutDesktop {...this.props} initialRenderTips={this.state.initialRenderTips} addToCoinList={this.addToCoinList} />
    }
  }
}

export default newsfeedContainer(NewsfeedPage)
