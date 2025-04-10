import React from 'react'
import { useLang } from '../contexts/LanguageContext';

function LanguageSelector() {
    const {language,setLanguage}=useLang();

  return (
    <select value={language} onChange={(e)=>setLanguage(e.target.value)}>
        <option value="az">Aze</option> 
        <option value="en">Eng</option>
    </select>
  )
}

export default LanguageSelector