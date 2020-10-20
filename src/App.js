import React from 'react';
import data from './Data/MOCK_DATA.json'
import './App.css';
import Courses from './Components/Courses/Courses';

import { useEffect } from 'react';
import { useState } from 'react';
import Cart from './Components/Cart/Cart';

function App() {
  const [loadData,setLoadData] = useState ([])
  // console.log(loadData);
  const [cart,setCart]=useState([]);

  
  // console.log(data);
  const handleBtn=(input)=>{
    const newCart=[...cart,input]
    setCart(newCart)
  }


  useEffect(()=>{
    setLoadData(data)
  },[])

  return (
    <div className="App">
    
      <h1 style={{textAlign:'center'}}> Total Course: {loadData.length} </h1>
      <Cart cart={cart}></Cart>
     {
       loadData.map(loadDat=>  <Courses loadDat={loadDat} handleBtn={handleBtn} key={loadDat.price}></Courses> )
     }

    </div>
  );
}

export default App;
