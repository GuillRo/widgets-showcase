import ShowcaseLayout from "../../components/layouts/showcase"
import { useGlobal } from 'reactn'
import { useRouter } from 'next/router'

const Glass = () => {

  const [activetab, setActivetab] = useGlobal('activetab')
  if (useRouter().pathname !== activetab) {
    setActivetab(useRouter().pathname)
  }

  return (
    <h1>Glass</h1>
  )
}

Glass.Layout = ShowcaseLayout

export default Glass