import './App.css'
import MyButton from "./components/MyButton.jsx";
import {useState} from "react";

function App() {
  const [count, setCount] = useState(0);
  const handleClick = () =>{
    setCount(count => count + 1);
  }
  return (
    <>
      {/*<Profile/>*/}
        {/*<ShoppingList/>*/}
        {/*각 컴퍼넌트들이 자율적으로 Count의 값이 상태관리 되는 것에 집중하자.*/}
        <MyButton count={count} onClick={handleClick}/>
        <MyButton count={count} onClick={handleClick}/>

  </>
  )
}

export default App
