import React from 'react'
import timeago from 'timeago.js'
import NewsCoinTags from './NewsCoinTags'
import Animate from 'react-move/Animate';
import { easeExpOut } from 'd3-ease';

class NewsListItem extends React.Component {
  state = {
    show: false,
  }

  updateShow = () => {
    this.setState((prev) => ({ show: !prev.show }));
  }

  render() {
    const { activeEntity, newsItem, setActiveNewsItem, preRender, selectCoin, newItem } = this.props


    const { updateShow, updateColor, state: { show } } = this;

    let className = 'b--b tiber overflow-hidden'
    if (activeEntity) {
      const { type, id } = activeEntity
      if (type === 'newsItem' && id === newsItem.get('id'))
        className += ' bg-foam'
    }
    const url = new URL(newsItem.get('url'))
    if (preRender) className += ' o-0 absolute'
    const style = newItem ? { height: this.props.height || 'auto', border: 'solid 1px #2faeed', transition: 'all 0.3 s linear' } : { height: this.props.height || 'auto' }
    return (
      <div className={className} style={style}>

      <div>
        <button onClick={updateShow}>
          Toggle
        </button>
        <Animate
          show={show}

          start={{
            opacity: 0,
            backgroundColor: '#0000ff',
          }}

          enter={{
            opacity: [1],
            backgroundColor: ['#00ff00'],
            timing: { duration: 2000 },
          }}

          update={{ // catch interrupts e.g. click button in middle of leave
            opacity: [1],
            backgroundColor: ['#00ff00'],
            timing: { duration: 2000 },
          }}

          leave={{
            opacity: [0],
            backgroundColor: ['#ff0000'],
            timing: { duration: 2000 },
          }}
        >
          {({ opacity, backgroundColor }) => {
            return (
              <div style={{
                opacity,
                width: 200,
                height: 200,
                marginTop: 10,
                color: 'white',
                backgroundColor,
              }}
              >
                {opacity.toFixed(3)}
              </div>
            );
          }}
        </Animate>
      </div>


        <div className="pa3">
          <div className="pointer" onClick={
            () => {
              setActiveNewsItem(newsItem)
              if (document.querySelector('.selected-news-content') && document.querySelector('.selected-news-content').parentNode)
                document.querySelector('.selected-news-content').parentNode.scrollTop = 0
            }
          }>
          <h4 className="fw6 mv3 f4">{newsItem.get('title')}</h4>
        </div>
        <div className="flex justify-between flex-wrap">
          <div className="f6 silver">
            {timeago().format(newsItem.get('feed_item_published_at'))}
            <span className="ph2">~</span>
            <a
              href={newsItem.get('url')}
              target="_blank"
              rel="nofollow"
              className="dib silver"
            >
              {url.hostname}
            </a>
          </div>
          <NewsCoinTags {...this.props} />
        </div>
      </div>
    </div>
    )

  }
}

export default NewsListItem
