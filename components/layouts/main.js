import Head from '../head'
import Nav from '../nav'
import { useRouter } from "next/router"

const MainLayout = (props) => {
  return (
    <>
      <Head title={useRouter().pathname === "/about" ? "About | Widgets Showcase" : "Widgets Showcase"} />
      <Nav />
      {props.children}

      <style jsx global>{`
        body {
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
          Helvetica, sans-serif;
          --main-blue: #459efd;
          display: flex;
          flex-direction: column;
          min-height: 100vh;
        }
        #__next {
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }
        .full-height {
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }
      `}</style>
    </>
  )
}

export default MainLayout