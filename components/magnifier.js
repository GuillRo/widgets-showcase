import { useState, useRef } from "react"
import _ from 'lodash'

export default props => {

  const sizeMagnifierDesktop = props.sizeDesktop
  const sizeMagnifierMobile = props.sizeMobile

  const [position, setPosition] = useState({ x: 50, y: 50 })
  const imageContainer = useRef(null)
  const imageRef = useRef(null)

  const getPosPercentile = (posX, posY) => {
    const { left, right, top, bottom } = imageContainer.current.getBoundingClientRect()
    return {
      x: _.clamp(((posX - left) / (right - left)) * 100, 0, 100),
      y: _.clamp(((posY - bottom) / (top - bottom)) * 100, 0, 100)
    }
  }

  const handleMouseMove = event => {
    setPosition(getPosPercentile(event.pageX, event.pageY))
  }

  const handleTouchMove = event => {
    setPosition(getPosPercentile(event.touches[0].clientX, event.touches[0].clientY))
  }

  return (

    <div className="image-container unselectable" onTouchMove={e => handleTouchMove(e)} onMouseMove={e => handleMouseMove(e)} ref={imageContainer}>
      <img draggable="false" className="image unselectable" src={props.imgSrc} ref={imageRef} />
      <div className='magnifier' />
      <style jsx>{`
        .magnifier {
          margin: -${sizeMagnifierDesktop / 2}px;
          height: ${sizeMagnifierDesktop}px;
          width: ${sizeMagnifierDesktop}px;
          border: solid 5px pink;
          border-radius: 50%;
          z-index: 10;
          position: absolute;
          left: ${position.x}%;
          bottom: ${position.y}%;
          cursor: none;
          background-image: url(${props.imgSrc});
          background-repeat: no-repeat;
          background-position: left ${position.x}% bottom ${position.y}%;
          background-origin: content-box;
          padding: 70px;
        }
        .image-container {
          border: solid 3px var(--main-blue);
          position: relative;
        }
        .image {
          filter: invert(75%);
        }
        @media (max-width: 600px) {
          .image {
            height: 300px;
            width: 300px;
          }
          .magnifier {
            margin: -${sizeMagnifierMobile / 2}px;
            height: ${sizeMagnifierMobile}px;
            width: ${sizeMagnifierMobile}px;
            padding: 35px;
            background-size: 300px;
          }
        }
      `}</style>
    </div>
  )
}