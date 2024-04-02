import React from 'react'
import S from '../pages/weather.module.css'
import Main from './sections/main'
import Details from './sections/details'

const Weather = () => {
  return (
    <div className={S.container}>
        <Main />
        <Details />
    </div>
  )
}

export default Weather