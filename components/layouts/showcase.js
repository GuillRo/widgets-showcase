import React from 'react'
import TabBar from '../tab-bar'

const widgets = [
  { title: "SoundBar", href: "/soundbar" },
  { title: "Drag&Drop", href: "/dragndrop" },
  { title: "MagnifyingGlass", href: "/glass" }
]

const ShowcaseLayout = (props) => (
  <div>
    <div className="container">
      <div className="row">
        <div className="col-8 offset-2">
          <TabBar links={widgets} />
        </div>
      </div>
      <div className="row">
        <div className="mainbox col-8 offset-2">
          {props.children}
        </div>
      </div>
    </div>

    <style jsx>{`
      .mainbox{
        border: solid 1px var(--main-blue);
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 75vh;
      }
    `}</style>
  </div>
)

export default ShowcaseLayout