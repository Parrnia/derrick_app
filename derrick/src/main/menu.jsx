import React, { useState } from 'react';
import styles from'./menu.module.css'; 
import logo from './Logo_Menue.png';
import credit from './credit-card.png';
import document from './document.png';
import badge from './badge-check.png';
import wallet from './wallet.png';
import orbital from './orbital.png'; 
import newImage2 from './ellipse.png'; 
import newImage1 from './group.png';
import newImage from './orbital1.png';
import instagram from './instagram.png';
import linkdin from './linkedin.png';
import telegrm from './telegram.png';
const Menu = () => {
    const [showAlternateContent, setShowAlternateContent] = useState(false);
    const [showLogisticsLinks, setShowLogisticsLinks] = useState(false);

    const handleTradeClick = () => {
        setShowAlternateContent(prevState => !prevState);
    };

    const handleLogisticsClick = () => {
        setShowLogisticsLinks(prevState => !prevState);
    };

    const handleLinkClick = () => {
        setShowLogisticsLinks(false);
    };

    return (
        <div className={styles.menu}>
            <div className="d-flex justify-content-end align-items-center">
                <span className={styles.navbarText}>دریک پی</span>
                <img src={logo} alt="Logo" className="navbar-brand me-2" />
            </div>
            <label className={styles.menulabel}>دسترسی سریع</label>

            <img src={document} className={styles.menuimg} alt="Document" />
            <a href="#" className={styles.menulink}>برات الکترونیک</a>
            <img src={credit} className={styles.menuimg1} alt="Credit" />
            <a href="#" className={styles.menulink1}>دریک کارت</a>
            <img src={wallet} className={styles.menuimg2} alt="Wallet" />
            <a href="#" className={styles.menulink2}>کیف پول دریک</a>
            <img src={badge} className={styles.menuimg3} alt="Badge" />
            <a href="#" className={styles.menulink3}>کارت گارانتی</a>

            <label className={styles.menulabel1}>منو</label>
            <a href="#" onClick={handleTradeClick} className={styles.menulink4}>تجارت</a>

            {showAlternateContent ? (
                <div>
                    <a href="#" className={styles.menulink5}>بانک</a>
                    <a href="#" className={styles.menulink6}>بیمه</a>
                    <a href="#" onClick={handleLogisticsClick} className={styles.menulink7}>مدیریت لجستیک</a>

                    {showLogisticsLinks && (
                        <div>
                            <a href="#" onClick={handleLinkClick} className={styles.menulink8}>خدمات فورواردر</a>
                            <a href="#" onClick={handleLinkClick} className={styles.menulink9}>حمل ونقل</a>
                        </div>
                    )}

                    <img src={newImage} className={styles.mainimg1} alt="New" />
                </div>
            ) : (
                <div>
                    <a href="#" className={styles.menulink15}>معدن و کشاورزی</a>
                    <a href="#" className={styles.menulink16}>گردشگری و صنایع دستی</a>
                    <a href="#" className={styles.menulink17}>صنعت و خدمات</a>
                    <img src={orbital} className={styles.mainimg} alt="Orbital" />
                </div>
            )}
            <div className={styles.socialcontainer}>
                <img src={instagram} className={styles.social} id='social1' alt="Instagram" />
                <img src={linkdin} className={styles.social} id='social2' alt="LinkedIn" />
                <img src={telegrm} className={styles.social} id='social3' alt="Telegram" />
            </div>
        </div>
    );
};

export default Menu;