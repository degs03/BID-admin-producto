import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <div className='conteiner mt-5'>
            <Outlet/>
        </div>
    )
}

export default Layout