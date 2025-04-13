import React from 'react'
import SecondCard from './SecondCard'
import image1 from '../../assets/fframe_2.gif'
import image2 from '../../assets/fframe_17.gif'
import { useLang } from '../../contexts/LanguageContext';

function SecondContainer() {
  const { t } = useLang();

  return (
    <div className="second-container">
        <SecondCard
        secondtitle='PractiCam'
        seconddesc={t('camshort')}
        secondimg={image1}
        />
        <SecondCard
        secondtitle='PractiCad'
        seconddesc='PractiCAD™, our CAD software, is the ultimate tool for a fully automated custom workflow for every aspect of your design and drafting work, completely and seamlessly integrated with your estimating and manufacturing processes.'
        secondimg={image2}
        />

    </div>
  )
}

export default SecondContainer