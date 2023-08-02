import { useParams } from "react-router-dom";

import classNames from "classnames/bind";
import styles from './Products.module.scss'
import ProductDescription from "./ProductDescription";
import ShowPicture from "./ShowPicture";
import { selectorProducts } from "~/stores/cart/selectors";
import { useSelector } from "react-redux";


const cx = classNames.bind(styles)
function Products() {
    const allProducts = useSelector(selectorProducts)
    
    let params = useParams();
    let productShow 

    if(params.id) {
        const id = [params.id]
        productShow = allProducts.filter(product => id.includes(product.id.toString()))
    } 

    return ( 
        <div className={cx('wrapper')} >   
            <div className={cx('wrapper__products--pictures')}>
                <ShowPicture data={productShow}/>
            </div>
            <div className={cx('wrapper__products--description')}>
                <ProductDescription data={productShow}/>
            </div>
        </div>
     );
}

export default Products;