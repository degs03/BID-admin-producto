import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Products from '../components/Products';
export default () => {
    useEffect(()=>{
        axios.get("http://localhost:8000/api/product")    
    }, []);
    return (
        <div>
            <Products/>
        </div>
    )   
}