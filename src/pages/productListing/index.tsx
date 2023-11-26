import {  useState } from "react"
import { Product } from "../../dtos/product"
import { InfiniteGridScroller } from "../../components/InfiniteGridScroller"
import { Fab, Grid } from "@mui/material"
import { ProductItem } from "./components/product/productitem"
import { isMobile } from 'react-device-detect';
import usePaginatedFetch from "../../hooks/usePaginatedFetch"
import { RootState, useAppDispatch, useSelector } from "../../store"
import { addToCart } from "../../store/slices/Cart"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './productListing.scss'
import { useNavigate } from "react-router-dom"

// Product List with Pachination with custom hooks
export const ProductList = () => {
    const [page, setPage] = useState(0);

    const { data} = usePaginatedFetch('https://fakestoreapi.com/products?limit=20&page=' + page, 'GET')
    const dispatch = useAppDispatch()
    const cartProducts = useSelector((state: RootState) => state.cart.products)
    const navigate = useNavigate()

    // decides how many cards to show based on mobile or web view
    let cardCount = isMobile ? 2 : 4;
    let gridItemsSize = isMobile ? 6 : 3;

    let updatedList: Product[] = []
    data.forEach((product: Product) => {
        let _product = { ...product }

        for (let index = 0; index < cartProducts.length; index++) {
            let cartProduct = cartProducts[index];
            if (product.id === cartProduct.id) {
                _product.count = cartProduct.count;
            }
        }
        updatedList.push(_product)

    });

    return (<div className="parent">
        <Fab style={{ margin: 50,top:  'auto',right: 20, bottom: 20, left: 'auto',  position: 'fixed', backgroundColor:'cyan'}} className="fab" aria-label="like" onClick={()=>navigate('/cart')}>
            <ArrowForwardIosIcon />
        </Fab>
        <InfiniteGridScroller
            cardCount={cardCount}
            hasMore={false}
            list={updatedList}
            fetchMoreData={() => { setPage(page + 1) }}
            key={'Products'}
            loader={<h4>loading</h4>}
            element={(_data, _index) => {
                return (
                    <Grid key={_index} item xs={gridItemsSize} >
                        <ProductItem count={_data.count} data={_data} onItemClicked={(data) => {
                            dispatch(addToCart(data))
                        }} />
                    </Grid>
                )
            }}
        />


    </div>)
}