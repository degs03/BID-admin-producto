import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

const Details = () => {
    const [product, setProduct] = useState([]);
    const { id } = useParams();
    useEffect(() => {
        const getData = async () => {
            const respuesta = await axios.get(`http://localhost:8000/api/product/${id}`)
            setProduct(respuesta.data);
        }

        getData();
    }, [])
    return (
        <div className='container'>
            <div className='d-flex justify-content-center flex-column text-center align-items-center' >
                <h1 className='text-center'>{product.title}</h1>
                <p>{product.price}</p>
                <p>{product.description}</p>
                <Link className='btn btn-primary' to='/'>Back</Link>
            </div>
        </div>
    )
}

export default Details