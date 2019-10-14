import React from 'react'
import TabBar from '../tab-bar'

const widgets = [
  { title: "SoundBar", href: "/soundbar" },
  { title: "Drag&Drop", href: "/dragndrop" },
  { title: "MagnifyingGlass", href: "/glass" }
]

const ShowcaseLayout = (props) => (
  <>
    <div className="container d-flex flex-grow-1 flex-column">
      <div className="row justify-content-center">
        <div className="col col-lg-8 p-0 m-0">
          <TabBar links={widgets} />
        </div>
      </div>
      <div className="row flex-row justify-content-center full-height">
        <div className="box-border-blue col-lg-8 p-0 m-0 mb-lg-5">
          {props.children}
        </div>
      </div>
    </div>

    <style jsx>{`
      .box-border-blue{
        border: solid 1px var(--main-blue);
      }
    `}</style>
  </>
)

export default ShowcaseLayout