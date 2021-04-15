import React from 'react'
import { SearchContextManager } from '@giphy/react-components'
import { API_KEY } from '../../api/giphy'
import SearchComponents from './SearchComponents'

export default function Search() {
  return (
    <>
      <SearchContextManager apiKey={API_KEY} initialTerm="Austria">
        <SearchComponents />
      </SearchContextManager>
    </>
  )
}
