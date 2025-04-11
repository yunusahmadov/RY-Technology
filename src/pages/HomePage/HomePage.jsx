import React from 'react'
import { useLang } from '../../contexts/LanguageContext';
import LanguageSelector from '../../components/LanguageSelector';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import MainContainer from './MainContainer';
import SecondContainer from './SecondContainer';


function HomePage({}) {

    const {t,language,setLanguage}=useLang();

  return (
    <div className='full-container'>
    <Header />
    <MainContainer/>
    <SecondContainer/>
    <Footer/>
    </div>


  )
}

export default HomePage

{/* <div>
<h1>{t('welcome')}</h1>

</div>
<LanguageSelector/> */}