import React from 'react'
import {useSelector , useDispatch} from 'react-redux'
import { plant1, star, halfstar, line, linecrop } from "../assets"
import { cartAction } from '../store/cart'
const Card = () => {

    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart.numberOfItem)

    const addToCart =() => {
        dispatch(cartAction.addCart());
    }
    console.log(cart);  
    return (
        <div className='card-body'>
            <div className='img' />
            {/* <img src={plant1} alt='plant'></img> */}
            <div className='content' >
                <p className='card-title'>Babool Tree</p>
                <div className='review-section' >
                    <div className="star">
                        <img src={star} alt='star' />
                        <img src={star} alt='star' />
                        <img src={star} alt='star' />
                        <img src={star} alt='star' />
                        <img src={halfstar} alt='star' />
                    </div>
                    <img className='line' src={linecrop} alt='line' />
                    <p> 22 review </p>


                </div>
                <p className='card-price' >$299.00</p>
            </div>

<div className='add-item-section' >
    <div className='add-item-button'onClick={addToCart}>
        <p>+ ADD TO CART</p>
    </div>
</div>
        </div>
    )
}

export default Card;