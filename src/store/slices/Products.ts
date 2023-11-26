import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { Product } from "../../dtos/product"

interface ProductsState {
    products : Product[]
}

const initialState = { products : []} as ProductsState

const ProductsSlice = createSlice({
    name : 'products',
    initialState,
    reducers : {
        addProducts : (state, action : PayloadAction<Product>)=>{
            state.products.push(action.payload)
        },
        resetAndAddNewProducts : (state, action : PayloadAction<Product[]>)=>{
            state.products = [];
            state.products = [...action.payload]
        }
    }
})

export const {addProducts, resetAndAddNewProducts} = ProductsSlice.actions;
export default ProductsSlice;