import { useState } from 'react'

export default props => {

  const [originalMousePosition, setOriginalMousePosition] = useState({x: 0, y: 0})
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [clicked, setClicked] = useState(false)

  const handleMouseMove = event => {
    if (clicked) {
      const move = {x: event.pageX - originalMousePosition.x, y: event.pageY - originalMousePosition.y}
      setOriginalMousePosition({x: event.pageX, y: event.pageY})
      setPosition({x: position.x + move.x, y: position.y + move.y})
    }
  }

  const handleMouseDown = event => {
    setClicked(true)
    setOriginalMousePosition({x:event.pageX, y: event.pageY})
  }
  
  const handleMouseUp = event => {
    setClicked(false)
  }

  return (
    <div className="draggable-item unselectable" onMouseDown={e => handleMouseDown(e)} onMouseUp={e => handleMouseUp(e)} onMouseMove={e => { handleMouseMove(e) }} onMouseLeave={e => handleMouseUp(e)}>
      <style jsx>{`
        .draggable-item {
          height: 30px;
          width: 80px;
          background-color: var(--main-blue);
          border: solid 1px white;
          position: relative;
          left: ${position.x}px;
          top: ${position.y}px;
          z-index: 100;
        }
      `}</style>
    </div>
  )
}