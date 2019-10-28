import Slider from './slider'
import { useRef } from 'react'

export default props => {
  const video = useRef(null)

  const handleVolume = (volume) => {
    video.current.volume = volume
  }

  return (
    <>
      <div className="video-container mb-7">
        <video className="video" autoPlay loop ref={video}>
          <source src="https://res.cloudinary.com/guilro/video/upload/v1572009840/20180402_201512.mp4" />
        </video>
      </div>
      <Slider function={volume => handleVolume(volume)} />
      <style jsx>{`
        .video {
          height: 350px;
          width: 350px;
          object-fit: cover;
          border: solid 3px var(--main-blue);
        }
      `}</style>
    </>
  )
}