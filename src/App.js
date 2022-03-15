import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {


  var context = { color : 'blue', fontSize : '40px' }
  var posts = "첫 번째"
  var [product,b] = useState(['데이터1', '데이터2']);

  return (
    <div className="App">

    <div class="black-nav">

    <div> 상단 메뉴 </div>
    
    </div>
    
    <div className = "list">
      <h3> { product[0] } </h3>
      <p>3월 16일</p>
      <hr/>
      </div>

    </div>
  );
}

export default App;
