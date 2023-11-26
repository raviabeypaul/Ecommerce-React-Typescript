//https://designmodo.com/shopping-cart-ui/
import React from "react";
import './cartstyles.scss';
import { Product } from "../../../../dtos/product";
type CartItemProps = {
    data : Product;

}
// Stateless Cart Item
export const CartItem = (props: CartItemProps) => {
    return (
        <div >
            <div className="item">
                <div className="buttons">
                    <span className="delete-btn"></span>
                    <span className="like-btn"></span>
                </div>

                
                    <img className="image" src={props.data.image} loading="lazy" alt="" />
                
                <div className="description">
                    <span>{props.data.title}</span>
                    <span>{props.data.description}</span>
                    <span>{props.data.category}</span>
                </div>

                <div className="quantity">
                    <button className="plus-btn" type="button" name="button">
                        +
                    </button>
                    <input type="text" name="name" value={props.data.count} />
                    <button className="minus-btn" type="button" name="button">
                        -
                    </button>
                </div>

                <div className="total-price">${props.data.price}</div>
            </div>

        </div>
    )
}