import React from 'react'
import LanguageSelector from './LanguageSelector'
import { useLang } from '../contexts/LanguageContext';
import { NavLink } from "react-router-dom";

function Header() {
  const { t } = useLang();

  return (
    <header>
      <div className="container">
        <div className="header-container">
          <div className="logo">
            Logo
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
                  to="/products" 
                  className={({ isActive }) => isActive ? 'active-link' : ''}
                >
                  {t('products')}
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/contacts" 
                  className={({ isActive }) => isActive ? 'active-link' : ''}
                >
                  {t('contacts')}
                </NavLink>
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
