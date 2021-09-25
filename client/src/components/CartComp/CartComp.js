import React from 'react';
import './cartComp.css'

function CartComp() {

    let cartData = JSON.parse(localStorage.getItem('cartArt'))
    console.log(cartData)

    function removeFromCart(e) {
        let clicked = e.target
        console.log(clicked)
        let removed = cartData.filter(art => art.id !== clicked.id)
        localStorage.setItem('cartArt', JSON.stringify(removed))
        window.location.reload()
    }

    if (cartData === null || cartData.length === 0) {
        return (
            <div className='cart-container'>
                <div>
                    <h1 className='cart-is-empty'>🙁Cart is Empty🙁</h1>
                </div>
            </div>
        )
    } else {
        return (
            <div className='cart-container'>
                <br/>
                <h1>Cart</h1>
                {cartData.map(data => (
                    <div className='item-container' key={data.id}>
                        <h3>{data.name}</h3>
                        <img className='cart-items' src={data.src} alt={data.name}></img>
                        <p>{data.price}</p>
                        <button className='remove-btn' id={data.id} onClick={removeFromCart}>Remove From Cart</button>
                    </div>
                ))}
            </div>
        )
    }
}

export default CartComp
