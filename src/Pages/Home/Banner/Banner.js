import React, { useState } from 'react';
import { Row } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import banner1 from '../../../images/Banner/b1.png'; 
import banner2 from '../../../images/Banner/b2.png';
import banner3 from '../../../images/Banner/b31.png' ;
import banner5 from '../../../images/Banner/b5.png' 


const Banner = () => {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <div className='navStyle' >
            <Carousel  className='container ' activeIndex={index} onSelect={handleSelect}>
                {/* 1 */}
                <Carousel.Item className='imgStyle' >
                    <Row >
                        <div className='col-12 col-lg-6 col-md-6' >
                            <img alt="First slide"  
                            className="d-block w-100 "
                            src={banner1}/>
                        </div>
                        <div className='col-12 col-lg-6 col-md-6'>
                            <br /> <br />
                            <h4 style={{color:"white"}} className='textStyle' >No. 1 Trusted Online Medicine Shop in Bangladesh.
                            </h4>
                            <br /><br /> <br />
                        </div>
                    </Row>
                </Carousel.Item>
                {/* 2 */}
                <Carousel.Item className='imgStyle' >
                    <Row >
                        <div className='col-12 col-lg-6 col-md-6'>
                            <img alt="Second slide" 
                    className="d-block w-100"
                    src={banner2}  />
                        </div>
                        <div className='col-12  col-lg-6 col-md-6'>
                            <br /> <br />
                            <h4 style={{color:"white"}} className='textStyle' >Cash on Delivery All Over Bangladesh in 12 hours</h4>
                            <br /><br /> <br />
                        </div>
                    </Row>
                </Carousel.Item>
                {/* 3 */}
                <Carousel.Item>
                    <Row>
                        <div className='col-12 col-lg-6 col-md-6'>
                            <img alt="Second slide"
                            className="d-block w-100"
                            src={banner3} />
                        </div>
                        <div className='col-12 col-lg-6 col-md-6'>
                            <br /> <br />
                            <h4 style={{color:"white"}} className='textStyle' >We Have Experienced Online Doctors</h4>
                            <br /><br /> <br />
                        </div>
                    </Row>
                </Carousel.Item>
                {/* 4 */}
                <Carousel.Item>
                    <Row>
                        <div className='col-12 col-lg-6 col-md-6'>
                            <img alt="Fourth slide"
                            className="d-block w-100"
                            src={banner5} />
                        </div>
                        <div className='col-12 col-lg-6 col-md-6'>
                            <br /> <br />
                            <h4 style={{color:"white"}} className='textStyle' >You will get a maximum of 25% discount!</h4>
                            <br /><br /> <br />
                        </div>
                    </Row>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;