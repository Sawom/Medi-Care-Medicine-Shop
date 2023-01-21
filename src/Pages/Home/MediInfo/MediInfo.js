import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './MediInfo.css';
import { Link, unstable_HistoryRouter  } from 'react-router-dom';
import { useHistory } from "react-router";
import Carts from '../../../images/Shared/cart.png';
const MediInfo = (props) => {
    const {id,name,company,type,price,details,img} = props.showMedicine;
    
    return (
        <div>
            <Card className='container p-2 h-100 cardstyles1'>
                <Card.Img className='w-100' variant="top" src={img} />
                <Card.Body>
                    {/* <Card.Title className='textStyle' > {name} {id} </Card.Title> */}
                    <h6 className='pStyle'>{name}</h6>
                    <p className='pStyle' >Price:{price} Taka  <br />
                    Company: {company} <br />
                    Type: {type}
                    </p>
                    
                    <div >
                        <Button className='btnclr' onClick={ ()=> props.addToCart(props.showMedicine) } > 
                        <img style={{ width: '22px' }} src={Carts} alt="" />
                        <span className='px-1' > Add To Cart</span>
                        </Button>
                        <br />
                    </div>
                </Card.Body>
            </Card>
            <br /> 
        </div>
    );
};

export default MediInfo;