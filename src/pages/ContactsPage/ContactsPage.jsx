import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import PagesContent from '../../components/PagesContent'

function ContactsPage() {
  return (
    <div className='full-container'>
    <Header />
    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d236.73402019141818!2d49.84297654118915!3d40.371297743417124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sru!2saz!4v1744745555872!5m2!1sru!2saz" width="600" height="450"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    <PagesContent/>
    <Footer/>
    </div>
  )
}

export default ContactsPage