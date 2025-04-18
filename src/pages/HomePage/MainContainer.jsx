import React from 'react'
import MainCard from './MainCard'
import image from '../../assets/ProductDuctClouds.jpg'
import { useLang } from '../../contexts/LanguageContext';

function MainContainer() {
   const { t } = useLang();
  return (
    <div className='main-container'>
      <MainCard
        maintitle = {t('aboutus')}
        mainimg={image}
        maindesc={t('about-desc')}
        linkto={'/about-us'}
      />
      <MainCard
      maintitle={t('services')}
      maindesc={t('services-desc')}
      mainimg={image}
      linkto={'/services'}
      />
    </div>
  )
}

export default MainContainer