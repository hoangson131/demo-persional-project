import classNames from "classnames/bind";

import Button from "../Button";
import styles from "./Slide.module.scss";
import { useEffect, useRef } from "react";

const cx = classNames.bind(styles);

function Slide({ data, width, height, countdown }) {
  const listRef = useRef(null);
  const imgRef = useRef();
  const dotsRef = useRef(null);
  const lengthItems = data.length
  const active = useRef(0);
    const autoSlideIntervalId = useRef(null);

    const startAutoSlide = () => {
      if(autoSlideIntervalId.current) {
          clearInterval(autoSlideIntervalId.current);
      }
      autoSlideIntervalId.current = setInterval(() =>{
          handleNextSlide()
      },countdown)
    }

    useEffect(() => {
      startAutoSlide()
      return () => {clearInterval(autoSlideIntervalId.current)}
    },[])
  // function setAttributes(ele, attrs) {
  //   for (var key in attrs) {
  //     ele.setAttribute(key, attrs[key]);
  //   }
  // }
  const setSize = () => {
    if(dotsRef.current && dotsRef.current.children) {
      const listDots = [...dotsRef.current.children]
      console.log(listDots);
      listDots[0].classList.add("active")
    }


    if (width || height) {
      console.log(width, height);
      listRef.current.style.width = width + 'px';
      if (imgRef.current && imgRef.current.children) {
        const children = [...imgRef.current.children];
        children.map((item) => {
          let child=[]
          if (item.children) {
            child = [...item.children];
            child.map((chil) => {
              return chil.style.width = width + 'px';
            });
          }
          // return child
        });
      }
    } else {
      return listRef.current;
    }
  }
  useEffect(() => {
    setSize()
  },[])

  const reloadSlide = () => {
    if (imgRef.current && imgRef.current.children) {
      imgRef.current.style.transform = `translateX(${width * -active.current}px)`
      const listDots = [...dotsRef.current.children]
      listDots.forEach(dot => dot.classList.remove('active'))
      listDots[active.current].classList.add('active')
    }
    else {
      console.warn("Slide not Item")
    }
  }
    // Handle Click events
    const handleNextSlide = () => {
      if(active.current + 1 > lengthItems - 1) {
        active.current = 0
      } else {
        active.current = active.current + 1
      }
      reloadSlide()
      startAutoSlide()
    }

    const handlePrevSlide = () => {
      if(active.current - 1 < 0) {
        active.current = lengthItems - 1
      } else {
        active.current = active.current - 1
      }
      reloadSlide()
      startAutoSlide()
    }

    const handleClickDot = (index) => {
      active.current = index
      reloadSlide()
      startAutoSlide()
    }

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
        <Button className={cx("btn", "prev")} onClick={handlePrevSlide}>&#10094;</Button>
        <Button className={cx("btn", "next")} onClick={handleNextSlide} >&#10095;</Button>
      </div>
      <div ref={dotsRef} className={cx("dots__list")}>
        {data.map((item, index) => {
          return <span key={index} className={cx("dot")} onClick={()=>handleClickDot(index)}></span>;
        })}
      </div>
    </div>
  );
}

export default Slide;
