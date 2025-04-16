import React from 'react';
import practicamvideo from '../../assets/PractiCAM Full Demo.mp4';
import previewImage from '../../assets/practicam.jpg';
import img1 from '../../assets/ProductDuctClouds.jpg';
import img2 from '../../assets/ProductDuctClouds.jpg';
import ProductContent from '../../components/ProductContent';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function PractiCamPage() {
    return (
        <div className='full-container'>
            <Header />
            <ProductContent
                videocontent={practicamvideo}
                texttoptitle={'What is PractiCAM™?'}
                texttop="
PractiCAM™ is your new-generation automated production system for sheet metal cutting (hereinafter referred to simply as PractiCAM™).
If you already have CNC (computer numerical control) machines in your workshop, you're probably familiar with basic cutting software. PractiCAM™ can easily replace this software and continue your production process without disruption — increasing both capacity and efficiency.
If this is your first time hearing about PractiCAM™, you're in for a pleasant surprise. We’re confident PractiCAM™ will not only meet but exceed your expectations!
"
                textbottomtitle={'You may have some questions while working with the program.'}
                textbottom="In such cases, you’ll find all the answers in this user guide. All functions of the PractiCAM™ software are described clearly and in detail. There is also a helpful “How to…” section and a glossary of commonly used terms.
Remember, we’re always here to help — just give us a call or send an email to our support team.
Since PractiCAM™ is constantly evolving and receiving updates, some of the process steps, screenshots, or information in this guide might differ slightly from your software version. If you encounter any inconsistencies or issues, we recommend contacting our technical support team.
"
                img1={img1}
                img2={img2}
                preview={previewImage}
            />
            <Footer />

        </div>
    );
}

export default PractiCamPage;
