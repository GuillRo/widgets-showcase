import React from 'react'
import Head from '../components/head'
import Nav from '../components/nav'
import TabBar from '../components/tab-bar'

const widgets = [
  { title: "SoundBar", href: "/" },
  { title: "Drag&Drop", href: "/" },
  { title: "Magnifying box", href: "/" }
]

const Home = () => (
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
          <button type="button" className="btn btn-primary"> WHaaaat?</button>
        </div>
      </div>
    </div>

    <style jsx>{`
      .mainbox{
        border: solid 1px #459efd;
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 75vh;
      }
    `}</style>
  </div>
)

export default Home
