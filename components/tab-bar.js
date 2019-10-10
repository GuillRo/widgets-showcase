import Link from 'next/link'
import { useState } from 'react'
import dynamic from 'next/dynamic'

const TabBar = ({ links }) => {

  const [activeTab, setActiveTab] = useState(sessionStorage.getItem('activetab') || links[0].title)

  const setActive = (title) => {
    sessionStorage.setItem('activetab', title)
    setActiveTab(title)
  }

  const tabs = links.map((link, index) =>
    <Link
      key={index} href={link.href}>
      <a
        className={link.title === activeTab ? "active" : ""}
        onClick={e => setActive(link.title)}>
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

export default dynamic(() => Promise.resolve(TabBar), {
  ssr: false
})