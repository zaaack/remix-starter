import React, { useRef } from 'react';

export interface Props {
  onDblClick:()=>void
  clickHolder?: string
  children: React.ReactNode | ((clicked: boolean) => React.ReactNode)
}
function DoubleClick(props:Props) {
  const [clickCount, setClickCount] = React.useState(0)
  const clicked = clickCount>0
  let children = props.children
  if (typeof children === 'function') {
    children = children(clicked)
  } else {
    const clickHolder = clicked ? props.clickHolder??' [再按一次清除]' : ''
    children = <>{children}{clickHolder}</>
  }
  return (
    <span onClick={e=> {
      e.stopPropagation()
      if (clickCount===0){
        setClickCount(1)
        setTimeout(() => {
          setClickCount(0)
        }, 3000)
      } else {
        props.onDblClick()
        setClickCount(0)
      }

    }}>
      {children}
    </span>
  );
}

export default DoubleClick;
