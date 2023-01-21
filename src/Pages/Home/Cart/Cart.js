import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Cart.css';

const Cart = ({cart}) => {
    let total = 0;
    for (const showMedicine of cart ){
        total = total + showMedicine.price;
    }
    let total1 = total.toFixed(2);
    let tax = total * 0.02;
    let tax1 = tax.toFixed(2);
    let delivery = total* 0.03;
    let delivery1 = delivery.toFixed(2);
    let grandTotal = total+tax+delivery;
    let grandTotal1 = grandTotal.toFixed(2);
    return (
        <div className=' textStyle cart' >
            <br />
            <h5>Order Summary:</h5>
            <h6>Total Medicine: {cart.length} </h6>
            <h6>Medicine Price: {total1} Taka  </h6>
            <h6>Tax (2%): {tax1} Taka</h6>
            <h6>Delivery (3%): {delivery1} Taka </h6>
            <h6>Grand Total: {grandTotal1} Taka</h6>
            <Link as={Link} to='/confirm'>
                <Button className='btnclr'> Confirm Order </Button> 
            </Link>
           
        </div>
    );
};

export default Cart;