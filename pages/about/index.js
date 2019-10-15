const AboutIndex = () => {

  return (

    <>
      <div className="text-primary p-1 text-center">
        <h1>About this</h1>
        <p>Just a small project I made to improve my widget coding skills</p>
        <p>Made with <img src="https://img.icons8.com/officel/16/000000/filled-like.png" /> and <a href="https://nextjs.org/">Next.js</a></p>
        <a href="https://github.com/GuillRo/widgets-showcase"><img src="https://img.icons8.com/ios/50/000000/github.png" /></a>
      </div>
      
      <style jsx>{`
        a {
          color: black;
          text-decoration: none;
          font-weight: bold;
        }
        h1 {
          margin-top: 45px;
          margin-bottom: 15px;
        }
        p {
          line-height: 1.5;
          font-size: 18px;
          margin-bottom: 15px;
        }
      `}</style>
    </>
  )
}

export default AboutIndex