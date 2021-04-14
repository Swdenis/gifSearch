import React, { useState } from 'react'
import ResizeObserver from 'react-resize-observer'
import SearchBarComponent from './SearchBar'
import SearchGrid from './SearchGrid'

export default function SearchComponents() {
  const [width, setWidth] = useState(window.innerWidth)

  return (
    <>
      <SearchBarComponent />
      <SearchGrid width={width} />
      <ResizeObserver
        onResize={({ width }) => {
          setWidth(width)
        }}
      />
    </>
  )
}
