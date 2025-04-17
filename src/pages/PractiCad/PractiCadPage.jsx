import React from 'react'
import practicadvideo from '../../assets/Practicad.mp4';
import previewImage from '../../assets/practicad.jpg';
import img1 from '../../assets/ProductDuctClouds.jpg';
import img2 from '../../assets/ProductDuctClouds.jpg';
import ProductContent from '../../components/ProductContent';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
function PractiCadPage() {
  return (
    <div className='full-container'>
    <Header />
    <ProductContent
        videocontent={practicadvideo}
        texttoptitle={'What is PractiCAD™?'}
        texttop="
The PractiCAD™ system is designed to work with ventilation, plumbing, and drainage systems. It functions as an add-on to AutoCAD and is fully compatible with various versions of AutoCAD. PractiCAD™ also works seamlessly with the PractiCAM™ production system — which processes 3D objects, generates flat patterns, nests them on sheet metal, and produces control commands for plasma or laser cutters.
"
        textbottomtitle={'Key Advantages of PractiCAD™:'}
        textbottom="
PractiCAD™ libraries include all products and fittings available in the PractiCAM™ system (over 5,000 fully parametric and customizable templates). Additionally, the software includes pipe elements, architectural components (columns, slabs, beams, trusses, ceilings, etc.), ventilation accessories (hangers, extra inlets, valves, dampers, etc.), and cross-sections with materials. Users can also add their own graphic elements and product catalogs. All drawing elements in PractiCAD™ are editable.

"
        img1={img1}
        img2={img2}
        preview={previewImage}
    />
    <Footer />

</div>
  )
}

export default PractiCadPage