import React, { Component, Fragment } from 'react'
import NewsListItemAnimated from './NewsListItemAnimated'
import LoadingIndicator from '../LoadingIndicator'
import Tips from './Tips'

class NewsList extends Component {
  state = { initialRender: true, initialRenderTips:true }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ initialRender: false })
    }, 6000)
  }
  setActiveNewsItem = (newsItem) => {
    const { setActiveEntity, enableUI } = this.props
    setActiveEntity({ type: 'newsItem', id: newsItem.get('id') })
    if (window.isMobile) enableUI('bodySectionDrawer', { fullScreen: true })
  }

  closeTips() {
    this.props.setActiveEntity({ type: 'newsItem', id: '1' })
    this.setState({
      initialRenderTips: false
    })
  }

  renderView(viewState, itemHeight, activeFilters) {
    if (
      !viewState.activeEntity &&
      window.isMobile &&
      !activeFilters.size &&
      this.state.initialRenderTips
    ) {
      return <Tips closeTips={this.closeTips.bind(this)} />;
    }
    else if (!viewState.newsItems.length) {
      return (
        <div className="pa3 tc mt4">
          <div className="pointer">
            <h4 className="fw6 mv3 f4">No results found</h4>
          </div>
          <div className="flex justify-between flex-wrap">
            <div className="f6 silver center">
              <span className="ph2">Try changing your search query or removing some filters</span>
            </div>
          </div>
        </div>
      )
    }

    const mappedItems = viewState.newsItems.map((newsItem) => (
      <NewsListItemAnimated
      key={newsItem.get('id')}
      {...this.props}
      newsItem={newsItem}
      height={itemHeight}
      setActiveNewsItem={this.setActiveNewsItem}
      />
    ))
    return mappedItems
  }

  render() {
    const { newsItems, isLoading, activeEntity, activeFilters } = this.props
    const itemHeight = this.state.initialRenderTips ? 'auto' : 0
    const viewState = {
      activeEntity: activeEntity,
      newsItems: newsItems,
    }

    return (
      <Fragment>
        <div
          className="flex-auto overflow-y-auto relative"
          style={
            !activeEntity && window.isMobile && !activeFilters.size && this.state.initialRenderTips
              ? {marginTop: '-150px', background: '#fff'}
              : {}
          }>
          {isLoading('newsItems') && (
            <LoadingIndicator className="overlay bg-white-70" />
          )}
          {this.renderView(viewState, itemHeight, activeFilters)}
        </div>
      </Fragment>
    )
  }
}

export default NewsList
