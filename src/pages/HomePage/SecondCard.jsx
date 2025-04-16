import React from 'react'
import { useLang } from '../../contexts/LanguageContext';
import { Link } from 'react-router-dom';

function SecondCard({secondimg,secondtitle,seconddesc,progname}) {
  const { t } = useLang();
  return (
    <div className='second-card'>
        <div className="second-card-left">
            <img src={secondimg} alt="" />
        </div>
        <div className="second-card-right">
            <div className="second-card-right_title">{secondtitle}</div>
            <div className="second-card-right_description">{seconddesc}</div>
            {/* <div className="second-card-button"> </div> */}
            <Link className="second-card-button" to={progname}>
            {t('morebtn')}
            </Link>


        </div>

    </div>
  )
}

export default SecondCard