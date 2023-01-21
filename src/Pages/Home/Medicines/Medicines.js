import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import MediInfo from '../MediInfo/MediInfo';
import Cart from '../Cart/Cart';
import './Medicines.css';

const Medicines = () => {
    const [display, setDisplay] = useState([]);
    const [medicine, SetMedicine] = useState([]);
    const [ cart, setCart] = useState([]);

    // fetch data
    useEffect( ()=>{
        fetch('https://sawom.github.io/MedicineDataApi/medicine.json')
        .then(res=> res.json())
        .then(data =>{
            setDisplay(data);
            SetMedicine(data);
            console.log(data);
        })
    }, [] );
    // searching function
    const handleSearch = (event)=>{
        const search = event.target.value;
        const matched = medicine.filter((medi) => medi.name.toLowerCase().includes(
            search.toLowerCase()) );
            setDisplay(matched);
    }
    // add to cart
    const addToCart = (myshop)=>{
        const newCart = [...cart, myshop];
        setCart(newCart); 
    }

    return (
        <Container>
            <br />
            {/* search */}
            <div >
                <br />
                <input className='searchStyle App' onChange={handleSearch} placeholder='Search Medicine Here' type="text"  ></input>
                <br /> <br /><br />
            </div>
            <Row className='part1' xs={2} sm={2} md={2} lg={2} >
                <Row className='part2' xs={1} sm={1} md={2} lg={3} >
                    {
                        display.map( (showMedicine) => <MediInfo 
                            key={showMedicine.id}
                            showMedicine={showMedicine}
                            addToCart={addToCart} ></MediInfo> 
                        )
                    }
                </Row>
                <div className='part3' >
                    <Cart cart={cart} ></Cart>
                </div>
            </Row>
        </Container>
    );
};
export default Medicines;