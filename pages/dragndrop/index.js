import ShowcaseLayout from "../../components/layouts/showcase"
import { useGlobal } from 'reactn'
import { useRouter } from 'next/router'

const DragNDropIndex = () => {

  const [activetab, setActivetab] = useGlobal('activetab')
  if (useRouter().pathname !== activetab) {
    setActivetab(useRouter().pathname)
  }

  return (
    <div className="d-flex justify-content-center align-items-center h-100 w-100">
      <button className="btn btn-danger text-white">Work in progress</button>
    </div>

  )
}

DragNDropIndex.Layout = ShowcaseLayout

export default DragNDropIndex