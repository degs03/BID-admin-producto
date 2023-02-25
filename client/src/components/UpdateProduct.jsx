import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import ProductForm from './ProductForm';


const UpdateProduct = () => {
    const [product, setProduct] = useState([]);
    const { id } = useParams();
    const navigate = useNavigate()
    useEffect(() => {
        const getData = async () => {
            const respuesta = await axios.get(`http://localhost:8000/api/product/${id}`)
            setProduct(respuesta.data);
        }

        getData();
    }, [])
    const updateProducts = async (values, actions) => {
        const respuesta = await axios.put(`http://localhost:8000/api/product/${id}`, values)
        console.log(respuesta);
        navigate('/');
    }
    return (
        <>
            <div className='container'>
                <ProductForm
                    initialValues={product}
                    onSubmit={updateProducts}
                />
            </div>
        </>
    )
}
export default UpdateProduct    