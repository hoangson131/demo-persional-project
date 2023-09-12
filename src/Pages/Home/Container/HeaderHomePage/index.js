import classNames from "classnames/bind";

import styles from "./HeaderHomePage.module.scss";
import Button from "~/components/Button";
import { useRef } from "react";
import { useContext } from "react";
import { DataContext } from "~/DataProvider/dataProvider";

const cx = classNames.bind(styles);

function HeaderHomePage() {
  const data = useContext(DataContext)

  const listRef = useRef()
  const prevRef = useRef(null)
  const nextRef = useRef(null)
  const widthlist = useRef(null)

  // const handleClickNext = () => {
  //   listRef.current.style.transform = `translateX(-${widthlist.current - 1200}px)`
  //   nextRef.current.style.display = 'none'
  // }

  // const handleClickPrev = () => {
  //   listRef.current.style.transform = `translateX(0px)`
  //   console.log(prevRef.current);
  // }

  const handleClick = (desc) => {
    widthlist.current = listRef.current.offsetWidth
    if(desc === 'next' && listRef.current) {
      listRef.current.style.transform = `translateX(-${widthlist.current - 1200}px)`
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


  // default prev hidden
   
  // hover list next zoom
  // click next move and hidden btn next & show prev btn 
  // click prev move and hidden btn prev & show next btn

  return (
    <div className={cx("wrapper")}>
      <div className={cx("title")}>Danh Mục</div>
      <div className={cx('wrapper__category')}>
        <div className={cx("category__list")}>
          <div ref={listRef} className={cx("box__category--list")}>
            {data && data.category.map((item) => {
              return (
                <a className={cx("box__list--item")} key={item.id} href="/">
                  <div className={cx("box--item")}>
                    <img
                      className={cx("logo")}
                      src={item.imageUrl}
                      alt={item.id}
                    />
                    <div className={cx("text")}>{item.title}</div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
        <Button ref={prevRef} circle className={cx('btn', 'prev')} onClick={() => handleClick('prev')}>&#10094;</Button>
        <Button ref={nextRef} circle className={cx('btn', 'next')} onClick={() => handleClick('next')}>&#10095;</Button>
      </div>
    </div>
  );
}

export default HeaderHomePage;
