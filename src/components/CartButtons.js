import React from 'react'
import { FaShoppingCart, FaUserMinus, FaUserPlus } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useProductsContext } from '../context/products_context'
import { useCartContext } from '../context/cart_context'
import { useUserContext } from '../context/user_context'

const CartButtons = () => {
  return <Wrapper className="cart-btn-wrapper">
    <button className="cart-btn">
      <span>Cart</span>
      <span className="cart-container">
        <FaShoppingCart />
        <span className="cart-value">12</span>
      </span>
    </button>
    <button className="auth-btn">
      <span>Login</span>
      <FaUserMinus />
    </button>
  </Wrapper>
}

const Wrapper = styled.div`
display:grid;
grid-template-columns:1fr 1fr;
align-items:center;
width:225px;

.cart-btn{
color: var(--clr-grey-1);
font-size:1.5rem;
letter-spacing:var(--spacing);
background:transparent;
border:transparent;
display:flex;
align-items:center;
justify-content:center;

}



.cart-container{
  position:relative;
  display: flex;
  
     align-items: center;
     svg {
       height: 1.6rem;
       margin-left: 5px;
     }

  .cart-value{
    background-color:var(--clr-primary-1);
    color:white;
    position: absolute;
    top: -10px;
    right: -16p;
    right: -16px;
    border-radius: 50%;
    width:16px;
    height:16px;
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:0.75rem;
    padding:12px;
  }
}

.auth-btn {
     display: flex;
     align-items: center;
     background: transparent;
     border-color: transparent;
     font-size: 1.5rem;
     cursor: pointer;
     color: var(--clr-grey-1);
     letter-spacing: var(--spacing);
     svg {
       margin-left: 5px;
     }
   }


`


export default CartButtons
