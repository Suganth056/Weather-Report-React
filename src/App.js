// import logo from './logo.svg';
/* <img src={logo} className="App-logo" alt="logo" /> */
import { useState} from 'react';
import './App.css';
import Main from './weatherComponents/Main';

function App() {
  let dom=document.querySelector('.display-content');

  let execution=false;
  const [data,setData]=useState("");
  const [city,setCity]=useState("");
  const [windSpeed,setWindSpeed]=useState("");
  const [humidity,setHumidity]=useState("");
  const [temperature,setTemperature]=useState("");
  const [region,setRegion]=useState("");
  function handleSubmit(e){
    e.preventDefault();
    const getCity=async()=>{
        const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${data}&appid=cff3d338d41039def8d271c6d7cfdfc0&units=metric`)
        if(response.ok){
          console.log(response);
          let cityData=await response.json();
          console.log(cityData);
          setCity(data);
          setTemperature(cityData.main.temp?cityData.main.temp:"");
          setWindSpeed(cityData.wind.speed?cityData.wind.speed:"");
          setHumidity(cityData.main.humidity?cityData.main.humidity:"");
          setRegion(cityData.sys.country?cityData.sys.country:"");
          console.log(city,windSpeed,humidity,temperature,region);
          execution=true;
          if(dom.classList.contains('displayC')){
            dom.classList.remove('displayC');
          }
          // dom.classList.toggle('displayC');
        }
        else{
          console.log("Error",response);
          execution=false;
          alert("Please enter valid city");
          if(!dom.classList.contains('displayC')){
            dom.classList.add('displayC')
          }
        }
        
        
    }

    getCity();
    
  }
  return (
    <div className="App">
       <Main 
       data={data}
       setData={setData}
       handleSubmit={handleSubmit}
       city={city}
       temperature={temperature}
       windSpeed={windSpeed}
       humidity={humidity}
       region={region}
       
       />
    </div>
  );
}

export default App;
