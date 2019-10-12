import Head from '../head'
import Nav from '../nav'

const MainLayout = (props) => {
  return (
    <>
      <Head title="Widgets Showcase" />
      <Nav />
      {props.children}
      <style jsx global>{`
        body {
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
          Helvetica, sans-serif;
          --main-blue: #459efd;
        }
      `}</style>
    </>
  )
}

export default MainLayout