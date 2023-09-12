import { useEffect, useRef } from "react";
import classNames from "classnames/bind";

import styles from "./SlideShow.module.scss";
import Button from "~/components/Button";
import { useContext } from "react";
import { DataContext } from "~/DataProvider/dataProvider";

const cx = classNames.bind(styles);

function SlideShow() {
  const data = useContext(DataContext)
  const listSlideRef = useRef();
  const dotsRef = useRef();
  const autoSlideIntervalId = useRef();
  
  let active = 0;
  // const [lengthItems.current, setlengthItems] = useState(0)
  const lengthItems = useRef()
  let widthItem = 0;

  const startAutoSlide = () => {
    if (autoSlideIntervalId.current) {
      clearInterval(autoSlideIntervalId.current);
    } 
    autoSlideIntervalId.current = setInterval(() => {
      handleNextSlide();
    }, 3000);
    
  };

  useEffect(() => {
    lengthItems.current = data && data.banner.slideImage.length
    startAutoSlide();
    return () => {
      clearInterval(autoSlideIntervalId.current);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const reloadSlide = () => {
    if (listSlideRef.current && listSlideRef.current.children) {
      widthItem = listSlideRef.current.children[0].offsetWidth;

      listSlideRef.current.style.transform = `translateX(${
        widthItem * -active
      }px)`;
      const lastActiveDots = [...dotsRef.current.children];
      lastActiveDots.forEach((item) => item.classList.remove(cx("active")));
      dotsRef.current.children[active].classList.add(cx("active"));
    }
  };

  const handleNextSlide = () => {
    if (active + 1 > lengthItems.current - 1) {
      active = 0;
    } else {
      active = active + 1;
    }
    reloadSlide();
    startAutoSlide();
  };

  const handlePrevSlide = () => {
    if (active - 1 < 0) {
      active = lengthItems.current - 1;
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
          <ul ref={listSlideRef} className={cx("slide-images")}>
            {data && data.banner.slideImage.map((item, index) => {
              return (
                <li key={index} className={cx('box__image')}>
                  <img
                    src={item.imgUrl}
                    className={cx("image__slide")}
                    alt={item.id}
                  />
                </li>
              );
            })}
          </ul>
          <Button btnBanner className={cx("btn", "prev")} onClick={() => handlePrevSlide()}>
            &#10094;
          </Button>
          <Button btnBanner className={cx("btn", "next")} onClick={() => handleNextSlide()}>
            &#10095;
          </Button>
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
