import React from 'react'

function PagesContent({pagetitle,pagedesc,pagedesc2,pageimg1,pageimg2,pageimg3}) {
  return (
    <div className='content-page'>
        <h1>{pagetitle}</h1>
        <div className="content-page_desc">
        <p>{pagedesc}</p>
        <p>{pagedesc2}</p>
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