import { createHOC } from '../../lib/redux'
import actions from './actions'
import selectors from './selectors'
import { filterList } from './constants'

export default createHOC({
  actions,
  selectors,
  extraProps: { filterList },
  onMount: ({ props }) => {
    console.log('newsfeed container mount')
    props.initializeFilters()
    props.initializeNewsfeedState()
  }
})
