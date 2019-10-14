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
      <div className="tab-bar-desktop">
        {tabs}
      </div>
      <div className="tab-bar-mobile">
        {tabs}
        {/* <p>ui</p>
        <i className="la la-bars" /> */}
      </div>
      <style jsx>{`
        .tab-bar {
          box-sizing: border-box;
        }
        .tab-bar :global(a) {
          text-decoration: none;
          color: white;
          background-color: var(--main-blue);
          padding: 5px;
  word-wrap: break-word;
        }
        .tab-bar :global(.tab-bar-desktop) {
          margin-top: 15px;
          padding: 0 20px;
        }
        .tab-bar :global(.tab-bar-mobile) {
          /* background-color: var(--main-blue); */
          margin: 0;
          padding: 0;
          /* min-height: 50px; */
          color: white;
          display: flex;
          align-items: flex-end;
        }
        .tab-bar :global(a:focus) {
          outline: none;
          font-weight: bold;
        }
        .tab-bar :global(.active) {
          background-color: white;
          color: var(--main-blue);
          border-top: solid 1px var(--main-blue);
          border-left: solid 1px var(--main-blue);
          border-right: solid 1px var(--main-blue);
          z-index: 1;
          position: relative;
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