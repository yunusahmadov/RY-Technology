import React from 'react'
import image from '../../assets/ProductDuctClouds.jpg'
function MainCard({maintitle,maindesc}) {
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
            Daha ətraflı
            </div>

        </div>
        <div className="main-card-right">
            <div className="main-card-right_image">
                <img src={image} alt="" />
            </div>
        </div>
    </div>
  )
}

export default MainCard