import Link from 'next/link'
import { withRouter } from 'next/router'
import { useGlobal } from 'reactn'

const Nav = ({ router }) => {

  const [activetab] = useGlobal('activetab')

  return (

    <nav>
      {router.pathname === '/about' ? <Link href={activetab}><a className="btn-widgets">Widgets</a></Link> : <Link href="/about"><a>About</a></Link>}

      <style jsx>{`
      nav {
        text-align: right;
        padding: 10px 25px;
        margin-bottom: 25px;
      }
      a {
        color: var(--main-blue);
        text-decoration: none;
        font-size: 28px;
        padding: 5px;
        margin-right: 10px;
      }
      .btn-widgets{
        border: dashed 1px var(--main-blue);
      }
    `}</style>
    </nav>
  )
}

export default withRouter(Nav)
