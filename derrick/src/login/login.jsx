import React, { useState } from 'react';
import './login.css';
import ReCAPTCHA from 'react-google-recaptcha';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  firstname: Yup.string().required('نام اجباری است'),
  lastName: Yup.string().required('نام خانوادگی اجباری است'),
  id: Yup.string()
    .required('کد ملی اجباری است')
    .matches(/^\d{10}$/, 'کد ملی نامعتبر است'),
  number: Yup.string()
    .required('تلفن همراه اجباری است')
    .matches(/^\d{11}$/, 'شماره تلفن نامعتبر است'),
  rep_id: Yup.string()
    .required('کد ملی معرف اجباری است')
    .matches(/^\d{10}$/, 'کد ملی معرف نامعتبر است'),
});

const Login = () => {
  const [capVal, setCapVal] = useState(null);
  const [values, setValues] = useState({
    firstname: '',
    lastName: '',
    id: '',
    number: '',
    desc: '',
    rep_id: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await validationSchema.validate(values, { abortEarly: false });
      if (capVal) {
        // Handle form submission
      }
    } catch (err) {
      const newErrors = {};
      err.inner.forEach((error) => {
        newErrors[error.path] = error.message;
      });
      setErrors(newErrors);
    }
  };

  return (
    <div>
      <div className="box">
        <div className="logo"></div>
        <p>ایجاد حساب کاربری</p>
        <div className="form-container">
          <div className="form">
            {errors.firstname && <div className="error">{errors.firstname}</div>}
            <input
              type="text"
              name="firstname"
              value={values.firstname}
              onChange={handleChange}
              placeholder="نام"
            />
            {errors.lastName && <div className="error">{errors.lastName}</div>}
            <input
              type="text"
              name="lastName"
              value={values.lastName}
              onChange={handleChange}
              placeholder="نام خانوادگی"
            />
            {errors.rep_id && <div className="error">{errors.rep_id}</div>}
            <input
              type="text"
              name="rep_id"
              value={values.rep_id}
              onChange={handleChange}
              placeholder="کد ملی معرف"
            />
          </div>
          <div className="form">
            {errors.number && <div className="error">{errors.number}</div>}
            <input
              type="tel"
              name="number"
              value={values.number}
              onChange={handleChange}
              placeholder="تلفن همراه"
            />
            {errors.id && <div className="error">{errors.id}</div>}
            <input
              type="text"
              name="id"
              value={values.id}
              onChange={handleChange}
              placeholder="کد ملی"
            />
            <input
              type="text"
              name="desc"
              value={values.desc}
              onChange={handleChange}
              placeholder="توضیحات"
            />
          </div>
        </div>
        <div className="enum"></div>
        <div className="rec">
          <ReCAPTCHA
            sitekey="6LcQQy4qAAAAAJHgf9Y0-Bbi9n_2ls6lfGbGIsbM"
            onChange={(val) => setCapVal(val)}
          />
        </div>
        <button className="submit-btn" onClick={handleSubmit} disabled={!capVal}>
          ثبت نام
        </button>
      </div>
      <div className="box1">Box 2</div>
      <div className="arrow-up"></div>
      <div className="arrow"></div>
    </div>
  );
};

export default Login;