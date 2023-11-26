import { Route, Routes } from "react-router-dom"
import { ProductList } from "../pages/productListing"
import { Cart } from "../pages/cart"


export const RouteHandler = ()=>{
    return (<>
    <Routes>
        <Route path={'/'} element={<ProductList/>}/>
        <Route path={'/cart'} element={<Cart/>}/>
    </Routes>
    </>)

}