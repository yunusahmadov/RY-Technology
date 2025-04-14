import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import PagesContent from '../../components/PagesContent'
import { useLang } from '../../contexts/LanguageContext';
import image from '../../assets/ProductSpiralPipe.jpg'


function AboutPage() {
  const { t } = useLang();

  return (
    <div className='full-container'>
    <Header />

    <PagesContent
    pagetitle={t('aboutus')}
    pagedesc={t('about1')}

    pagedesc2={t('about2')}
pageimg1={image}
pageimg2={image}
pageimg3={image}

    />

    <Footer/>
    </div>
  )
}

export default AboutPage