import React, { useState } from "react";
import "./style.css";
const Todo = () => {
  const [inputdata, setInputData] = useState("");
  const [items, setItems] = useState([]);

  const addItem = () => {
    if (!inputdata) {
      alert("please add the task");
    }
    else {
      setItems([...items, inputdata])
      setInputData("");
    }
    
  };

  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <img src="./images/todo.svg" alt="todologo" />
            <figcaption>Add Your List here </figcaption>
          </figure>
          <div className="addItems">
            <input type="text" placeholder="Type your task here" className="form-control" value={inputdata} onChange={(event) => setInputData(event.target.value)} />
            <i className="fa fa-plus add-btn" onClick={addItem}></i>
          </div>
          {/*Show Items*/}
          <div className="showItems">
            {items.map((currTask, index) => {
              return (
                <div className="eachItem">
                  {currTask}
               <div className="todo-btn">
                    <i className="far fa-edit add-btn"></i>
                    <i className="far fa-trash-alt add-btn"></i>
                  </div>
            </div>
              )
            })}
            
          </div>

          {/*remove all tasks*/}
          <div className="showItems">
              <button className="btn effect04" data-sm-link-text="Remove All"><span>Check List</span></button>
            </div>
          </div>
        </div>
    </>
  )
}

export default Todo;