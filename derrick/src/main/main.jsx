import { useState } from 'react';
import styles from './main.module.css';
import logo from './Logo_Menue.png';
import NavBar from './Navbar';
import Footer from './footer';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './style.css'; // Assuming this is where you place the custom styles
import logomain from './logo.png'
import logo1 from './logo1.png'
import logo2 from './logo2.png'
import logo3 from './logo3.png'
import line from './curved-lines.png'
import atm from './atm-card.png'
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
    slidesToScroll: 1
  };

  return (
    <div className={styles.background}>
      <NavBar></NavBar>
      <div className="slider">
        <Slider {...settings}>
          <div>
            <img src="https://via.placeholder.com/800x400" alt="Slider Image 1" />
          </div>
          <div>
            <img src="https://via.placeholder.com/800x400" alt="Slider Image 2" />
          </div>
          <div>
            <img src="https://via.placeholder.com/800x400" alt="Slider Image 3" />
          </div>
        </Slider>
      </div>

      <div className='baner'>

      </div>
      <div class="baner2">
    <div class="banner-text">
       
        <p>  وسایت دریک پی یک پلتفرم زنجیره تامین مالی است 
          که با کمک به بهبود وضعیت جامعه در انواع زمینه های تولید تا فروش به فروشندگان و مصرف کنندگان کمک می بخشد. پلترفم دریک پی زیر مجموعه شرکت زنجیره تامین فناوری هستی می باشد که در تیر ماه 1403 شروع به کار کرده است و ورود بخش های مختلفی را در اینده ای نزدیک پیش بینی می کند.
        </p>
    </div>
    <div class="banner-background">
        <img className='logo1' src={logo1}alt="Background Image 1"/>
        <img className='logo2' src={logo2} alt="Background Image 2"/>
        <img className='logo3' src={logo3} alt="Background Image 3"/>
    </div>
    <img  src={logomain} alt="توضیح تصویر" class="banner-image"/>
</div>

<div class="baner2">

    <div class="banner-text2">
       
        <p> 
        چرا دریک پی ؟

        </p>
    </div>
    <div class="banner-background">
       
    </div>
    <div className='box'>
      <img src={line} className='line' />
      <img src={atm} className='atm' />
      <h2 className='credit'>
        اعتبار
      </h2>
      <p className='credittext'>
      شما می توانید با داشتن دریک پی و داشتن اعتبار از این پلتفرم مالی در بخش های مختلف زیر مجموعه این پلتفرم خرید وسرمایه گذاری هایی داشته باشید
      </p>
    </div>
    
</div>
    </div>
  );
}

export default Main;