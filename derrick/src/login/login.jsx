import React, { useState } from 'react';
import './login.css';
import ReCAPTCHA from 'react-google-recaptcha';
//6LcQQy4qAAAAAJHgf9Y0-Bbi9n_2ls6lfGbGIsbM
 //<button disabled={!capVal}>sub</button>
const Login = () => {
  const [capVal , setCapVal] = useState(null)
    return (
        <div>
            <div className="box"> <div className="logo"></div>
            <p>
              ایجاد حساب کاربری
            </p>
            <div className="form-container">
          <div className="form">
            <input type="text" placeholder="نام " />
            <input type="text" placeholder="نام دوم" />
            <input type="text" placeholder="نام سوم" />
          </div>
          <div className="form">
          <input type="tel" placeholder="تلفن همراه" />
            <input type="text" placeholder="کد ملی اول" />
            <input type="text" placeholder="کد ملی دوم" />
            
          </div>
      
        
        </div>
      
            <div className="enum"></div>
            <div class="rec">
          <ReCAPTCHA 
            sitekey="6LcQQy4qAAAAAJHgf9Y0-Bbi9n_2ls6lfGbGIsbM"
            onChange={val => setCapVal(val)}
            />
          </div>
           
            </div>
            <div className="box1">Box 2</div>
            <div className="arrow-up"></div>
            <div className="arrow">
            </div>
        </div>
    );
};

export default Login;