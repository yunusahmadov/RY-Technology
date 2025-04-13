import React from 'react'

function PagesContent({pagetitle,pagedesc,pageimg}) {
  return (
    <div>
        <h1>{pagetitle}</h1>
        <p>{pagedesc}</p>
        <div>
            {pageimg}
        </div>
    </div>
  )
}

export default PagesContent