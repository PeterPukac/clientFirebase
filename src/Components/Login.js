import {signInWithEmailAndPassword,} from 'firebase/auth'
import firebaseRelates from '../firebase'
import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const Login = () => {
  const auth = firebaseRelates.auth
  const [login, setLogin] = useState(' ')
  const [signInPassword, setSignInPassword] = useState(' ')
  const {list} = useParams()
  const {group} = useParams()
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault()
    //createUserWithEmailAndPassword(auth,login,signInPassword)
    signInWithEmailAndPassword(auth,login,signInPassword)
    e.target.reset()
    auth.onAuthStateChanged(user => {
      if (user) {
        if(!group){
          navigate('/')
        }else{
          navigate(`/${list}/${group}`)
        }
      }
    })
  }

    return (
        <div className="container loginWrap">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-4 col-lg-4"></div>
            <div className="col-12 col-sm-12 col-md-4 col-lg-4">
              <main className="form-signin" onSubmit={handleSubmit}>
                <form >
                  <div className="form-floating">
                    <input required  type="text" autoComplete="on" className="form-control" onChange={(e) => setLogin(e.target.value)}/>
                    <label>Email</label>
                  </div>
                  <div className="form-floating">
                    <input required type="password" autoComplete="on" className="form-control" onChange={(e) => setSignInPassword(e.target.value)} />
                    <label>Heslo</label>
                  </div>
                  <button className="w-100 btn btn-lg btn-danger" type="submit">Prihlásiť sa</button>
                </form>
              </main>
            </div>
            <div className="col-12 col-sm-12 col-md-4 col-lg-4"></div>
          </div>
        </div>
    );
}

export default Login;