import React from 'react'
import { RingLoader } from 'react-spinners'
import './loader.css'
const Loading = () => {
  return (
    <div className="loader">
      <RingLoader color="red" />
    </div>
  )
}

export default Loading
