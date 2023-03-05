import React from 'react'
import "./commen/css/bootstrap.css"
import "./commen/css/styles.css"
import Header from './commen/components/Header/Headr'
import MyRoute from './commen/MyRoute/MyRoute'
import Footer from './commen/components/Footer/Footer'


function App() {
  return (
    <div>
      <Header />
     <MyRoute/>
      <Footer />
    </div>
  )
}

export default App