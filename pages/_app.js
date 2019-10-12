import React, { setGlobal } from 'reactn';
import App from 'next/app'
import DefaultLayout from '../components/layouts/default'
import MainLayout from '../components/layouts/main'

setGlobal({
  activetab:"/soundbar"
})

class MyApp extends App {
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

export default MyApp