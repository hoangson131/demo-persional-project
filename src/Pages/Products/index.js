import classNames from "classnames/bind";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import ShowPicture from "./ShowPicture";
import styles from './Products.module.scss'
import ProductDescription from "./ProductDescription";
import { selectorProducts } from "~/stores/cart/selectors";


const cx = classNames.bind(styles)
function Products() {
    const productsAll = useSelector(selectorProducts)
    let params = useParams()
    const iD = [Number(params.id)]
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