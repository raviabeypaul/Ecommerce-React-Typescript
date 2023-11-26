
import React from "react"
import { CartItem } from "./components/cartitem/cartitem"
import { useSelector } from "react-redux"
import { RootState } from "../../store"
import './cart.scss';
type CartProps = {

}
// Listing cart by iteration
// Expectations there wont be more than 100 records at a time, which can be handled efficiectly without virtualized list
export const Cart = (_props: CartProps) => {

    const cartProducts = useSelector((state: RootState) => state.cart.products)
    let items = cartProducts.map((value) => {
        return (<CartItem data={value}></CartItem>)
    })

    return (
        <div style={{ width: '100%' }}>
            <div className="shopping-cart">

                <div className="title">
                    Shopping Bag
                </div>
                {items}
            </div>
            
        </div>)
}