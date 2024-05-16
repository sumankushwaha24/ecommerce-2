
import React from 'react'
import './App.css'
import { Navbar } from './components/Navbar/Navbar'
import Hero from './components/hero/Hero'
import  Products  from './components/Products/Products'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { TopProducts } from './components/TopProducts/TopProducts'
import  Banner  from './components/Banner/Banner'
import { Subcribe } from './components/Subcribe/Subcribe'
import { ViewAllProducts } from './components/ViewAllProducts/ViewAllProducts'
import { Testmonials } from './components/Testmonials/Testmonials'
import { Footer } from './components/Footer/Footer'
import { Popup } from './components/Popup/Popup'


function App() {
  const[orderPopup, setOrderPopup]=React.useState
  (false);
  const handleOrderPopup=() =>{
    setOrderPopup(!orderPopup)
  }

 React.useEffect(() =>{
  AOS.init({
    offset:100,
    duration:800,
    easing:'ease-in-sine',
    delay:100,
 })
 AOS.refresh();
 },[])
  return (
     <div >
     <Navbar handleOrderPopup={handleOrderPopup}/>
     <Hero/>
     <Products/>
     <TopProducts/>
     <Banner/>
     <Subcribe/>
     < ViewAllProducts/>
     <Testmonials/>
    < Footer/>
    <Popup orderPopup={orderPopup} 
    setOrderPopup={setOrderPopup}/>
    </div>
  )
}



export default App
