import { useEffect, useRef } from "react";
import classNames from "classnames/bind";

import styles from "./SlideShow.module.scss";
import { dataBase } from "~/database";

const cx = classNames.bind(styles);

function SlideShow() {
  const listSlideRef = useRef();
  const dotsRef = useRef();
  const autoSlideIntervalId = useRef();

  let active = 0;
  let lengthItems = dataBase.banner.slideImage.length;
  let widthItem = 0;

  // useEffect(() => {
  // console.log('listSlideRef.current.children', listSlideRef.current.children)
  // if(listSlideRef.current.children && listSlideRef.current){
  // widthItem = listSlideRef.current.children[0].offsetWidth;
  // }
  // eslint-disable-next-line react-hooks/exhaustive-deps

  // const lisDots = [...dotsRef.current.children];
  // lisDots.forEach((dot, index) => {
  //   dot.onclick = () => {
  //     active = index;
  //     reloadSlide();
  //   };
  // });
  // }, [])

  const startAutoSlide = () => {
    if (autoSlideIntervalId.current) {
      clearInterval(autoSlideIntervalId.current);
    }
    autoSlideIntervalId.current = setInterval(() => {
      handleNextSlide();
    }, 3000);
  };

  useEffect(() => {
    startAutoSlide();
    return () => {
      clearInterval(autoSlideIntervalId.current);
    };
  }, []);

  const reloadSlide = () => {
    if (listSlideRef.current && listSlideRef.current.children) {
      widthItem = listSlideRef.current.children[0].offsetWidth;

      listSlideRef.current.style.transform = `translateX(${
        widthItem * -active
      }px)`;
      let lastActiveDots = [...dotsRef.current.children];
      lastActiveDots.forEach((item) => item.classList.remove(cx("active")));
      dotsRef.current.children[active].classList.add(cx("active"));
    }
  };

  const handleNextSlide = () => {
    if (active + 1 > lengthItems - 1) {
      active = 0;
    } else {
      active = active + 1;
    }
    reloadSlide();
    startAutoSlide();
  };

  const handlePrevSlide = () => {
    if (active - 1 < 0) {
      active = lengthItems - 1;
    } else {
      active = active - 1;
    }
    reloadSlide();
    startAutoSlide();
  };

  const handleClickDot = (index) => {
    active = index;
    reloadSlide();
    startAutoSlide();
  };

  return (
    <div className={cx("banner__wrapper")}>
      <div className={cx("banner__slideshow")}>
        <div className={cx("slideshow__wrapper")}>
          <div ref={listSlideRef} className={cx("slide-images")}>
            {dataBase.banner.slideImage.map((item, index) => {
              return (
                <div key={index} className={cx('box__image')}>
                  <img
                    src={item.imgUrl}
                    className={cx("image__slide")}
                    alt={item.id}
                  />
                </div>
              );
            })}
          </div>
          <button className={cx("btn", "prev")} onClick={handlePrevSlide}>
            &#10094;
          </button>
          <button className={cx("btn", "next")} onClick={handleNextSlide}>
            &#10095;
          </button>
        </div>
        <div ref={dotsRef} className={cx("box__dot")}>
          <span
            className={cx("dot", "active")}
            onClick={() => handleClickDot(0)}
          ></span>
          <span className={cx("dot")} onClick={() => handleClickDot(1)}></span>
          <span className={cx("dot")} onClick={() => handleClickDot(2)}></span>
          <span className={cx("dot")} onClick={() => handleClickDot(3)}></span>
          <span className={cx("dot")} onClick={() => handleClickDot(4)}></span>
          <span className={cx("dot")} onClick={() => handleClickDot(5)}></span>
          <span className={cx("dot")} onClick={() => handleClickDot(6)}></span>
          <span className={cx("dot")} onClick={() => handleClickDot(7)}></span>
          <span className={cx("dot")} onClick={() => handleClickDot(8)}></span>
          <span className={cx("dot")} onClick={() => handleClickDot(9)}></span>
        </div>
      </div>
    </div>
  );
}

export default SlideShow;
