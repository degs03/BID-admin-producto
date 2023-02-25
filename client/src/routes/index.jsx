import { createBrowserRouter } from "react-router-dom";
import Details from "../components/Details";
import NotFound from "../components/NotFound";
import Products from "../components/Products";
import UpdateProduct from "../components/UpdateProduct";
import Layout from '../layouts/Layout'


export default createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        erroElement: <NotFound />,
        children: [
            {
                index: true,
                element: <Products />
            },
            {
                path: 'product/:id',
                element: <Details />
            },
            {
                path: 'product/update/:id',
                element: <UpdateProduct />
            }
        ]
    }
])