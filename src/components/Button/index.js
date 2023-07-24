import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import { forwardRef } from "react";

import styles from './Button.module.scss'

const cx = classNames.bind(styles)

const Button = forwardRef(function Button({
    to,
    href,
    disabled = false,
    rectangle = false,
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
            if (key.startsWith('on') && props[key] === 'function') {
                delete props[key];
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
        rectangle,
        disabled,

    })
    
    return ( 
        <Comp ref={ref} className={classes} {...props}>
            {leftIcon && <span className={cx('leftIcon')}>{leftIcon}</span>}
            {children && <span className={cx('title')}>{children}</span>}
            {rightIcon && <span className={cx('rightIcon')}>{rightIcon}</span>}
        </Comp>
     );
})

export default Button
