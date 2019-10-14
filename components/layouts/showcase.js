import React from 'react'
import TabBar from '../tab-bar'

const widgets = [
  { title: "SoundBar", href: "/soundbar" },
  { title: "Drag&Drop", href: "/dragndrop" },
  { title: "MagnifyingGlass", href: "/glass" }
]

const ShowcaseLayout = (props) => (
  <>
    <div className="container">
      <div className="row">
        <div className="col col-md-8 offset-md-2 col-xs-12">
          <TabBar links={widgets} />
        </div>
      </div>
      <div className="row">
        <div className="mainbox col-md-8 offset-md-2 col-xs-12">
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
      .col {
        padding:0;
      }
    `}</style>
  </>
)

export default ShowcaseLayout