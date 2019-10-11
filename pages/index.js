import Router from 'next/router'
import dynamic from 'next/dynamic'

const Home = () => {
  const activetab = sessionStorage.getItem('activetab') || "/slider"
  Router.push(activetab)
  return null
}

export default Home

// export default dynamic(() => Promise.resolve(Home), {
//   ssr: false
// })
