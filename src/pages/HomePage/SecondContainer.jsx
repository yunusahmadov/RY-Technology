import React from 'react'
import SecondCard from './SecondCard'
import image1 from '../../assets/fframe_2.gif'
import image2 from '../../assets/fframe_17.gif'

function SecondContainer() {
  return (
    <div className="second-container">
        <SecondCard
        secondtitle='PractiCam'
        seconddesc='PractiCAM, our CAM and cost estimating software, offers you the most advanced manufacturing technology. Thousands of fittings, products, parts, shapes, patterns and accessories. Most effective, efficient and economical solution for your shop'
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