import React from 'react'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';


const ProductErrores = Yup.object().shape({
    title: Yup.string()
        .min(3, "El titulo debe tener como minimo 3 caracteres")
        .max(70, "No puede ser muy largo")
        .required('Requerido'),
    price: Yup.number()
        .integer("Debe ser un numero entero")
        .positive("Debe ser positivo")
        .required('Requerido'),
    description: Yup.string()
        .min(5, "La descripcion debe tener como minimo 5 caracteres")
        .max(70, "No puede ser muy largo")
        .required('Requerido'),
});

const ProductForm = ({initialValues , onSubmit}) => {

    return (
        <div className='container'>
            <Formik
                initialValues={initialValues}
                enableReinitialize={true}
                onSubmit={onSubmit}
                validationSchema={ProductErrores}>
                {({ errors, touched, isValid, dirty }) => (
                    <Form className='form-signup'>
                        <h2>Form Manager</h2>
                        <div className='d-flex'>
                            <p className='m-2'>Titulo</p>
                            <Field name="title" type='text' className='form-control m-2' />
                        </div>
                        {touched.title && errors.title ? (<div className='ms-3 mt-1 mb-3 text-danger'>{errors.title}</div>) : null}
                        <div className='d-flex'>
                            <p className='m-2'>Precio</p>
                            <Field name="price" type='number' className='form-control m-2' />
                        </div>
                        {touched.price && errors.price ? (<div className='ms-3 mt-1 mb-3 text-danger '>{errors.price}</div>) : null}
                        <div>
                            <p className='m-2'>Descripcion</p>
                            <Field name="description" as='textarea' type='text' className='form-control' />
                            {touched.description && errors.description ? (<div className=' text-danger'>{errors.description}</div>) : null}
                        </div>
                        <button className='btn btn-success btn-block mt-4' type='submit' disabled={!(isValid && dirty)}>Enviar</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default ProductForm;