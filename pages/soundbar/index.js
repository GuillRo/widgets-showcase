import ShowcaseLayout from "../../components/layouts/showcase"
import Slider from '../../components/slider'

const SoundBar = () => {
  return (
    <div className="SoundBars-page">
      <Slider />
      <style jsx>{`
        .SoundBars-page {
          display: flex;
        }
      `}</style>
    </div>

  )
}

SoundBar.Layout = ShowcaseLayout

export default SoundBar