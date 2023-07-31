import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {useSelector , useDispatch} from 'react-redux'
import { authAction } from './store/auth'


const Loginsignup = () => {



  const dispatch = useDispatch();
  const authname = useSelector(state => state.auth.name);

  const isUserLogin = useSelector(state => state.auth.isLogin)






  const [signnup, setSignup] = useState(false);
  const [input, setInput] = useState({
    name:"",
    email: "",
    password: "",
    conformPass: "",
  })
  const [error1, seterror] = useState({
    errorstatus:"",
    user: false,
  });
  const [loginuser, setLoginuser] = useState(false);

  function handlechange(event) {
    const value = event.target.value;
    setInput({
      ...input,
      [event.target.name]: value
    })
  }
  async function registeruser() {
    const response = await fetch("/register", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization, Access-Control-Allow-Headers',

      },withCredentials:true,

      body: JSON.stringify(input)
    });

    const data = await response.json();
  
    seterror({user:false, errorstatus: data.status});
    if(data.user){
      seterror({errorstatus:"", user: data.user});
      // dispatch(authAction.loginuser())
    }
    
  }


  async function handleLogin() {
    try {
      const response = await axios.post('login', input, {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      });

      const data = response.data;
      console.log(data);
      console.log("user is",data.session.user.email);
      var email= data.session.user.email;
      var name= data.session.user.name;
      console.log("user session id", name);
      var id = data.session.user._id;
      dispatch(authAction.loginuser({ name: name, email:email,id: id }))
      // console.log("user session ",data.session.user.email);
      // Handle the response data here, set the user state, etc.
    } catch (error) {
      console.error('Error during login:', error);
    }
  }

 
  function handlesignup(sighupbool) {
    setSignup(sighupbool);
    seterror({errorstatus: "", user:""})
  }


  return (

    <div className='loginpage'>
      <div className='loginbody'>
        
        <h1>Welcome{!signnup && ", Back"} </h1>
        
        <h2> </h2>
        <form>

    {signnup && <input
            type='text'
            name='name'
            value={input.name}
            onChange={(e) => handlechange(e)}
            placeholder='name'>
          </input> }




          <input
            type='text'
            name='email'
            value={input.email}
            onChange={(e) => handlechange(e)}
            placeholder='Email'>
          </input>

          <input
            type='password'
            name='password'
            value={input.password}
            onChange={handlechange}
            placeholder='Password'>
          </input>

          {signnup &&
            <input type='password'
            name='conformPass'
            value={input.conformPass}
            onChange={handlechange}
            placeholder='Conform password'>
            </input>}
          <div className='text' >
            {signnup ?
              <p>Already have an account?
                <span onClick={() => handlesignup(false)}>Sign in</span>
              </p>
              :
              <p>New to Floriva?
                <span onClick={() => handlesignup(true)}>Create an account</span>
              </p>}
          </div>

                {error1.errorstatus=="error" ?  <h3>some thing went wrong</h3>: <></> }
          {error1.errorstatus=="ok" ?  <h3>register successful now, you can login</h3>: <></> } 
          {error1.user ?  <h3>user already exit</h3>: <></> } 
          {loginuser ?  <h3>welcom back sir</h3>: <></> } 
          <div className='loginbutton' onClick={signnup ? registeruser : handleLogin} >

            {signnup ? <p>Sigh Up</p> : <p>Login</p>}
          </div>
        </form>
      </div>
    </div>
  )
}

export default Loginsignup