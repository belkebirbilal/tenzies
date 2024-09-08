import React, {useState,useEffect} from 'react';
import './App.css';

function App() {
  const [list , setList] = useState([])
  const [isActive , setActive] = useState(false)
  useEffect(() => {
    const newList = []
    for (let i=0 ; i<10 ; i++) {
      newList.push(Math.ceil(Math.random() * 9))
    }
    setList(newList)
  },[])
  function handleClick() {
    const container = document.querySelector('.container')
    const childs = container.querySelectorAll('div')
    const newList = []
    let congrats = true
    childs.forEach(el => {
      if(el.className !== "active") {
        congrats = false
        newList.push(Math.ceil(Math.random() * 9))
      } else {
        newList.push(el.innerHTML)
      }
    })
    setActive(congrats)
    setList(newList)
  }

  function active(event) {
    event.target.className = "active"
  }

  function reRender() {
    const container = document.querySelector('.container')
    const childs = container.querySelectorAll('div')
    childs.forEach(el => {
      el.removeAttribute('class')
    })
    handleClick()
    setActive(false)
  }
  return (
    <div className="App">
      <header>
        <h1>Tenzies</h1>
        <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      </header>
      <div className='container'>{list.map(
        (el,index) => {
          return <div key={`key${index}`} onClick={active}>{el}</div>
        })}
      </div>
      <button onClick={handleClick}>Roll</button>
      <div className='congratulation' style={{
        display: isActive ? "block" : "none"
      }} onClick={reRender}>congratulation</div>
    </div>
  );
}

export default App;
