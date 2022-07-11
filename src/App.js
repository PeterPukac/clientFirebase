import React from 'react'
import AddAcount from './Components/AddAcount'
import './App.css'
import { Routes, Route } from "react-router-dom"
import DataLoader from './Components/DataLoader'
import Navbar from './Components/Navbar'
import Login from './Components/Login'
import Main from './Main'
import Footer from './Components/Footer'
import firebaseRelates from './firebase'
import { collection } from 'firebase/firestore'
import { useState } from 'react'

function App() {
  const db = firebaseRelates.db
  const auth = firebaseRelates.auth
  const storage = firebaseRelates.storage
  const acounts = collection(db, 'acounts')
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const checkUserState = () => {
    auth.onAuthStateChanged(user => {
      if (user) {
        setIsLoggedIn(true)
      } else {
        setIsLoggedIn(false)
      }
    })
  }

  checkUserState()

  return (
    <div className="App">
      <Navbar checkUserState={checkUserState} />
      <Routes>
        <Route path="/list/:group" element={<DataLoader acounts={acounts} db={db} isLoggedIn={isLoggedIn} storage={storage} />} />
        <Route path="/" element={<Main/>} />
        <Route path="/addAccount" element={<AddAcount acounts={acounts} />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/login/:list/:group" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
