import logo from './logo.svg';
import './App.css';
import {take} from "redux-saga"
import FetchData from './Components/FetchData';
function App() {

  // function* gen() {
    // console.log('Hello Sagas!')
    // yield take("start")
  //   yield 5;
  //   yield 6;
  //   yield 7;
  // }
  // let it = [...gen()]
  // console.log(it)
  // console.log(it.next())
  return (
    <div className="App">

    <FetchData/>
      {/* {it.map((item,index)=>{
        return(
          <span key={index+1}>{item}</span>
        )
      })} */}
    </div>
  );
}

export default App;
