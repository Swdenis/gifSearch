import React from 'react'
import { useDispatch } from 'react-redux'
import { Icon } from 'semantic-ui-react'
import { deleteGif } from '../../redux/actions'

export default function DeleteOverlay({ gif, isHovered }) {
  const dispatch = useDispatch()
  function handleDelete(e) {
    e.preventDefault()
    dispatch(deleteGif(gif.id))
    window.location.reload()
  }
  return (
    <div className="overlay">
      {isHovered ? <Icon onClick={(e) => handleDelete(e)} size="big" name="delete" /> : ''}
    </div>
  )
}
