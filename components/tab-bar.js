import Link from 'next/link'
import { useGlobal } from 'reactn'

const TabBar = () => {

  const [activetab, setActivetab] = useGlobal('activetab')
  const [pages] = useGlobal('pages')

  const tabs = pages.map((link, index) =>
    <Link
      key={index} href={link.href}>
      <a
        className={link.href === activetab ? "active" : ""}>
        {link.title}
      </a>
    </Link>)

  return (
    <div className="tab-bar">
      <div className="tab-bar-desktop">
        {tabs}
      </div>
      <div className="tab-bar-mobile">
        {tabs}
      </div>
      <style jsx>{`
        .tab-bar {
          box-sizing: border-box;
        }
        .tab-bar :global(a) {
          text-decoration: none;
          color: white;
          background-color: var(--main-blue);
          padding: 5px 10px;
          font-size: 18px;
        }
        .tab-bar :global(.tab-bar-desktop) {
          margin-top: 15px;
          padding: 0 20px;
        }
        .tab-bar :global(.tab-bar-desktop > .active) {
          background-color: white;
          color: var(--main-blue);
          border-top: solid 2px var(--main-blue);
          border-left: solid 2px var(--main-blue);
          border-right: solid 2px var(--main-blue);
          z-index: 1;
          position: relative;
          font-size: 20px;
          padding-bottom: 6px;
        }
        .tab-bar :global(.tab-bar-mobile) {
          background-color: var(--main-blue);
          margin: 0;
          padding: 0;
          color: white;
          display: flex;
          justify-content: space-around;
        }
        .tab-bar :global(.tab-bar-mobile > .active) {
          background-color: white;
          color: var(--main-blue);
          border-top: solid 3px var(--main-blue);
          border-left: solid 3px var(--main-blue);
          border-right: solid 3px var(--main-blue);
          z-index: 10;
          position: relative;
          font-size: 20px;
          top: -10px;
          margin-bottom: -10px;
        }
        .tab-bar :global(a:focus) {
          outline: none;
          text-decoration: underline;
        }
        @media (max-width:575px) {
          .tab-bar :global(.tab-bar-desktop) {
            display: none;
          }
        }
        @media (min-width:576px) {
          .tab-bar :global(.tab-bar-mobile) {
            display: none;
          }
        }
      `}</style>
    </div>
  )
}

export default TabBar