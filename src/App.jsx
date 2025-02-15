import React, { useState, useEffect } from "react";
import "./App.css";
import ToDoItem from "./todoItem";
import InputArea from "./InputArea";

function App() {
  const [inputItem, setInputItem] = useState("");
  const [items, setItems] = useState([]);

 
  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("items"));
    if (storedItems) {
      setItems(storedItems);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  function handleInput(event) {
    setInputItem(event.target.value);
  }

  function handleClick(event) {
    event.preventDefault();
    setItems((previousItems) => [...previousItems, inputItem]);
    setInputItem(""); 
  }

  function remove(id) {
    setItems((previousItems) => previousItems.filter((_, index) => index !== id));
    useEffect(() => {
      localStorage.removeItem("items", JSON.stringify(items));
    }, [items]);
  
  }

 
  function onKeyDown(e) {
    if (e.key === "Enter") {
      setItems((previousItems) => [...previousItems, inputItem]);
      setInputItem(""); 
    }

  }

  function clearAll() {
    localStorage.clear("items")
    setItems([])
  }

  return (
    <>
    <div className="main">
<div className="container">
      <div className="heading">
        <h1>Prodavnica</h1>
      </div>
      <div className="form">
        <InputArea
          takingValueFunction={handleInput}
          onClickFunction={handleClick}
          value={inputItem}
          onKeyDown={onKeyDown}        />
      
      </div>
      
     <div>
     <button onClick={clearAll} style={{border: "solid", padding: "3px"}}>
        IZBRISI SVE
      </button>
     </div>
      <div>
        <ol>
          {items.map((item, index) => (
            <ToDoItem
              removeItem={remove}
              id={index}
              key={index}
              text={item}
            />
          ))}
        </ol>
      </div>
      
    </div>


          <p>Click ONE time to CROSS OUT the item.</p>
          <p>Click SECOND time to REMOVE the line through.</p>
          <p>Double-click to remove the item in its entirety.</p>

    </div>
    </>

    
    
  );
}

export default App;