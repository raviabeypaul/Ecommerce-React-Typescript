
import './productstyles.scss';
import { Product } from "../../../../dtos/product";
import { useAppDispatch } from '../../../../store';
import { addToCart, removeFromCart } from '../../../../store/slices/Cart';
type ProductItemProps = {
    data: Product
    count : number;
    onItemClicked: (data: Product) => void
}
// stateless product item
export const ProductItem = (props: ProductItemProps) => {
    const dispatch = useAppDispatch()

    // dispatch reduce item from cart
    const reduceItem = ()=>{
        dispatch(addToCart(props.data))
    }

    //dispatch increase item in cart
    const increaseItem = ()=>{
        dispatch(removeFromCart(props.data))
    }

    return (
        <div>
            <div className="card">
                <img className="productImg" src={props.data.image} alt="Denim Jeans" />
                <h3 className="title">{props.data.title}</h3>
                <p className="price">$ {props.data.price}</p>
                <p className="description">{props.data.description}</p>
                {props.data.count > 0 ? (<div className="quantity">
                    <button className="minus-btn" type="button" name="button" onClick={increaseItem}>
                        -
                    </button>
                    <input type="text" name="name" value={props.count} onChange={()=>{}} />
                    <button className="plus-btn" type="button" name="button" onClick={reduceItem}>
                        +
                    </button>
                </div>) : (<p><button className='AddCartButton' onClick={() => props.onItemClicked(props.data)}>Add to Cart</button></p>)}


            </div>
        </div>
    )
}