import React from 'react'

function SecondCard({secondimg,secondtitle,seconddesc}) {
  return (
    <div className='second-card'>
        <div className="second-card-left">
            <img src={secondimg} alt="" />
        </div>
        <div className="second-card-right">
            <div className="second-card-right_title">{secondtitle}</div>
            <div className="second-card-right_description">{seconddesc}</div>
            <div className="second-card-button">Daha etrafli</div>


        </div>

    </div>
  )
}

export default SecondCard