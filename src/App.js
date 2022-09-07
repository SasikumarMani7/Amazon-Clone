import React, {useEffect} from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Checkout from './Pages/checkout/Checkout';
import Home from './Pages/Home/Home';
import Login from './Pages/login/Login';
import {useStateValue} from './stateProvider/StateProvider'
import {auth} from './firebase';


function App() {

  const [{basket},dispatch] = useStateValue();

  useEffect(()=>{
    const unsubscribe = auth.onAuthStateChanged((authUser)=>{
      if (authUser){
          dispatch({
            type:"SET_USER",
            user:authUser
          })
      }
      else {
        dispatch({
          type:"SET_USER",
          user:null
        })
      }
    });
    return() =>{
      unsubscribe();
    }
  },[dispatch]);

  return (
    
      <BrowserRouter>
      <Routes>
        <Route exact path='/checkout' element={(<Checkout />)} />
        <Route exact path='/login' element={(<Login />)} />
        <Route exact path='/' element={(<Home />)}>
        </Route>
      </Routes>
      </BrowserRouter>
      
  );
}

export default App;
