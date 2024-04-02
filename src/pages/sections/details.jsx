import React from 'react'
import S from '../../pages/weather.module.css'
import { FaSearch } from "react-icons/fa";
import Indicator from './indicator';


const Details = () => {
  return (
    <div className={S.details}>
        <div className="search">
            <input type="search" placeholder='Search Location' />
            <FaSearch  className={S.search_icon}/>
        </div>
        <Indicator />
    </div>
  )
}

export default Details