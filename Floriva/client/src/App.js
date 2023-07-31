import React from 'react'
import { useState, useEffect } from "react";
import Home from "./Home"
import Aboutus from "./Aboutus";
import Tips from "./Tips"
import Loginsignup from "./Loginsignup"
import Plant from "./Plant"
import TermsandCond from "./TermsandCond"
import CancellationandRefund from "./CancellationandRefund"
import Blog from "./Blog"
import axios from 'axios';
import User from "./User"

import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Navbar } from './containers';
import { Copright, Footer } from './sections';



import {useSelector , useDispatch} from 'react-redux'
import { authAction } from './store/auth'

function App() {

  const dispatch = useDispatch();
  const [username, serUsername]  = useState("")

  useEffect(() => {
    async function getExitUser() {
      try {
        const response = await axios.get('/check', {
          headers: {
            'Content-Type': 'application/json',
          },
        });

        const data = response.data;
        if(data.user !== ""){
        
          var email= data.user.user.email;
          var id= data.user.user._id;
          var name= data.user.user.name;
          console.log(name);
          dispatch(authAction.loginuser({ name: name,email:email, id: id }))
        }

      } catch (error) {
        console.error('Error while fetching:', error);
      }
    }

    getExitUser();
  }, []); 
  // useEffect(() => {
  //   async function  getexituser  (){
      
  //     const response = await fetch("http://localhost:5500/", {
  //     method: "GET",
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
      
  //   });
    
  //   const data = await response.json();
  //   console.log(data);
  //   }
  //   getexituser();
  // }, []);


  return (
    <>
      <BrowserRouter>
        <div className='fullpage'>

          <div className='topofthepage'>

            <Navbar />
          </div>
          <div className='middleofthepage'>

            <Routes>
              <Route path='' element={<Home></Home>} />
              <Route path='/aboutus' element={<Aboutus></Aboutus>} />
              <Route path='/tips' element={<Tips></Tips>} />
              <Route path='/Blog' element={<Blog></Blog>} />
              <Route path='/Loginsignup' element={<Loginsignup></Loginsignup>} />
              <Route path='/Plant' element={<Plant></Plant>} />
              <Route path='/TermsandCond' element={<TermsandCond></TermsandCond>} />
              <Route path='/CancellationandRefund' element={<CancellationandRefund></CancellationandRefund>} />
              <Route path='/User' element={<User></User>} />
            </Routes>
          </div>

          <div className='buttomofthepage'>

            <Footer />
            <Copright />
          </div>
        </div>
      </BrowserRouter>
    </>

  )
}

export default App;