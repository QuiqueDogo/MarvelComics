import React from 'react';
import './header.css';
import logo from './marvelLogo.svg';

class Header extends React.Component{
    render(){
    return (
        <div className="header">
            <img src={logo} alt="LogoMarvel" className="logoMarvel"/>
        </div>
    );
}
}

export default Header;