import { useParams } from "react-router-dom";

import classNames from "classnames/bind";
import styles from './Products.module.scss'
import ProductDescription from "./ProductDescription";
import ShowPicture from "./ShowPicture";
import { selectorProducts } from "~/stores/cart/selectors";
import { useSelector } from "react-redux";


const cx = classNames.bind(styles)
function Products() {
    console.log('render Products Page...');
    const productsAll = useSelector(selectorProducts)
    let params = useParams();
    const iD = [params.id]

    // data show for useSelector Redux dua vao prams.ID
    const productsShow = productsAll.filter(product => {
        return iD.includes(product.id)
    })
   
    return ( 
        <div className={cx('wrapper')} >   
            <div className={cx('wrapper__products--pictures')}>
                <ShowPicture data={productsShow}/>
            </div>
            <div className={cx('wrapper__products--description')}>
                <ProductDescription data={productsShow}/>
            </div>
        </div>
     );
}

export default Products;