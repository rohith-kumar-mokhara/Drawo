import React from 'react'
import {Excalidraw} from '@excalidraw/excalidraw'
import "@excalidraw/excalidraw/index.css"; // Import the required CSS

const Whiteboard = () => {
  return (
    <div style={{ height: "100%" }}>
        <Excalidraw />
    </div>
  )
}

export default Whiteboard
