import React from 'react';
import './styles.css';
import banner from '../../assets/idslogan-22.png'

function Header() {
    return (
        <div className="header-root">
            <div className="banner-img">
                <img src={banner} />
            </div>
            <h2>07 e 08 - 14 e 22 de novembro de 2020.</h2>
        </div>
    )
}

export default Header;
