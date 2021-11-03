import React, {useState, useEffect} from 'react'


export default function Popups(){
  const popups = require('../assets/books/BC001.json');

  const [pop, setPop] = useState([]);
  useEffect(()=>{
    setPop(popups)
    console.log(pop)
  })
  return (
    <div>
    {
      Object.keys(pop).map(key=>{
        <div key={key}>pop[key]</div>
      })
    }
    </div>
  )
}
