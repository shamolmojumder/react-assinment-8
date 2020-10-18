import React from 'react';
import data from './Data/MOCK_DATA.json'
import './App.css';
import Courses from './Components/Courses/Courses';

import { useEffect } from 'react';
import { useState } from 'react';

function App() {
  const [loadData,setLoadData] = useState ([])
  // console.log(data);



  useEffect(()=>{
    setLoadData(data)
  },[])

  return (
    <div className="App">
      <h1 style={{textAlign:'center'}}> Total Course: {loadData.length} </h1>
     {
       loadData.map(loadDat=>  <Courses loadDat={loadDat}></Courses> )
     }

   
    </div>
  );
}

export default App;
