import React from 'react'
import LanguageSelector from './LanguageSelector'
import { useLang } from '../contexts/LanguageContext';
import { NavLink } from "react-router-dom";
import logo from '../assets/newlogo.png'
function Header() {
  const { t } = useLang();

  return (
    <header>
      <div className="container">
        <div className="header-container">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <nav>
            <ul>
              <li>
                <NavLink 
                  to="/" 
                  className={({ isActive }) => isActive ? 'active-link' : ''}
                >
                  {t('home')}
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/about-us" 
                  className={({ isActive }) => isActive ? 'active-link' : ''}
                >
                  {t('aboutus')}
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/services" 
                  className={({ isActive }) => isActive ? 'active-link' : ''}
                >
                  {t('services')}
                </NavLink>
              </li>
              <li>
                {/* <NavLink 
                  to="/contacts" 
                  className={({ isActive }) => isActive ? 'active-link' : ''}
                >
                  {t('contacts')}
                </NavLink> */}
              </li>
              <li><LanguageSelector /></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header;
