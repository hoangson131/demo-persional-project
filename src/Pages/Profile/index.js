import classNames from "classnames/bind";
import styles from './slideShow.module.scss'
import { useEffect, useRef } from "react";

const cx = classNames.bind(styles)

export default function Profile() {

    const listRef = useRef()
    const dotsRef = useRef()

    let active = 0
    let lengthItems = 0
    let listDots =[]

    const refeshSlide = () => {
        setInterval(() => {
            handleNextSlide()
        },3000)
    }

    useEffect(() => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        lengthItems = listRef.current.children.length

        // eslint-disable-next-line react-hooks/exhaustive-deps
        listDots = [...dotsRef.current.children]
        console.log(listDots);
        listDots.forEach((li, index) => {
            li.onclick = function () {
                active = index 
                reloadSlider()
            }
        })

        refeshSlide()
        return () => {
            clearInterval(refeshSlide)
        }

    },[])

    const reloadSlider = () => {
        let checkLeft = listRef.current.children[active].offsetLeft
        listRef.current.style.left = - checkLeft + 'px'
        // listDots[active].setAttribute('class','active')
        const lastActiveDots = [...dotsRef.current.children]
        lastActiveDots.forEach(item => item.classList.remove(cx('active' )))
        dotsRef.current.children[active].classList.add(cx('active'));
        console.log(dotsRef.current.children);
        clearInterval(refeshSlide)
        // refeshSlide()
    }


    const handleNextSlide = () => {
        if(active + 1 > lengthItems - 1) {
            active = 0
        } else {
            active = active + 1
        }
        reloadSlider()
    }
    const handlePrevSlide = () => {
        if (active - 1 < 0 ) {
            active = lengthItems - 1
        } else {
            active = active - 1
        }
        reloadSlider()
    }
   

    return (
    <div className={cx('slider')}>
        <div className={cx('list')} ref={listRef}>
            <div className={cx('item')} >
                <img src="https://cdn.pixabay.com/photo/2023/07/06/07/40/antarctica-8109879_1280.jpg" alt='1' />
            </div>
            <div className={cx('item')} >
                <img src="https://cdn.pixabay.com/photo/2023/06/29/09/05/dolomites-8095996_1280.jpg" alt='2' />
            </div>
            <div className={cx('item')} >
                <img src="https://cdn.pixabay.com/photo/2023/07/08/09/53/monastery-8114076_1280.jpg" alt='3' />
            </div>
            <div className={cx('item')} >
                <img src="https://cdn.pixabay.com/photo/2023/07/12/20/09/seiser-alm-8123284_1280.jpg" alt='4' />
            </div>
            <div className={cx('item')} >
                <img src="https://cdn.pixabay.com/photo/2023/07/02/22/42/paragliding-8103063_1280.jpg" alt='5' />
            </div>
        </div>

        <div className={cx('buttons')}>
            <button className={cx('prev')} onClick={handlePrevSlide}>Prev</button>
            <button className={cx('next')} onClick={handleNextSlide}>Next</button>
        </div>

        <ul className={cx('dots')} ref={dotsRef}> 
            <li className={cx('active')}></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>


    </div>
    );
}