import Link from 'next/link'
import { useGlobal } from 'reactn'

const TabBar = ({ links }) => {

  const [activetab, setActivetab] = useGlobal('activetab')

  const tabs = links.map((link, index) =>
    <Link
      key={index} href={link.href}>
      <a
        className={link.href === activetab ? "active" : ""}
        onClick={e => setActivetab(link.href)}>
        {link.title}
      </a>
    </Link>)

  return (
    <div className="tab-bar">
      {tabs}
      <style jsx>{`
        .tab-bar :global(a) {
          text-decoration: none;
          color: white;
          background-color: var(--main-blue);
          padding: 5px;
        }
        .tab-bar :global(.active) {
          background-color: white;
          color: #459efd;
          border-top: solid 1px var(--main-blue);
          border-left: solid 1px var(--main-blue);
          border-right: solid 1px var(--main-blue);
          z-index: 1;
          position: relative;
        }
      `}</style>
    </div>
  )
}

export default TabBar