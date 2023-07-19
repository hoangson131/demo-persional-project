import classNames from 'classnames/bind';

import styles from './FlashSale.module.scss'


const cx = classNames.bind(styles)

function FlashSale() {
    return ( 
        <div>
            <div box_title>
                <div className={cx('title')}></div>
                <div className=''>Time out</div>
            </div>
            <div>
                <ul>
                    <li>
                        <div></div>
                        <div>
                            <div>
                                <span></span>
                                <div></div>
                            </div>
                            <div></div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
     );
}

export default FlashSale;