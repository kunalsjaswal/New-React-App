import './App.css';
import Navbar from './components/Navbar';
import LoadingBar from 'react-top-loading-bar'

import React, { useState } from 'react'
import News from './components/News';

// react router 

import{
  BrowserRouter as Router,
  Routes,
  Route
}from "react-router-dom"

const App=()=>{

  const [progress, setProgress] = useState(0)
  //api key exporting from .enc.local file
  const apiKey=process.env.REACT_APP_NEWS_API;

    return (
      
      <Router>

        <Navbar/>
        <LoadingBar
        color='red'
        height={4}
        progress={progress}
        // onLoaderFinished={() => setProgress(0)}
      />
        <Routes>
          <Route exact path="/" element={<News apiKey={apiKey} setProgress={setProgress} key="general"  pagesize={12} country="us" category="general"/>}/>
          <Route exact path="/business" element={<News apiKey={apiKey} setProgress={setProgress} key="business" pagesize={12} country="us" category="business"/>}/>
          <Route exact path="/entertainment" element={<News apiKey={apiKey} setProgress={setProgress} key="entertainment" pagesize={12} country="us" category="entertainment"/>}/>
          <Route exact path="/health" element={<News apiKey={apiKey} setProgress={setProgress} key="health" pagesize={12} country="us" category="health"/>}/>
          <Route exact path="/science" element={<News apiKey={apiKey} setProgress={setProgress} key="science" pagesize={12} country="us" category="science"/>}/>
          <Route exact path="/sports" element={<News apiKey={apiKey} setProgress={setProgress} key="sports" pagesize={12} country="us" category="sports"/>}/>
          <Route exact path="/technology" element={<News apiKey={apiKey} setProgress={setProgress} key="technology" pagesize={12} country="us" category="technology"/>}/>


        </Routes>
              

      </Router>
      
    )
}
export default App