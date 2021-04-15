import React from 'react'
import { Icon } from 'semantic-ui-react'

export default function AddOverlay({ gif, isHovered }) {
  return <div className="overlay">{isHovered ? <Icon size="big" name="add" /> : ''}</div>
}
