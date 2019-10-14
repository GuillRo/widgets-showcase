import ShowcaseLayout from "../../components/layouts/showcase"
import Slider from '../../components/slider'

const SoundBar = () => {
  return (
    <div className="main-display container-fluid">
      <div className="row">
        <div className="col col-md-8 offset-md-2 col-xs-12">
          <Slider />
        </div>
      </div>
      <style jsx>{`
      `}</style>
    </div>

  )
}

SoundBar.Layout = ShowcaseLayout

export default SoundBar