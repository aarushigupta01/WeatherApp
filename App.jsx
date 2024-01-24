import { useState } from "react";

import "./App.css";
import { Weather } from "./Weather";
import { Mosam } from "./Mosam";
import axios from "axios";
function App() {
  const[obj,setObj]=useState(
    {
    }
  )
  const [click, setClick] = useState(false);
  const handleClick = () => {

    click ? setClick(false) : setClick(true);
  };
  const [city,setCity]=useState("")
  const inputCity=(e)=>{
    setCity(e.target.value);
  }
  const fetchData=(e)=>{
    e.preventDefault();                          
    try{
      axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=f2448c0442822218ff632caea90dfa51&units=metric`).then(res=>setObj(res.data))
      setCity("")
    }catch(err){
      console.log(err);
    }
  }
  console.log(obj)
  return (
   
    <>
      <div className="flex">
      <div className={click?"translate-x-0 transition-all duration-500 ease-in-out": "translate-x-full  z-10 transition-all duration-[2s] ease-in-out "}>
      <Weather toggle={handleClick} />
      </div>
      <Mosam setCity={inputCity} fetch={fetchData} data={obj} city={city}/>
      </div>
    
    </>
  );
}

export default App;
