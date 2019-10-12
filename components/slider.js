import { useState } from 'react'

const Slider = (props) => {

  const settings = {
    colorDown: "pink",
    colorUp: "var(--main-blue)",
    radius: "15px",
    value: "50"
  }

  return (

    <div className="slider">
      <div className="slider-bar-down">
        <div className="slider-bar-up">
          <div className="slider-circle"></div>
        </div>
      </div>

      <style jsx>{`
        .slider {
          width: 25vw;
          height: 50px;
          display: flex;
          align-items: center;
        }
        .slider-bar-down {
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
        .slider-circle {
          height: 30px;
          width: 30px;
          position: relative;
          left: 15px;
          border-radius: 50%;
          background-color: var(--main-blue);
        }
      `}</style>
    </div>
  )
}

export default Slider