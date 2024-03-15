import './App.css'
import Banner from './component/Banner/Banner'
import Navbar from './component/Navbar/Navbar'
import OurRecipes from './component/Our Recipes/OurRecipes'

function App() {

  return (
    <div className='md:max-w-7xl md:mx-auto'>
      <div className='mx-6 mt-5'>
        <Navbar></Navbar>
        <Banner></Banner>
        <OurRecipes></OurRecipes>
      </div>
    </div>
  )
}

export default App
