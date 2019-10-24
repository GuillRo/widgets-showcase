import ShowcaseLayout from "../../components/layouts/showcase"
import Slider from '../../components/slider'
import { useGlobal } from 'reactn'
import { useRouter } from 'next/router'

const SlidersIndex = () => {

  const [activetab, setActivetab] = useGlobal('activetab')
  if (useRouter().pathname !== activetab) {
    setActivetab(useRouter().pathname)
  }

  return (
    <div className="container h-100">
      <div className="row justify-content-center flex-row h-100">
        <div className="col-8 d-flex align-items-center">
          <Slider />
        </div>
      </div>
    </div>
  )
}

SlidersIndex.Layout = ShowcaseLayout

export default SlidersIndex