import React from 'react'
import Link from 'next/link'
import { withRouter } from 'next/router'

const Nav = ({ router }) => (
  <nav>
      {router.pathname === '/' ? <Link href="/about"><a>About</a></Link> : <Link href="/"><a>Back to Widgets!</a></Link> }


    <style jsx>{`
      :global(body) {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
          Helvetica, sans-serif;
      }
      nav {
        text-align: right;
        padding: 10px 25px;
      }

      a {
        color: #459efd;
        text-decoration: none;
        font-size: 24px;
      }
    `}</style>
  </nav>
)

export default withRouter(Nav)
