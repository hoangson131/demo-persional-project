import { useParams } from "react-router-dom";

import classNames from "classnames/bind";
import styles from './Products.module.scss'
import ProductDescription from "./ProductDescription";
import ShowPicture from "./ShowPicture";
import { selectorProducts } from "~/stores/cart/selectors";
import { useSelector } from "react-redux";


const cx = classNames.bind(styles)
function Products() {
    const productsAll = useSelector(selectorProducts)
    let params = useParams();
    console.log(params.id); // "hotspur"
    const [iD] = params.id

    // data show for useSelector Redux dua vao prams.ID
    const productsShow = productsAll.filter(product => iD.includes(product.id))
    console.log(productsShow);
   
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