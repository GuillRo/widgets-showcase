import ShowcaseLayout from "../../components/layouts/showcase"
import { useGlobal } from 'reactn'
import { useRouter } from 'next/router'

const DragNDrop = () => {

  const [activetab, setActivetab] = useGlobal('activetab')
  if (useRouter().pathname !== activetab) {
    setActivetab(useRouter().pathname)
  }

  return (
    <button className="btn btn-info"> DragNDrop</button>
  )
}

DragNDrop.Layout = ShowcaseLayout

export default DragNDrop