import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import PagesContent from '../../components/PagesContent'
import { useLang } from '../../contexts/LanguageContext';
import image from '../../assets/ProductSpiralPipe.jpg'

function ServicesPage() {
    const { t } = useLang();
  
  return (

   <div className='full-container'>
    <Header />
    <PagesContent
    pagetitle={t('services')}
    pagedesc={t('service1')}

    pagedesc2={t('service2')}
    pagedesc3={t('service3')}

    desctitle1={t('desctitle1')}
    desctitle2={t('desctitle2')}

pageimg1={image}
pageimg2={image}
pageimg3={image}

    />
    <Footer/>   
    </div>
  )
}

export default ServicesPage