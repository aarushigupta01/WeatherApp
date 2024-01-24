import React from 'react'
import img from './c.webp'


export const Weather = (props) => {
 
  return (
    <div>
    <div >
   
    <h1 className="flex flex-col items-center text-yellow-500 text-5xl p-9 font-extrabold font-sans ">Mosam beiymaan</h1>
     <span className='text-yellow-300 items-center flex flex-col'>Mosam ka kya hai haal , janiye with  Mosam Beiymaan</span>
     
<div className='flex flex-col items-center '>
    <div className='flex flex-col items-center  border-2 border-white w-[420px] h-[520px] rounded-[20px] bg-white shadow-inner shadow-blue-400 mt-3'>
    
    
     <img src={img} className="h-[250px]" alt='No image'/>
      <h1 className='text-yellow-800 text-4xl mt-8'>Weather</h1>
     <h2 className='text-yellow-600 text-4xl mt-5'>ForeCasts</h2>
     <button type="submit" className="bg-yellow-700 text-white text-2xl mt-8 border-2 border-white rounded-full p-4 shadow-inner shadow-yellow-300 "  onClick={props.toggle}>Get Started</button>
     </div>
    </div>
    </div>
    </div>

  )
}

