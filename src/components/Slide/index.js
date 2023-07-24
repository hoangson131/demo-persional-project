import classNames from "classnames/bind";

import Button from "../Button";
import styles from "./Slide.module.scss";
import { useEffect, useRef } from "react";

const cx = classNames.bind(styles);

function Slide({ data, width, height, countdown, typeBtn, rectangle }) {
  const listRef = useRef(null);
  const imgRef = useRef(null);
  const dotsRef = useRef(null);
  const lengthItems = data.length;
  const active = useRef(0);
  const autoSlideIntervalId = useRef(null);

  const startAutoSlide = () => {
    if (autoSlideIntervalId.current) {
      clearInterval(autoSlideIntervalId.current);
    }
    autoSlideIntervalId.current = setInterval(() => {
      handleNextSlide();
    }, countdown);
  };

   const setSize = () => {
    if (dotsRef.current && dotsRef.current.children) {
      const listDots = [...dotsRef.current.children];
      listDots[0].classList.add(`${cx('active')}`);
    }

    if (width || height) {
      listRef.current.style.width = width + "px";
      if (imgRef.current && imgRef.current.children) {
        const children = [...imgRef.current.children];
        children.map((item) => {
          let child = [];
          if (item.children) {
            child = [...item.children];
            child.map((chil) => {
              return (chil.style.width = width + "px");
            });
          }
          return child
        });
      }
    } else {
      return listRef.current;
    }
  };
  useEffect(() => {
    setSize();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    startAutoSlide();
    return () => {
      clearInterval(autoSlideIntervalId.current);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // function setAttributes(ele, attrs) {
  //   for (var key in attrs) {
  //     ele.setAttribute(key, attrs[key]);
  //   }
  // }
 

  const reloadSlide = () => {
    if (imgRef.current && imgRef.current.children) {
      imgRef.current.style.transform = `translateX(${
        width * -active.current
      }px)`;
      const listDots = [...dotsRef.current.children];
      listDots.forEach((dot) => dot.classList.remove(`${cx('active')}`));
      listDots[active.current].classList.add(`${cx('active')}`);
    } else {
      console.warn("Slide not Item");
    }
  };
  // Handle Click events
  const handleNextSlide = () => {
    if (active.current + 1 > lengthItems - 1) {
      active.current = 0;
    } else {
      active.current = active.current + 1;
    }
    reloadSlide();
    startAutoSlide();
  };

  const handlePrevSlide = () => {
    if (active.current - 1 < 0) {
      active.current = lengthItems - 1;
    } else {
      active.current = active.current - 1;
    }
    reloadSlide();
    startAutoSlide();
  };

  const handleClickDot = (index) => {
    active.current = index;
    reloadSlide();
    startAutoSlide();
  };

  return (
    <div className={cx("container")}>
      <div ref={listRef} className={cx("wrapper__slide")}>
        <div ref={imgRef} className={cx("wrapper__list")}>
          {data.map((item, index) => {
            return (
              <div className={cx("item")} key={index}>
                <img src={item.imgUrl} className={cx("image")} alt={item.id} />
              </div>
            );
          })}
        </div>
        <Button className={cx("btn", "prev")} rectangle onClick={handlePrevSlide}>
          &#10094;
        </Button>
        <Button className={cx("btn", "next")} rectangle onClick={handleNextSlide}>
          &#10095;
        </Button>
      </div>
      <div ref={dotsRef} className={cx("dots__list")}>
        {data.map((item, index) => {
          return (
            <span
              key={index}
              className={cx("dot")}
              onClick={() => handleClickDot(index)}
            ></span>
          );
        })}
      </div>
    </div>
  );
}

export default Slide;
