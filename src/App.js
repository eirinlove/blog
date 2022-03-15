import logo from './logo.svg';
import './App.css';

function App() {


  var context = { color : 'blue', fontSize : '40px' }
  
  return (
    <div className="App">

    <div class="black-nav">

    <div> 상단 메뉴 </div>
    
    </div>
    
    <h4>{ context }</h4>
    
    </div>
  );
}

export default App;
