import classNames from "classnames/bind";

import styles from './ShowList.module.scss'
import { forwardRef } from "react";
import Button from "../Button";

const cx = classNames.bind(styles)

const ShowList =  forwardRef(function ShowList({
    data,
    onClick,
    btnRectangle,
    btnCircle,
    className,
    ...otherProps
}, ref) {

    const props = {
        onClick,
        ref,
        ...otherProps
    }

    const classes = cx('wrapper', {
        [className]: className,

    })
    
    return ( 
        <div ref={ref} className={classes} {...props}>
            <ul>
                {data.map((item,index) => {
                    return (

                            <li key={index}>

                                <div>{item.imgUrl && <img src={item.imgUrl} alt={item.id} />}</div>

                            </li>

                    )
                })}
                <Button>&#10094;</Button>
                <Button>&#10095;</Button>
            </ul>
        </div>
     );
})

export default ShowList;