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
      const newInputdata = {
        id: new Date().getTime(),
        name: inputdata,
      };
      setItems([...items, newInputdata])
      setInputData("");
    }
  };

  //remove task
  const deleteItem = (TaskId) => {
    const updatedTasks = items.filter((currTask) => {
      return currTask.id !== TaskId;
    });
     setItems(updatedTasks);
  };

  //Remove All Tasks
  const removeAll = () => { setItems([]) };

  
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
            {items.map((currTask) => {
              return (
                <div className="eachItem" key={currTask.id}>
                  {currTask.name}
               <div className="todo-btn">
                    <i className="far fa-edit add-btn"></i>
                    <i className="far fa-trash-alt add-btn" onClick={() => deleteItem(currTask.id)}></i>
                  </div>
            </div>
              )
            })}
            
          </div>

          {/*remove all tasks*/}
          <div className="showItems" >
              <button className="btn effect04" data-sm-link-text="Remove All" onClick={removeAll}><span>Check List</span></button>
            </div>
          </div>
        </div>
    </>
  )
}

export default Todo;