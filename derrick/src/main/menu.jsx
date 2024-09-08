import React, { useState } from 'react';
import './menu.css'; 
import logo from './Logo_Menue.png';
import credit from './credit-card.png';
import document from './document.png';
import badge from './badge-check.png';
import wallet from './wallet.png';
import orbital from './orbital.png'; 
import newImage2 from './ellipse.png'; 
import newImage1 from './group.png';
import newImage from './orbital1.png'
const Menu = () => {
    const [showAlternateContent, setShowAlternateContent] = useState(false);
    const [showLogisticsLinks, setShowLogisticsLinks] = useState(false); // New state for logistics links

    const handleTradeClick = () => {
        setShowAlternateContent(prevState => !prevState); 
    };

    const handleLogisticsClick = () => {
        setShowLogisticsLinks(prevState => !prevState); // Toggle logistics links
    };

    const handleLinkClick = () => {
        setShowLogisticsLinks(false); // Hide logistics links when one is clicked
    };

    return (
        <div classname='menu'>
            <div class=" d-flex justify-content-end align-items-center">
                <span class="navbar-text">دریک پی</span>
                <img src={logo} alt="Logo" class="navbar-brand me-2" />
            </div>
            <label className='menulabel'>دسترسی سریع</label>

            <img src={document} className='menuimg' />
            <a href="#" className='menulink'>برات الکترونیک</a>
            <img src={credit} className='menuimg1' />
            <a href="#" className='menulink1'>دریک کارت</a>
            <img src={wallet} className='menuimg2' />
            <a href="#" className='menulink2'>کیف پول دریک</a>
            <img src={badge} className='menuimg3' />
            <a href="#" className='menulink3'>کارت گارانتی</a>

            <label className='menulabel1'>منو</label>
            <a href="#" onClick={handleTradeClick} className='menulink4'>تجارت</a>

            {showAlternateContent ? (
                <div>
                    <a href="#" className='menulink5'>بانک</a>
                    <a href="#" className='menulink6'>بیمه</a>
                    <a href="#" onClick={handleLogisticsClick} className='menulink7'>مدیریت لجستیک</a>

                    {showLogisticsLinks && (
                        <div>
                            <a href="#"   onClick={handleLinkClick} className='menulink8'>خدمات فورواردر
                            </a>
                            <a href="#"    onClick={handleLinkClick} className='menulink9'>حمل ونقل
                            </a>
                        </div>
                    )}

                    <img src={newImage} className='mainimg1' alt="New" />
                    
                </div>
            ) : (
                <div>
                    <a href="#" className='menulink15'>معدن و کشاورزی</a>
                    <a href="#" className='menulink16'>گردشگری و صنایع دستی</a>
                    <a href="#" className='menulink17'>صنعت و خدمات</a>
                    <img src={orbital} className='mainimg' alt="Orbital" />
                </div>
            )}
        </div>
    );
};

export default Menu;