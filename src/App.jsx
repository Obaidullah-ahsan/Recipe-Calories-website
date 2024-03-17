import { useState } from 'react'
import './App.css'
import Banner from './component/Banner/Banner'
import Navbar from './component/Navbar/Navbar'
import OurRecipes from './component/Our Recipes/OurRecipes'
import RecipeCards from './component/Recipe Cards/RecipeCards'
import Sidebar from './component/Sidebar/Sidebar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [wantToCook, setWantToCook] = useState([])
  const [preparing, setPreparing] = useState([])

  const handleWantToCook = (card, id) => {
    const isExist = wantToCook.find(cook => cook.recipe_id == id)
    if (!isExist) {
      const newcards = [...wantToCook, card]
      setWantToCook(newcards)
    }
    else {
      toast.error('Already exist')
    }
  }

  const handlepreparing = (id) => {
    const newWantToCook = wantToCook.filter(cook => cook.recipe_id !== id)
    setWantToCook(newWantToCook)
    const CurrentlyCooking = wantToCook.filter(CurrentlyCook => CurrentlyCook.recipe_id === id);
    const newCurrenlyCooking = [...preparing,CurrentlyCooking]
    setPreparing(newCurrenlyCooking)
  }

  return (
    <div className='md:max-w-7xl md:mx-auto'>
      <div className='mx-6 mt-5'>
        <Navbar></Navbar>
        <Banner></Banner>
        <OurRecipes></OurRecipes>
        <div className='flex gap-6'>
          <RecipeCards handleWantToCook={handleWantToCook}></RecipeCards>
          <Sidebar handlepreparing={handlepreparing} wantToCook={wantToCook} preparing={preparing}></Sidebar>
          <ToastContainer />
        </div>
      </div>
    </div>
  )
}
export default App
