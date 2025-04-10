import React from 'react'
import MainCard from './MainCard'

function MainContainer() {
  return (
    <div className='main-container'>
      <MainCard
        maintitle = 'Haqqımızda'
        maindesc={'          RY technology- havalandırma, kondisionerləşdirmə və isitmə sistemləri istehsalı ilə məşğul olan müəssisələr üçün istehsal proseslərini avtomatlaşdırmağa yönəlmiş qabaqcıl proqram həlləri təqdim edir. Amerikanın texnologiya şirkəti Metalab-ın Azərbaycandakı rəsmi tərəfdaşıdır.'}
      />
      <MainCard
      maintitle='Xidmətlərimiz'
      maindesc={'RY technology- havalandırma, kondisionerləşdirmə və isitmə sistemləri istehsalı ilə məşğul olan müəssisələr üçün istehsal proseslərini avtomatlaşdırmağa yönəlmiş qabaqcıl proqram həlləri təqdim edir. Amerikanın texnologiya şirkəti Metalab-ın Azərbaycandakı rəsmi tərəfdaşıdır.'}
      
      />
    </div>
  )
}

export default MainContainer