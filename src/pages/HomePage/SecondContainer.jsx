import React from 'react'
import SecondCard from './SecondCard'
import img from '../../assets/ProductDuctClouds.jpg'
function SecondContainer() {
  return (
    <div className="second-container">
      <h2>Mehsullar</h2>
      <div className="second-card-container">
      <SecondCard
        secondimg={img}
        secondtitle={'PractiCAD'}
        seconddesc={'PractiCAM, our CAM and cost estimating software, offers you the most advanced manufacturing technology. Thousands of fittings, products, parts, shapes, patterns and accessories. Most effective, efficient and economical solution for your shop.'}
        />
        <SecondCard
         secondimg={img}
         secondtitle={'PractiCAM'}
         seconddesc={'PractiCAD™, our CAD software, is the ultimate tool for a fully automated custom workflow for every aspect of your design and drafting work, completely and seamlessly integrated with your estimating and manufacturing processes.'}
        />
      </div>

    </div>
  )
}

export default SecondContainer