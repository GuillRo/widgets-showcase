import Link from 'next/link'
import { useState, useEffect } from 'react'

const TabBar = ({ links }) => {

  const [activeTab, setActiveTab] = useState()

  useEffect(() => {
    if (typeof sessionStorage === 'undefined' || sessionStorage.getItem('activetab') === null){
      sessionStorage.setItem('activetab', links[0].title)
      setActiveTab(links[0].title)
    }
    else {
      setActiveTab(sessionStorage.getItem('activetab'))
    }
  }, [])

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
          background-color: #459efd;
          padding: 5px;
        }

        .tab-bar :global(.active) {
          background-color: white;
          color: #459efd;
          border-top: solid 1px #459efd;
          border-left: solid 1px #459efd;
          border-right: solid 1px #459efd;
          z-index: 1;
          position: relative;
        }
      `}</style>
    </div>
  )
}

export default TabBar