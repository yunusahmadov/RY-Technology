import React from 'react'
import LanguageSelector from './LanguageSelector'
import { useLang } from '../contexts/LanguageContext';

function Header() {
        const {t,language,setLanguage}=useLang();
  return (
    <header >
        <div className="container">
            <div className="header-container">
            <div className="logo">
                Logo
            </div>
            <nav>
                <ul>
                    <li>{t('home')}</li>
                    <li>{t('products')}</li>
                    <li>{t('contacts')}</li>
                    <li><LanguageSelector/></li>
                </ul>
            </nav>
            </div>

           
        </div>
    </header>
  )
}

export default Header