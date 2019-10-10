import Head from '../../components/head'
import Nav from '../../components/nav'
import Link from 'next/link'

const AboutIndex = () => {
  return (
    <>
      <Head title="About | Widgets Showcase" />
      <Nav />
      <div className="container">
        <div className="row">
          <div className="main col-8 offset-2">
            <h1>About this</h1>
            <p>Just a small project I made to improve my widget coding skills</p>
            <p>Made with <img src="https://img.icons8.com/officel/16/000000/filled-like.png" /> and <Link href="https://nextjs.org/"><a>Next.js</a></Link></p>
            <Link href="https://github.com/GuillRo/widgets-showcase"><a><img src="https://img.icons8.com/ios/50/000000/github.png" /></a></Link>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .main {
          padding: 50px;
          color: var(--main-blue);
          text-align: center;
        }
        a {
          color: black;
          text-decoration: none;
          font-weight: bold;
        }
      `}</style>
    </>
  )
}

export default AboutIndex