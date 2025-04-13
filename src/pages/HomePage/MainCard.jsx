import React from 'react'
import { Link } from 'react-router-dom';
import { useLang } from '../../contexts/LanguageContext';


function MainCard({maintitle,maindesc,mainimg,linkto}) {
     const { t } = useLang();
  
  return (
    <div className='main-card'>
        <div className="main-card-left">
            <div className="main-card-left_title">
              
            {maintitle}
            </div>
            <div className="main-card-left_description">
  
            {maindesc}
            </div>
            <div className="main-card-left_button">
            <Link to={linkto}> 
            {t('morebtn')}
            </Link>
            </div>

        </div>
        <div className="main-card-right">
            <div className="main-card-right_image">
                <img src={mainimg} alt="" />
            </div>
        </div>
    </div>
  )
}

export default MainCard