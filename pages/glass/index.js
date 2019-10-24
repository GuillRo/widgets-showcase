import { useState, useRef } from "react"
import { useGlobal } from 'reactn'
import { useRouter } from 'next/router'

import _ from 'lodash'

import ShowcaseLayout from "../../components/layouts/showcase"
import Magnifier from '../../components/magnifier'

const Glass = () => {

  const [activetab, setActivetab] = useGlobal('activetab')
  const [position, setPosition] = useState({x: 50, y: 50})
  const imageContainer = useRef(null)

  if (useRouter().pathname !== activetab) {
    setActivetab(useRouter().pathname)
  }

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
    <div className="w-100 h-100 d-flex justify-content-center align-items-center">
      <div className="image-container unselectable" onMouseMove={e => moveMagnifier(e)} ref={imageContainer}>
        <img draggable="false" className="image unselectable" src="https://picsum.photos/500" />
        <Magnifier position={position} sizeDesktop={150} sizeMobile={80}/>
      </div>
      <style jsx>{`
      .image-container {
        border: solid 2px var(--main-blue);
        position: relative;
      }
      .image{
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
      }
    `}</style>
    </div>
  )
}

Glass.Layout = ShowcaseLayout

export default Glass