import React from 'react'

const DefaultLayout = (props) => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-8 offset-md-2 col-xs-12">
            {props.children}
          </div>
        </div>
      </div>
    </>
  )
}

export default DefaultLayout