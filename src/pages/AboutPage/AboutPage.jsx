import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import PagesContent from '../../components/PagesContent'
import { useLang } from '../../contexts/LanguageContext';


function AboutPage() {
  const { t } = useLang();

  return (
    <div className='full-container'>
    <Header />

    <PagesContent
    pagetitle={t('aboutus')}

    />

    <Footer/>
    </div>
  )
}

export default AboutPage