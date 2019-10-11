import React from 'react'
import Link from 'next/link'
import { withRouter } from 'next/router'

const Nav = ({ router }) => (
  <nav>
    {router.pathname === '/about' ? <Link href="/"><a className="btn-widgets">Widgets</a></Link> : <Link href="/about"><a>About</a></Link> }

    <style jsx>{`
      nav {
        text-align: right;
        padding: 10px 25px;
      }
      a {
        color: var(--main-blue);
        text-decoration: none;
        font-size: 24px;
        padding: 5px;
      }
      .btn-widgets{
        border: dashed 1px var(--main-blue);
      }
    `}</style>
  </nav>
)

export default withRouter(Nav)
