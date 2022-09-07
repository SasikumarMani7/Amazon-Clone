import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './Login.css'
import { auth} from '../../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email, password).then((_)=>{
      navigate("/")
    }).catch((err)=>console.log(err))

  }

  const register = (event) =>{
      event.preventDefault();
      createUserWithEmailAndPassword(auth,email,password).then((authUser)=>{
        console.log(authUser);
        alert('User account created')
      }).catch((err)=>console.log(err))
  }

  return (
    <div className='login'>
      <Link to='/'>
      <img className='login__logo' src='https://privatejobvacancy.in/wp-content/uploads/2022/05/Amazon-Jobs.png' alt='logo' />
      </Link>
      <div className='login__container'>
        <h1>Sign in</h1>
        <form>
          <h5>E-mail</h5>
          <input type='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
          <h5>Password</h5>
          <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
          <button type='submit' className='login__signInButton' onClick={login}>Sign In</button>
        </form>
        <p>
        By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
        </p>
        <button type='submit' className='login__registionButton' onClick={register}>
          Create your Amazon Account
        </button>
      </div>
    </div>
  )
}

export default Login;
