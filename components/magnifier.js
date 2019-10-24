import { useState, useRef } from "react"
import _ from 'lodash'

export default props => {

  const sizeMagnifierDesktop = props.sizeDesktop
  const sizeMagnifierMobile = props.sizeMobile

  const [position, setPosition] = useState({x: 50, y: 50})
  const imageContainer = useRef(null)
  const imageRef = useRef(null)

  const getPosPercentile = (posX, posY) => {
    const { left, right, top, bottom } = imageContainer.current.getBoundingClientRect()
    return {
      x: _.clamp(((posX - left) / (right - left)) * 100, 0, 100),
      y: _.clamp(((posY - bottom) / (top - bottom)) * 100, 0, 100)
    }
  }

  const moveMagnifier = event => {
    setPosition(getPosPercentile(event.pageX, event.pageY))
  }

  return (

    <div className="image-container unselectable" onMouseMove={e => moveMagnifier(e)} ref={imageContainer}>
      <img draggable="false" className="image unselectable" src={props.imgSrc} ref={imageRef}/>
      <div className='magnifier' />
      <style jsx>{`
        .magnifier {
          margin: -${sizeMagnifierDesktop / 2}px;
          height: ${sizeMagnifierDesktop}px;
          width: ${sizeMagnifierDesktop}px;
          padding: 50px;
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
          padding: 75px 75px 70px 70px;
        }
        .image-container {
          border: solid 2px var(--main-blue);
          position: relative;
        }
        .image {
          filter: invert(75%);
        }
        .unselectable {
          user-select: none;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          -moz-user-drag: none;
          -webkit-user-drag: none;
          -ms-user-select: none;
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
          }
        }
      `}</style>
    </div>
  )
}