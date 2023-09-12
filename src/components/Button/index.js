import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import { forwardRef } from "react";

import styles from './Button.module.scss'

const cx = classNames.bind(styles)

const Button = forwardRef(function Button({
    to,
    href,
    disabled = false,
    btnBanner = false,
    typeProduct= false,
    typeActive= false,
    typeactive= false,
    typeLogin= false,
    circle=false,
    leftIcon,
    rightIcon,
    children,
    className,
    onClick,
    ...otherProps
},ref) {
    
 

    let Comp = 'button';
    const props = {
        onClick,
        ref,
        ...otherProps
    }

    // remove event listeners when btn is disabled

    if (disabled) {
        Object.keys(props).forEach( key => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                return delete props[key];
            }
        })
    }

    if (to) {
        props.to = to;
        Comp = 'Link'
    } else if (href) {
        props.href = href;
        Comp = 'a'
    }

    const classes = cx('wrapper', {
        [className]: className,
        btnBanner,
        typeProduct,
        typeActive,
        typeactive,
        typeLogin,
        circle,
        disabled,

    })
    
    return ( 
        <Comp ref={ref} {...props} className={classes} >
            {leftIcon && <span className={cx('leftIcon')}>{leftIcon}</span>}
            {children && <span className={cx('title')}>{children}</span>}
            {rightIcon && <span className={cx('rightIcon')}>{rightIcon}</span>}
        </Comp>
     );
})

export default Button
