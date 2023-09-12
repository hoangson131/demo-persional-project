import classNames from "classnames/bind";

import styles from './ProductsMall.module.scss'
import Button from "~/components/Button";
import {  useContext, useRef } from "react";
import { DataContext } from "~/DataProvider/dataProvider";

const cx = classNames.bind(styles)
function ProductsMall() {
    const data = useContext(DataContext)
    const listRef = useRef()
    const prevRef = useRef(null)
    const nextRef = useRef(null)
    const widthlist = useRef(null)
    
    const handleClick = (desc) => {
        widthlist.current = listRef.current.offsetWidth 
        if(desc === 'next' && listRef.current) {
          listRef.current.style.transform = `translateX(-${widthlist.current - 800}px)`
          show(prevRef)
          hide(nextRef)
        }
        else if(desc === 'prev' && listRef.current) {
          listRef.current.style.transform ='translateX(0px)'
          hide(prevRef)
          show(nextRef)
        }
      }
    function show(btn) {
        btn.current.style.display = 'block'
      }
    
      function hide(btn) {
        btn.current.style.display = 'none'
      }
    
    return ( 
        <div className={cx('wrapper')}>
            <div className={cx('company__wapper--list')}>
                <ul ref={listRef} className={cx('company--list')}>
                    {data && data.shopeeMail.listCompanyBrand.map((item,index) => {
                        return (
                            <li key={index} className={cx('item--company')}>
                                <div className={cx('item')}>
                                    <img src={item.imgUrl} className={cx('image')} alt={item.id}/>
                                    <div className={cx('title')}>{item.title}</div>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <Button ref={prevRef} circle className={cx('btn', 'prev')} onClick={() => handleClick('prev')}>&#10094;</Button>
            <Button ref={nextRef} circle className={cx('btn', 'next')} onClick={() => handleClick('next')}>&#10095;</Button>
        </div>
     );
}

export default ProductsMall;