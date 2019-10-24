import { useGlobal } from 'reactn'
import { useRouter } from 'next/router'

import ShowcaseLayout from "../../components/layouts/showcase"
import Magnifier from '../../components/magnifier'

const Glass = () => {

  const [activetab, setActivetab] = useGlobal('activetab')

  if (useRouter().pathname !== activetab) {
    setActivetab(useRouter().pathname)
  }

  return (
    <div className="w-100 h-100 d-flex justify-content-center align-items-center">
        <Magnifier imgSrc="https://picsum.photos/500" sizeDesktop={150} sizeMobile={80}/>
    </div>
  )
}

Glass.Layout = ShowcaseLayout

export default Glass