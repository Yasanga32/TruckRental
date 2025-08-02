import React, { useState } from 'react'
import Navbar from './components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import MyBookings from './pages/MyBookings';
import TruckDetails from './pages/TruckDetails';
import Trucks from './pages/Trucks';


function App() {

  const [ShowLogin,setShowLogin] = useState(false);
  const isOwnerPath = useLocation().pathname.startsWith('/owner');


  return (
    <>
      {!isOwnerPath && <Navbar setShowLogin={setShowLogin}/>}

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/truck-details/:id' element={<TruckDetails/>}/>
        <Route path='/cars' element={<Trucks/>}/>
        <Route path='/my-bookings' element={<MyBookings/>}/>
      </Routes>
    </>
  )
}

export default App