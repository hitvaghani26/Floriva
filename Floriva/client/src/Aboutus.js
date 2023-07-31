import React from 'react'
import { plantabout1, plantabout22, plantabout3, plantabout4, plantabout5, plantabout6, plantabout2 } from './assets'

const Aboutus = () => {
  return (
    <div className='aboutus'>
      <div className='aboutusbody'>
        <div className='about-item-1 grid  img-right about-item'>


          <div className='about-item-1-l about-item-text'>
            <h2>About Us</h2>
            <p>Floriva is a passion-driven online marketplace dedicated to providing a diverse selection of premium plants to plant enthusiasts and nature lovers across the globe. Founded in [Year], our mission is to promote a greener and healthier world by making the beauty and benefits of plants accessible to everyone.</p>
          </div>
          <div className='about-item-1-r'>
            <img src={plantabout1} alt='plant' />
          </div>
        </div>


        <div className='about-item-2 grid img-left about-item'>
          <div className='about-item-2-l'>
            <img src={plantabout22} alt='plant' />
          </div>
          <div className='about-item-2-r about-item-text'>
            <h2>Our Commitment:</h2>
            <p>At [Your Company Name], we are committed to curating an exclusive collection of plants, ranging from rare species to classic favorites, sourced from trusted and environmentally-conscious growers. We believe that each plant has a unique story to tell, and we take pride in handpicking only the finest specimens to ensure that our customers receive healthy and thriving plants.</p>
          </div>
        </div>


        <div className='about-item-3 grid img-right about-item'>
          <div className='about-item-3-l about-item-text'>
            <h2>A Green Lifestyle:</h2>
            <p>We are more than just an online plant store; we are advocates of green living. Our team of experienced horticulturists and plant enthusiasts are always ready to share their knowledge and support customers in their plant journey. Whether you are an experienced gardener or a newbie plant parent, we are here to assist you in finding the perfect plant that complements your living space and enhances your well-being.</p>
          </div>
          <div className='about-item-3-r'>
            <img src={plantabout3} alt='plant' />
          </div>
        </div>


        <div className='about-item-4 grid img-left about-item' >
          <div className='about-item-4-l'>
            <img src={plantabout4} alt='plant' />
          </div>
          <div className='about-item-4-r about-item-text'>
            <h2>Sustainability Matters:</h2>
            <p>At [Your Company Name], sustainability is at the heart of everything we do. We are dedicated to minimizing our environmental footprint by implementing eco-friendly practices in our operations. From using recyclable packaging materials to promoting responsible harvesting, we strive to contribute positively to the planet's health and biodiversity.</p>
          </div>
        </div>


        <div className='about-item-5 grid img-right about-item'>
          <div className='about-item-5-l about-item-text'>
            <h2>Customer Satisfaction:</h2>
            <p>Your satisfaction is our top priority. We are dedicated to providing a seamless online shopping experience, from effortless browsing to timely deliveries. Our customer support team is available to answer any queries and resolve issues promptly, ensuring that you have a delightful and stress-free shopping experience with us.</p>
          </div>


          <div className='about-item-5-r'>
            <img src={plantabout5} alt='plant' />
          </div>
        </div>


        <div className='about-item-6 grid img-left about-item '>
          <div className='about-item-6-l'>
            <img src={plantabout6} alt='plant' />
          </div>
          <div className='about-item-6-r about-item-text'>
            <h2>Join Us in the Green Journey:</h2>
            <p>We invite you to join us in our green journey and discover the magic of plants. Explore our extensive collection, and we are confident that you will find the perfect plant that brings joy, tranquility, and natural beauty to your life.</p>
          </div>
        </div>




      </div>

    </div>
  )
}

export default Aboutus