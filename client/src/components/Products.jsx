import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ProductsList from './ProductsList';
import ProductForm from './ProductForm';


const Products = () => {
    const initialValues = {
        title: '',
        price: 0,
        description: ''
    }
    const onSubmitHandler = async (values, actions) => {
        const respuesta = await axios.post('http://localhost:8000/api/product', values)
        console.log(respuesta);
        actions.resetForm(initialValues);
    }
    
    return (
        <div className='container'>
            <ProductForm
                initialValues={initialValues}
                onSubmit={onSubmitHandler}
            />
            <ProductsList/>
        </div>
    )
}

export default Products;