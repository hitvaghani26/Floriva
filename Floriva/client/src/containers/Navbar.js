import React from 'react'
import { cart, logoleafremovebg, plantsearch, user } from "../assets"
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { authAction } from '../store/auth'
import { redirect } from "react-router-dom";

const Navbar = () => {








    const cartnumber = useSelector(state => state.cart.numberOfItem)
    var authname = useSelector(state => state.auth.name);
    console.log(authname);
    const isUserLogin = useSelector(state => state.auth.isLogin)
    const dispatch = useDispatch();

    const logout = async () => {
        try {
            const response = await axios.post('logout', {
                headers: {
                    'Content-Type': 'application/json',
                },
                withCredentials: true,
            });

            const data = response.data;

            dispatch(authAction.logOutuser());
           


        } catch (error) {
            console.log("logout error", error);
        }
    }
    return (
        <div className='header'>
            <div className='header-body ' >

                <Link to="/">


                    <div className='header-body-l '>

                        <img src={logoleafremovebg} alt='Logo'></img>
                        <p>Floriva</p>
                    </div>
                </Link>
                <div className='header-body-c'>
                    <Link className='navlink' to='/'>
                        <p>Home</p>
                    </Link>

                    <Link className='navlink' to='/blog'>
                        <p>Blog</p>
                    </Link>
                    <Link className='navlink' to='/aboutus'>
                        <p>About Us</p>
                    </Link>

                </div>
                <div className='header-body-r'>
                    {/* <Link  to='/Loginsignup'>

                    <div className='nav-button'>Sign Up</div>
                    </Link> */}
                    {!isUserLogin && <Link to='/Loginsignup'>
                        <div className='nav-button'>Login</div>
                    </Link>}

                    {isUserLogin && <div onClick={logout} className='nav-button'>Logout</div>}


                    



                    <div className='cart'>
                        <img src={cart}></img>
                        <p>{cartnumber}</p>
                    </div>

                    {isUserLogin && <Link to="/user">
                        <div className='user'>
                            <img src={user}></img>
                            <p>{authname}</p>
                        </div>
                    </Link> }
                    

                </div>

            </div>
        </div>
    )
}

export default Navbar