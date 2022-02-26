import React, { useState, useEffect } from "react";
import "./style.css";

//Getting Data from local storage

const getLocalData = () => {
  const lists = localStorage.getItem("myTodoList");

  if (lists) {
    return JSON.parse(lists);
  }
  else{
    return [];
  }
};
const Todo = () => {
  const [inputdata, setInputData] = useState("");
  const [items, setItems] = useState(getLocalData());
  const [itemToEdit, setEditItem] = useState("");
  const [toggleButton, setToggle] = useState(false);
  const addItem = () => {
    if (!inputdata) {
      alert("please add the task");
    }
    else if (inputdata && toggleButton)
    {
      setItems(items.map((currTask) => {
        if (currTask.id === itemToEdit) {
          
          return { ...currTask, name: inputdata };
        }
        return currTask;
      })
      );
     setInputData([]);
    setEditItem(null);
    setToggle(false);
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

    //Edit tasks
  const editItem = (TaskId) => {
    const editedItem = items.find((currTask) => {
      return currTask.id === TaskId;
    });
    
    setInputData(editedItem.name);
    setEditItem(TaskId);
    setToggle(true);
  };

  //Remove All Tasks
  const removeAll = () => { setItems([]) };

  //Adding Local Storage
  useEffect(() => {
    localStorage.setItem("myTodoList", JSON.stringify(items))
  }, [items]);

  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure className="heading">
            <img src="./images/todo1.png" alt="todologo" />
            <div>TODO LIST</div>
          </figure>
          <div className="addItems">
            <input type="text" placeholder="Type your task here" className="form-control" value={inputdata} onChange={(event) => setInputData(event.target.value)} />
            
            {toggleButton ? (
              <i className="far fa-edit add-btn" onClick={addItem}></i>
            ) : (
              <i className="fa fa-plus add-btn" onClick={addItem}></i>
            )}
          </div>
          <div className="countItems"> {items.length} Tasks left</div>
          {/*Show Items*/}
          <div className="showItems">
            {items.map((currTask) => {
              return (
                <div className="eachItem" key={currTask.id}>
                  {currTask.name}
               <div className="todo-btn">
                    <i className="far fa-edit add-btn" onClick={()=> editItem(currTask.id)}></i>
                    <i className="far fa-trash-alt add-btn" onClick={() => deleteItem(currTask.id)}></i>
                  </div>
            </div>
              )
            })}
            
          </div>

          {/*remove all tasks*/}
          <div className="RemoveItems" >
              <button className="btn effect04" onClick={removeAll}><span>Remove ALL</span></button>
            </div>
          </div>
        </div>
    </>
  )
}

export default Todo;