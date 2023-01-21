import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const MedicineDetails = () => {
    const {medid} = useParams();
    const[medicine,setMedicine] = useState({});
    useEffect( ()=>{
        fetch(`https://sawom.github.io/MedicineDataApi/medicine.json/`)
        .then(res => res.json())
        .then(data=> setMedicine(data) )
    },[] )

    return (
        <div className='container'>
            <br /><br />
            <div className='aboutStyle '>
                <h4>Medicine Id: {medid} </h4>
                <h6> {medicine.name} </h6>
            </div>
            
        </div>
    );
};

export default MedicineDetails;
