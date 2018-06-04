import React, { Component } from 'react'
import Icon from '../Icon'
import clickOutside from 'react-onclickoutside'

class SelectFilter extends Component {
  handleClickOutside() {
    const { currentUI, uiKey, toggleUI } = this.props
    if (currentUI(uiKey)) toggleUI(uiKey)
  }
  toggleFilters = () => {
    const { toggleUI, activeFilters } = this.props
    toggleUI('mobileFilters')
    if (activeFilters.size === 0) toggleUI(['newFilter', 'selectFilter'])
  }

  render() {
    const { toggleUI, availableFilters, disabledFilters } = this.props
    return (
      <div 
        className="oi-pane-content"
        style={{height:'100%', width:'100%'}}
      >

        <div className="row">
          <div className="col-xs-4">
            <div className="box" style={{ paddingLeft: '1rem', paddingTop: '.5rem' }}>
              Reset
            </div>
          </div>
          <div className="col-xs-4">
            <header className="box">Filters</header>
          </div>
          <div className="col-xs-4">
            <div className="box" style={{ 
                width:'20px',
                float: 'right',
                marginRight: '1rem',
                paddingTop: '.25rem'
              }}>
              <Icon name={'times'} classNameName="ml3 f4" onClick={this.toggleFilters} />
            </div>
          </div>
        </div>

        <div className="pv2">
          <ul>
            {availableFilters.map((item) => (
              <li key={item.get('key')}>
                <button
                  onClick={() => toggleUI(['newFilter', item.get('key')])}
                >
                  <div>{item.get('label')}</div>
                  <Icon name="plus" className="ml3 aqua" />
                </button>
              </li>
            ))}
          </ul>
          {disabledFilters.size > 0 && (
            <div className="o-50">
              <header>Coming soon</header>
              <ul>
                {disabledFilters.map((item) => (
                  <li key={item.get('key')}>
                    <button disabled={true}>
                      <div>{item.get('label')}</div>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <button 
          className="btn btn-blue btn-lg" 
          onClick={this.toggleFilters}
          style={{
            position:'absolute', 
            bottom:'1rem',
            width:'90%',
            left:'5%',
            padding:'.8rem',
            textTransform:'none'
          }}>
          Apply
        </button>
      </div>
    )
  }
}

SelectFilter = clickOutside(SelectFilter)

export default (props) => {
  console.log(props.desktopLayout, 'foo')
  // if (props.desktopLayout) {
  //   return (
  //     <div className="oi-pane" style={{ height: '100%', width: '100%', marginLeft: '200px' }}>
  //       <SelectFilter {...props} />
  //     </div>
  //   )
  // }
  return (
    <div className="oi-pane" style={{ height: '100%', width: '100%' }}>
      <SelectFilter {...props} />
    </div>
  )
}

