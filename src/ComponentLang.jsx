import i18next from 'i18next';
import Cookies from 'js-cookie';
import React from 'react'
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

function ComponentLang() {
    const { t } = useTranslation();
    const getCurrentLang = Cookies.get('i18next') || 'en';

    console.log(getCurrentLang)
    useEffect(() => {
      if (getCurrentLang === 'ar') {
        document.body.dir = 'rtl' 
      } else {
        document.body.dir = 'ltr' 
      }
      document.title = t('app_title')
    } ,[getCurrentLang])

  return (
    <div>
      <select onChange={(e) => i18next.changeLanguage(e.target.value)}>
        <option value={'en'}>english</option>
        <option value={'ar'}>arabic</option>
        <option value={'fr'}>french</option>
      </select>

      <h2>{t('welcome_message')}</h2>
      <h2>{t('app_title')}</h2>
      <h2>{t('language')}</h2>
      <h2>{t('days_since_release' , {number_of_days:14})}</h2>
    </div>
  )
}

export default ComponentLang