import React from 'react'
import Link from 'next/link'
import { withRouter } from 'next/router'

const Nav = ({ router }) => (
  <nav>
      {router.pathname === '/' ? <Link href="/about"><a>About</a></Link> : <Link href="/"><a>Widgets</a></Link> }


    <style jsx>{`
      nav {
        text-align: right;
        padding: 10px 25px;
      }

      a {
        color: var(--main-blue);
        text-decoration: none;
        font-size: 24px;
      }
    `}</style>
  </nav>
)

export default withRouter(Nav)
