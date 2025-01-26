import React from "react";
import './Main.css';
import { FaSearch } from "react-icons/fa";
import { FaWind } from "react-icons/fa6";
import { MdOutlineWaves } from "react-icons/md";
import logo from './sun.png';



const Main=({data,setData,handleSubmit,city,temperature,windSpeed,humidity,region})=>{
    return(
        <div className="Main">
            <div className="input-box">
                <form action="" onSubmit={handleSubmit}>
                    <input type="text" 
                    placeholder="Enter City"
                    value={data}
                    onChange={(e)=>setData(e.target.value)}
                    />
                    <button type="submit"><FaSearch /></button>
                </form>
            </div>
            <div className="display-content displayC">
                <div className="content-box">
                    <img src={logo} alt="imd" />
                    <h2>{temperature}<sup>o</sup>C</h2>
                    <h1 className="city-name">{city.toUpperCase()}</h1>
                    <h3 className="country-code">{region}</h3>
                </div>
                <div className="details">
                    <div>
                        <h1><MdOutlineWaves /></h1>
                        <h1>{humidity}</h1>
                        <p>Humidity</p>
                    </div>
                    <div>
                        <h1><i><FaWind /></i></h1>
                        <h2>{windSpeed}</h2>
                        <p>Wind-Speed</p>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
export default Main;