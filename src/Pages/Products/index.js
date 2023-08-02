import { useParams } from "react-router-dom";

import classNames from "classnames/bind";
import styles from './Products.module.scss'
import ProductDescription from "./ProductDescription";
import ShowPicture from "./ShowPicture";


const cx = classNames.bind(styles)
function Products() {
    
    let params = useParams();
    console.log(params.id); // "hotspur"

    // data show for useSelector Redux dua vao prams.ID
    const data = {images: ['Url']}
   
    return ( 
        <div className={cx('wrapper')} >   
            <div className={cx('wrapper__products--pictures')}>
                <ShowPicture data={data}/>
            </div>
            <div className={cx('wrapper__products--description')}>
                <ProductDescription/>
            </div>
        </div>
     );
}

export default Products;