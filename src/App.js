/* eslint-disable */

import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {


  var context = { color : 'blue', fontSize : '40px' }
  var posts = "첫 번째"
  var [loadView, chaView] = useState(0);
  var [product,b] = useState(['데이터1', '데이터2', '데이터3']);



  function dataCha(){

    //b(['데이터1', '데이터4', '데이터3']);
    var newArray = [...product];

    
    newArray[1] = "데이터4";
    b(newArray);

  }

  function dataTest(){

    var a =  [1,2,3,4]
    var b = a;
    a[1] = 3;
    console.log (b[1]);
  }

  function Mdodal(){
    return ( 
      <div className="modal">
      <h2>제목</h2>
      <p>날짜</p>
      <p>상세내용</p>
      </div>
    )
  }

  return (
  <div className="App">

    <div class="black-nav">

      <div> 상단 메뉴 </div>
    
    </div>
    
    <div className = "list">
      <h3> { product[0] } </h3>
      <span onClick={() => { chaView(loadView+1) } }><button>{loadView}</button></span>0
      <p>3월 16일</p>
      <hr/>
    </div>
    <div className = "list">
      <h3> { product[1] } </h3>
      <span onClick={() => { dataCha(); }}>변경</span>
      <p>3월 16일</p>
      <hr/>
    </div>   
    <div className = "list">
      <h3> { product[2] } </h3>
      <p>3월 16일</p>
      <span onClick={() => { dataTest();}}>테스트</span>
      <hr/>
    </div>  
    <Mdodal>Modal test</Mdodal>

     


      
  </div>

  );
}

export default App;
