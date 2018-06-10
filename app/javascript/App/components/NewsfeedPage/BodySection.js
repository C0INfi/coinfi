import React from 'react'
import Animate from 'react-move/Animate'
import { easeExpOut } from 'd3-ease'
import NewsItemBody from './NewsItemBody'
import CoinBody from './CoinBody'
import Tips from './Tips'

const BodySection = (props) => {
  const { activeEntity, mobileLayout, setMargin, animationProps } = props
  return (
    <div>
      <Animate
        show={activeEntity !== 'coin'}
        start={{ translateX: ['-100%'] }}
        enter={{
          translateX: ['50%'],
          timing: { duration: 700, ease: easeExpOut }
        }}
        leave={{
          translateX: ['-100%'],
          timing: { duration: 200 }
        }}
      >
        {(animationProps) => <BodySectionInner {...props} {...animationProps} />}
      </Animate>
    </div>
  )
}


const BodySectionInner = (props) => {
  const { activeEntity, mobileLayout, setMargin } = props
  if (!activeEntity) return <Tips />
  return (
    <div>
      {activeEntity.type === 'coin' ? (
        <CoinBody {...props} />
      ) : (
        <NewsItemBody {...props} mobileLayout />
      )}
    </div>
  )
}

export default BodySection
