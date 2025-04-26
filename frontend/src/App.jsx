import React from 'react'
import Home from './pages/Home'
import { BookingProvider } from './context/BookingContext'

const App = () => {
  return (
   <>
    <BookingProvider>
    <Home/>
    </BookingProvider>
   </>
    
  )
}

export default App