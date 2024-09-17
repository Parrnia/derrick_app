import { useState } from 'react';
import styles from './main.module.css';
import NavBar from './navbar/Navbar';
import Footer from './footer/Footer';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import style from'./style.module.css'; // Assuming this is where you place the custom styles
import logomain from './assest/logo.png'
import logo1 from './assest/logo1.png'
import logo2 from './assest/logo2.png'
import logo3 from './assest/logo3.png'
import line from './assest/curved-lines.png'
import atm from './assest/atm-card.png'
import baner from './assest/baner.svg'
import  slid1 from './assest/slid.svg'
import  slid2 from './assest/slid1.svg'
import  slid3 from './assest/slid2.svg'
import './slider.css'

function Main() {
  const [isActive, setIsActive] = useState(false);

  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };

  const removeActive = () => {
    setIsActive(false);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className={styles.background}>
      <NavBar />
      <div className="slider">
        <Slider {...settings}>
          <div>
            <img src={slid1} alt="Slider Image 1" />
          </div>
          <div>
            <img   src={slid2}  alt="Slider Image 2" />
          </div>
          <div>
            <img  src={slid3}  alt="Slider Image 3" />
          </div>
        </Slider>
      </div>

      <div className={styles.baner} >
      <img className={styles.imgbaner}  src={baner} alt="Background Image 1" />
      </div>

      <div className={styles.baner2}>
        <div className={styles.bannertext}>
          <p>
            وسایت دریک پی یک پلتفرم زنجیره تامین مالی است 
            که با کمک به بهبود وضعیت جامعه در انواع زمینه های تولید تا فروش به فروشندگان و مصرف کنندگان کمک می بخشد. پلترفم دریک پی زیر مجموعه شرکت زنجیره تامین فناوری هستی می باشد که در تیر ماه 1403 شروع به کار کرده است و ورود بخش های مختلفی را در اینده ای نزدیک پیش بینی می کند.
          </p>
        </div>
        <div className={styles.bannerBackground}>
          <img className={styles.logo1} src={logo1} alt="Background Image 1" />
          <img className={styles.logo2} src={logo2} alt="Background Image 2" />
          <img className={styles.logo3} src={logo3} alt="Background Image 3" />
        </div>
        <img src={logomain} alt="توضیح تصویر" className={styles.bannerImage} />
      </div>

      <div className={styles.baner3}>
        <div className={styles.bannertext2}>
          <p>چرا دریک پی ؟</p>
        </div>
        <div className={styles.bannerBackground}></div>
        <div className={styles.box}>
          <img src={line} className={styles.line} />
          <img src={atm} className={styles.atm} />
          <h2 className={styles.credit}>اعتبار</h2>
          <p className={styles.credittext}>
            شما می توانید با داشتن دریک پی و داشتن اعتبار از این پلتفرم مالی در بخش های مختلف زیر مجموعه این پلتفرم خرید وسرمایه گذاری هایی داشته باشید
          </p>
        </div>
      </div>
      <div className="slider">
        <Slider {...settings}>
          <div>
            <img src={slid1} alt="Slider Image 1" />
          </div>
          <div>
            <img   src={slid2}  alt="Slider Image 2" />
          </div>
          <div>
            <img  src={slid3}  alt="Slider Image 3" />
          </div>
        </Slider>
      </div>
      <Footer />
    </div>
  );
}

export default Main;