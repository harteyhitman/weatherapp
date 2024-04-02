import S from '../../pages/weather.module.css'
import { temp } from '../../data/data'
const Indicator = () => {
    return (
        <div className={S.indicator}>
            <h4>Weather Details</h4>
            <h3>thurderstorm with light drizzle</h3>
            <div className="temperature">
                {temp.map((temps) => (
                    <div key={temps.id} className="temp_cont">
                        <p>{temps.name}</p>
                        <div className="indict">
                            <p>{temps.no}</p>
                           <img className='deg-icons' src={temps.img} alt="" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Indicator