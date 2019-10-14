import ShowcaseLayout from "../../components/layouts/showcase"
import Slider from '../../components/slider'

const SoundBar = () => {
  return (
    <div className="container flex-column">
      <div className="row justify-content-center flex-row">
        <div className="col-8 d-flex align-items-center">
          <Slider />
        </div>
      </div>

      <style jsx>{`
        .page-container {
          align-items: center;
        }
      `}</style>
    </div>
  )
}

SoundBar.Layout = ShowcaseLayout

export default SoundBar