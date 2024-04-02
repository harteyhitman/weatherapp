import S from '../../pages/weather.module.css'
import MainLogo from '../../assets/images/main_logo.svg'
import Cloud from '../../assets/images/Cloudy.png'
import { FaSearch } from "react-icons/fa";
import { useState } from 'react'

const Main = () => {
    const [deg, setDeg] = useState(16);
    const [city, setCity] = useState("London")
    const [time, setTime] = useState("06:09")
    const [days, setDays] = useState("Monday")
    const [fullYear, setFullYear] = useState("9 sep 24")


    return (
        <div className={S.main}>
            <div className="navbar">
                <div className="logo">
                    <img src={MainLogo} alt="" />
                </div>
                <div className="search_tablet">
                    <input type="search" placeholder='Search Location' />
                    <FaSearch id='search_icon' className={S.search_icon} />
                </div>
            </div>

            <div className="display">
                <h1>{deg}<span><sup>o</sup></span></h1>
                <div className="city">
                    <h2>{city}</h2>
                    <div className="time">
                        <span>{time}</span>-
                        <span>{days}</span>
                        <span>{fullYear}</span>
                    </div>
                </div>
                <div className="cloud">
                    <img src={Cloud} alt="" />
                </div>
            </div>

        </div>
    )
}

export default Main