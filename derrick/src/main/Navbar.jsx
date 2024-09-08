import React, { useEffect , useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import logo from './Logo_Menue.png';
import './Navbar.css';
import Modal from 'react-modal';
import Menu from './menu';
const Navbar = () => {
  const [windowOpen, setWindowOpen] = useState(false);
  

    const [modalIsOpen, setModalIsOpen] = useState(false);
  
    const openModal = () => {
      setModalIsOpen(true);
    };
  
    const closeModal = () => {
      setModalIsOpen(false);
    };
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://code.jquery.com/jquery-3.6.0.slim.min.js'; // Load jQuery
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-light ">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="d-flex align-items-center">
            <img src={logo} alt="Logo" className="navbar-brand me-2" />
            <span className="navbar-text">دریک پی</span>
          </div>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">خانه</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">درباره ما</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">تماس با ما</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">ثبت نام/ ورود</a>
            </li>
          </ul>
          <span  id= "navicon"
            style={{ 
              cursor: 'pointer', 
              fontSize: '32px', 
              position: 'absolute', 
              top: '45px', 
              left: '35px', 
              color :'#5d62ff'
             
            }}
          className=" navbar-toggler-icon " onClick={openModal}></span>
          <Modal
         isOpen={modalIsOpen}
         onRequestClose={closeModal}
         contentLabel="Example Modal"
       >
         <Menu/>
         <span 
           onClick={closeModal} 
           style={{ 
             cursor: 'pointer', 
             fontSize: '32px', 
             position: 'absolute', 
             top: '30px', 
             left: '35px', 
             color :'#5d62ff'

           }}
         >
           ✕
         </span>
       </Modal>  
        </div>
      </div>
      
    </nav>
    
  );
};

export default Navbar;