import React from 'react';
import './App.css';
import MyEditor from './Components/TextArea'
import CustomCanvas from './Components/CustomCanvas'
import CodeEditor from './Components/CodeEditor'
import Navbar from './Components/Navbar'


function App() { 
  return (
    <div className="App">
    <Navbar />
      <div className="main-div">
        <div className="right-part">
         <CodeEditor />
       </div>
       <div className="left-part">
         <MyEditor />
         <CustomCanvas />
      </div> 
    </div>
  </div>
  );
}

export default App;
