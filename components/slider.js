import { useState, useEffect, useRef } from 'react'

const Slider = (props) => {

  const [sliderValue, setSliderValue] = useState(50)
  const [clicked, setClicked] = useState(false)
  const sliderContainer = useRef(null)

  const settings = {
    colorDown: "pink",
    colorUp: "var(--main-blue)",
    radius: "5px",
    value: sliderValue
  }

  const getPosPercentile = posX => {
    const { left, right } = sliderContainer.current.getBoundingClientRect()
    return ((posX - left) / (right - left)) * 100
  }

  const setValue = absX => {
    let posX = getPosPercentile(absX)
    if (posX < 0) { posX = 0 }
    else if (posX > 100) { posX = 100 }
    setSliderValue(Math.round(posX))
  }

  const handleMouseDown = () => {
    setClicked(true)
  }

  const handleMouseMove = event => {
    if (clicked) {
      setValue(event.pageX)
    }
  }

  const handleMouseUp = () => {
    setClicked(false)
  }

  const handleKeyPress = event => {
    const key = event.keyCode
    if (key === 37 && sliderValue > 10) {
      setSliderValue(sliderValue - 10)
    } else if (key === 37 && sliderValue <= 10) {
      setSliderValue(0)
    } else if (key === 39 && sliderValue < 90) {
      setSliderValue(sliderValue + 10)
    } else if (key === 39 && sliderValue >= 90) {
      setSliderValue(100)
    }
  }

  const handleTouchMove = event => {
    setValue(event.touches[0].clientX)
  }

  useEffect(() => {
    props.function(sliderValue / 100)
  })

  return (

    <div className="slider" onTouchMove={e => handleTouchMove(e)} onMouseMove={e => handleMouseMove(e)} onMouseLeave={handleMouseUp}>
      <div className="slider-bar-down" ref={sliderContainer} onClick={e => setValue(e.pageX)}>
        <div className="slider-bar-up">
          <button className="button-circle" onKeyDown={e => handleKeyPress(e)} onMouseUp={handleMouseUp} onMouseDown={handleMouseDown}>{sliderValue}</button>
        </div>
      </div>

      <style jsx>{`
        .slider {
          width: 100%;
          height: 50px;
          display: flex;
          align-items: center;
        }
        .slider-bar-down {
          cursor: pointer;
          height: 20%;
          width: 100%;
          border-radius: ${settings.radius};
          background-color: ${settings.colorDown};
        }
        .slider-bar-up {
          width: ${settings.value + "%"};
          height: 100%;
          border-radius: ${settings.radius};
          background-color: ${settings.colorUp};
          display: flex;
          align-items: center;
          justify-content: flex-end;
        }
        .button-circle {
          height: 30px;
          min-height: 30px;
          width: 30px;
          min-width: 30px;
          position: relative;
          left: 15px;
          border-radius: 50%;
          background-color: var(--main-blue);
          border: none;
          color: white;
          text-align: center;
          font-size: 14px;
          font-weight: bold;
          display: inline-flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .button-circle:focus{
          border: solid 3px white;
          outline: none;
        }
      `}</style>
    </div>
  )
}

export default Slider