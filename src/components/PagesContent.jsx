import React from 'react'

function PagesContent({pagetitle,pagedesc,pagedesc2,pageimg1,pageimg2,pageimg3,desctitle1,desctitle2,pagedesc3}) {
  return (
    <div className='content-page'>
        <h1>{pagetitle}</h1>
        <div className="content-page_desc">
        <p>{pagedesc}</p>
        <div>
        <h3>{desctitle1}</h3>
        <p>{pagedesc2}</p>
        </div>
        <div>
        <h3>{desctitle2}</h3>
        <p>{pagedesc3}</p>
        </div>
        </div>
        <div>
        <div className="content-page_images">
        <img src={pageimg1} alt="" />
          <img src={pageimg2} alt="" />
          <img src={pageimg3} alt="" />
        </div>

        </div>
    </div>
  )
}

export default PagesContent