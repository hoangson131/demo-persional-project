import classNames from "classnames/bind";

import styles from './ShowList.module.scss'
import { forwardRef } from "react";

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
                            <div></div>
                        </li>
                    )
                })}
            </ul>
        </div>
     );
})

export default ShowList;