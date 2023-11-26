import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { Product } from "../../dtos/product"

interface CartState {
    products: Product[]

}

const initialState = { products: [] } as CartState
// Slice for Cart Management
const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        // Add to Cart , update count if already present
        addToCart: (state, action: PayloadAction<Product>) => {
            let productExists = false;
            let updatedArray = state.products.map((value) => {
                if (value.id === action.payload.id) {
                    productExists = true;
                    value.count++;
                }
                return value;
            })
            if (!productExists) {
                let product = action.payload;
                product.count = 1;
                state.products.push(product)
            } else {
                state.products = [...updatedArray]
            }

        },
        // Remove From Cart , update count if already present
        removeFromCart: (state, action: PayloadAction<Product>) => {
            if(action.payload.count===1){
                state.products = state.products.filter((value)=>value.id!==action.payload.id)
            }else{
                for (let index = 0; index < state.products.length; index++) {
                    let element = state.products[index];
                    if(element.id === action.payload.id){
                        element.count = element.count-1
                        state.products[index] = element
                    }
                    

                }
            }          
        },
        // clears the cart
        clearCart: (state) => {
            state.products = []
        }
    }
})

export const { addToCart, removeFromCart } = CartSlice.actions;
export default CartSlice;