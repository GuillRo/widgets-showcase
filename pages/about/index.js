const AboutIndex = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="main col-8 offset-2">
            <h1>About this</h1>
            <p>Just a small project I made to improve my widget coding skills<br/>
            Made with <img src="https://img.icons8.com/officel/16/000000/filled-like.png" /> and <a href="https://nextjs.org/">Next.js</a></p>
            <a href="https://github.com/GuillRo/widgets-showcase"><img src="https://img.icons8.com/ios/50/000000/github.png" /></a>
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
        h1 {
          margin-top: 45px;
        }
        p {
          margin-top: 25px;
          line-height: 35px;
          font-size: 18px;
        }
      `}</style>
    </>
  )
}

export default AboutIndex