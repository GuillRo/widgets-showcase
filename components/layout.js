const Layout = (props) => {
  return(
    <>
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

export default Layout