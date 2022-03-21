/* eslint-disable */

import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {


  var context = { color : 'blue', fontSize : '40px' }
  var posts = "첫 번째"
  var [loadView, chaView] = useState(0);
  var [product,b] = useState(['데이터1', '데이터2', '데이터3']);
  var [douproduct,c] = useState(['1번' , '2번',  '3번'])
  var [modal, modalCha] = useState(false);
  var testArray = [1,2,3];
  var [opArray, opCha] = useState(['기사1', '기사2', '기사3']);
  var [setNum, setCha] = useState(0);




  let [inputTest, inputCha] = useState('');

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



  return (
  <div className="App">

    <div className="black-nav">

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
    {/* <button onClick={() =>{ setCha(0) }}>first</button>   
    <button onClick={() =>{ setCha(1) }}>second</button>   
    <button onClick={() =>{ setCha(2) }}>third</button>    */}
    <div className = "list">
      <h3> { product[2] } </h3>
      <p>3월 16일</p>
      <span onClick={ () =>modalCha(!modal) }>테스트</span>
      <hr/>
    </div>  

    { douproduct.map(function(num, i){ // 두번째 패러미터 정의.

      return( <div className="list" key={i}>
            <h3 onClick ={()=>{setCha(i)}}> { num } </h3>
            <hr/>
            </div>)
    })}

    {
      modal === true
    ?<Mdodal product={product} setNum={setNum} opArray={opArray}>Modal test</Mdodal>
    : null
    }
     

    {/* {inputTest}
     <input onChange={(e) => {inputCha(e.target.value)}}/>     */}


  </div>




  );
}

function Mdodal(props){
  return ( 
    <div className="modal">
    <h2>제목 { props.opArray[props.setNum] } </h2>
    <p>날짜</p>
    <p>상세내용</p>
    </div>
  )
}



export default App;
