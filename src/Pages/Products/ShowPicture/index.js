import classNames from "classnames/bind";

import styles from './ShowPicture.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookMessenger, faFacebook, faPinterest, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { useRef, useState } from "react";

const cx = classNames.bind(styles)

function ShowPicture({data}) {

    const btnNextRef = useRef()
    const btnPrevRef = useRef()
    const widthItem = useRef()
    const listImgRef = useRef()

    const [showImg, setShowImg] = useState(data[0].imgUrl[0])

    
    // Handle click btn 
    const handleMouseOver = (index) => {
        if(data[0].imgUrl[index]) {
            setShowImg(data[0].imgUrl[index]) 
        } else {
            console.error("Invalid Foundation Image")
        }
    }
    const handleNextClick = () => { 
        widthItem.current = listImgRef.current.children[1].offsetWidth
        console.log(listImgRef.current.getBoundingClientRect());
        listImgRef.current.style.transform = `translateX(-${widthItem.current}px)`;
    }

    const handlePrevClick = () => {
        widthItem.current = listImgRef.current.children[1].offsetWidth
        console.log(listImgRef.current.getBoundingClientRect());
        listImgRef.current.style.transform = `translateX(0px)`;
    }

    const handleClickBtn = (des) => {
        if (des === 'next') {
            console.log('click Next');
            handleNextClick()
        } else if (des === 'prev') {
            console.log('click Prev');
            handlePrevClick()
        } else {
            return Error('Not Valid')
        }
    }

    return ( 
        <div className={cx('wrapper')}>
            <div className={cx('wrapper__show--image')}>
                <div className={cx('show--image')}>
                    <img className={cx('screen--image')} src={showImg} alt={'1'}/>
                </div>
                <div className={cx('wrapper--showList')}>
                    <div className={cx('wrapper__list--image')}>
                        <ul ref={listImgRef} className={cx('list--image')}>
                            {data[0].imgUrl.map((img,index) => {
                                return (
                                <li onMouseOver={() => handleMouseOver(index)} key={index} className={cx('item--image')} >
                                    <img className={cx('image')} src={img} alt={index} />
                                </li>
                            )
                            })}
                        </ul>
                    </div>
                    {data[0].imgUrl.length > 5 && <button ref={btnPrevRef} className={cx('btn', 'prev')} onClick={()=>handleClickBtn('prev')}>&#10094;</button>}
                    {data[0].imgUrl.length > 5 && <button ref={btnNextRef} className={cx('btn', 'next')} onClick={()=>handleClickBtn('next')}>&#10095;</button>}
                </div>
            </div>
            <div className={cx('wrapper__share')}>
                <div className={cx('share__link--icon')}>
                    <div className={cx('text','share--text')}>Chia sẻ:</div>
                    <div className={cx('iconMess')}><FontAwesomeIcon icon={faFacebookMessenger}/></div>
                    <div className={cx('iconFace')}><FontAwesomeIcon icon={faFacebook}/></div>
                    <div className={cx('iconPintes')}><FontAwesomeIcon icon={faPinterest}/></div>
                    <div className={cx('iconTw')}><FontAwesomeIcon icon={faTwitter}/></div>              
                </div>
                <div className={cx('amount--like')}>
                    <div className={cx('iconHeart')}><FontAwesomeIcon icon={faHeart}/></div>
                    <span className={cx('text')}>Đã thích ({data[0].like > 1000 ? <span>{data[0].like}k</span> : <span>{data[0].like}</span>})</span>
                </div>
            </div>
        </div>
    );
}

export default ShowPicture;