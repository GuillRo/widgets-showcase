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
        <div className="border border-primary col-lg-8 p-0 m-0 mb-sm-11">
          {props.children}
        </div>
      </div>
    </div>
  </>
)

export default ShowcaseLayout