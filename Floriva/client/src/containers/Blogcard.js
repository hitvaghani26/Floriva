import React from 'react'
import { plantabout1 } from "../assets";

const Blogcard = () => {
  return (
    <div className='blogcard'>
        <div className='blogcard-body'>
            <img src={plantabout1} alt=''></img>
            <div className='bolgcard-text'>
                <h2>Plant Care 101: How to Keep Your Plants Happy and Healthy</h2>
                <p className='para'>Taking care of your plants is essential to ensure their optimal growth and longevity. Here are some key aspects of plant care that every green thumb should know</p>

                <p className='readmore'>Read more</p>
                <p className='blog-date'>12 jun 2023</p>
            </div>
        </div>
    </div>
  )
}

export default Blogcard