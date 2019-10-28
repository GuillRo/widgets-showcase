import React, { setGlobal } from 'reactn';
import App from 'next/app'
import DefaultLayout from '../components/layouts/default'
import MainLayout from '../components/layouts/main'
import { withRouter } from 'next/router'

const pages = [
  { title: "VolumeSlider", href: "/sliders" },
  { title: "InvertGlass", href: "/glass" },
  { title: "Drag&Drop", href: "/dragndrop" }
]

class MyApp extends App {
  constructor(props) {
    super(props)
    this.state = {
      pages,
      activetab: this.props.router.pathname === "/" ? pages[0].href : this.props.router.pathname,
    }
    setGlobal(this.state)
  }

  render() {

    const { Component, pageProps } = this.props
    const Layout = Component.Layout || DefaultLayout

    return (
      <MainLayout>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MainLayout>
    )
  }
}

export default withRouter(MyApp)