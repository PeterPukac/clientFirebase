import { motion } from 'framer-motion'
import firebaseRelates from '../firebase'
import { useState} from 'react'

const Navbar = () => {
  const auth = firebaseRelates.auth
  const [isLoggedIn, setIsLoggedIn] = useState()

  const handleLogout = (e) => {
      e.preventDefault()
      auth.signOut().then(() => {
      })
  }

  const checkUserState = () =>{
    auth.onAuthStateChanged(user =>{
      if(user){
        setIsLoggedIn(true)
      }else{
        setIsLoggedIn(false)
      }
    })
  }
  checkUserState()

  return (
    <div className="nav">
      <div className="container-fluid">
        <div className="row bg-danger">
          <div className="col-6 col-md-6 col-lg-1">
            <a className="navLink" href="/">Domov</a>
          </div>
            <div className="col-6 col-md-6 col-lg-2">
            {isLoggedIn ? 
              <a className="navLink"  onClick={handleLogout}>Odhlásiť sa</a>
              :
              <a className="navLink" href="/login">Prihlásiť sa</a>}
            </div>
        </div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          <div className="row">
            <div className="col-12 col-md-12 col-lg-12">
              <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
                <div className="col-md-5 p-lg-5 mx-auto my-5">
                  <h1 className="display-5 fw-normal">Správca hesiel a loginov</h1>
                  <p className=" fw-normal">Táto aplikácia Vám poskytuje prehľad o všetkých prihlasovacích údajoch v našej firme</p>
                  <a className="btn btn-outline-secondary" href="/addAccount">Pridať login</a>
                </div>
                <div className="product-device shadow-sm d-none d-md-block"></div>
                <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Navbar;