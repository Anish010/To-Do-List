import React from 'react'
import './style.css';
const Todo = () => {
  return (
    <>

      <div className="main-div">
        <div className="child-div">
          <figure>
            <img src="./images/todo.svg" alt="todologo" />
            <figcaption>Add Your List here </figcaption>
          </figure>
          <div className="addItems">
            <input type="text" placeholder="Type your task here" className="form-control" />
            <i className="fa fa-plus add-btn"></i>
          </div>
          {/*Show Items*/}
          <div className="showItems">
            <div className="eachItem">
              <h3>Apole</h3>
               <div className="todo-btn">
                    <i className="far fa-edit add-btn"></i>
                    <i className="far fa-trash-alt add-btn"></i>
                  </div>
            </div>
          </div>
          <div className="showItems">
            
              <button className="btn effect04" data-sm-link-text="Remove All"><span>Check List</span></button>
            </div>
          </div>
        </div>
    </>
  )
}

export default Todo;