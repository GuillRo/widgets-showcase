import React from 'react'
import Head from '../head'
import Nav from '../nav'
import TabBar from '../tab-bar'

const widgets = [
  { title: "SoundBar", href: "/slider" },
  { title: "Drag&Drop", href: "/dragndrop" },
  { title: "MagnifyingGlass", href: "/glass" }
]

const ShowcaseLayout = (props) => (
  <div>
    <Head title="Widgets Showcase" />
    <Nav />
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