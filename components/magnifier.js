export default props => {
  const sizeMagnifierDesktop = props.sizeDesktop
  const sizeMagnifierMobile = props.sizeMobile

  return (
    <div className='magnifier'>
      <style jsx>{`
        .magnifier {
          margin: -${sizeMagnifierDesktop / 2}px;
          height: ${sizeMagnifierDesktop}px;
          width: ${sizeMagnifierDesktop}px;
          padding: 50px;
          border: solid 5px pink;
          border-radius: 50%;
          z-index: 10;
          position: absolute;
          left: ${props.position.x}%;
          bottom: ${props.position.y}%;
          cursor: none;
        }
        @media (max-width: 600px) {
          .magnifier {
            margin: -${sizeMagnifierMobile / 2}px;
            height: ${sizeMagnifierMobile}px;
            width: ${sizeMagnifierMobile}px;
          }
        }
      `}</style>
    </div>
  )
}