import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const ProductsList = () => {
    const [product, setProduct] = useState([]);
        useEffect(() => {
            const getData = async () => {
                const respuesta = await axios.get('http://localhost:8000/api/product')
                setProduct(respuesta.data);
            }

            getData();
        }, [])

        const delteProduct = async (productID) => {
            const respuesta = await axios.delete(`http://localhost:8000/api/product/${productID}`)
            console.log(respuesta);
            setProduct(product.filter((product)=>product._id != productID))
        }

    return (
        <>
            <div className='mt-4'>
                <h2>ProductsList</h2>
            </div>
            <table className='table table-hover table-bordered'>
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th>Precio</th>
                        <th>Descripcion</th>
                    </tr>
                </thead>
                <tbody>
                    {product.map((product, idx) => <tr key={idx}>
                        <td>{product.title}</td>
                        <td>{product.price}</td>
                        <td>{product.description}</td>
                        <td className='d-flex justify-content-around'>
                            <Link className='btn btn-primary' to={`product/${product._id}`}>Details</Link>
                            <Link className='btn btn-success' to={`product/update/${product._id}`}>Update</Link>
                            <button className='btn btn-danger' onClick={()=>{delteProduct(product._id)}} >Delete</button>
                        </td>
                    </tr>)}
                </tbody>
            </table>
        </>
    )
}

export default ProductsList
