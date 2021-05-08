import React from 'react';
import style from './header.module.css';
import logo from './marvelLogo.svg';

class Header extends React.Component{
    render(){
    return (
        <div className={style.header}>
            <img src={logo} alt="LogoMarvel" className={style.logoMarvel}/>
        </div>
    );
}
}

export default Header;