import React from 'react'
import TabBar from '../tab-bar'

const ShowcaseLayout = (props) => (
  <>
    <div className="container d-flex flex-grow-1 flex-column">
      <div className="row justify-content-center mt-sm-5">
        <div className="col col-lg-8 p-0 m-0">
          <TabBar />
        </div>
      </div>
      <div className="row flex-row justify-content-center full-height">
        <div className="display-box col-lg-8 p-0 m-0 mb-sm-11">
          {props.children}
        </div>
      </div>
    </div>
    <style jsx>{`
    .display-box {
      border: solid 2px var(--main-blue);
    }
    @media (max-width: 575px) {
      .display-box {
        border: none;
      }
    }
    `}</style>
  </>
)

export default ShowcaseLayout