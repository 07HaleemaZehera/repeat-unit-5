import React, { useState } from "react";
import "./todo.css";
import { addTodo, delTodo, removeTodo } from "../Actions/action";
import { useDispatch, useSelector } from "react-redux";

export const Todo = () => {
  const [input, setInput] = useState("");
  const list = useSelector((state) => state.Reducer.list);
  const dispatch = useDispatch();

  return (
    <div className="main-div">
      <div className="child-div">
        <figure>
          <figcaption>_____TODO-LIST______✌ </figcaption>
        </figure>

        <div className="addItems">
          <input
            className="input-one"
            type="text"
            placeholder="✍ Add items"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button>
            <i
              className="fa fa-plus add-btn"
              onClick={() => dispatch(addTodo(input), setInput(""))}
            ></i>
          </button>
        </div>
        <div className="show-items">
          {list.map((ele) => {
            return (
              <div className="each-items" key={ele.id}>
                <h3>{ele.data}</h3>
                <button>
                  <i
                    className="fa fa-trash add-btn"
                    onClick={() => dispatch(delTodo(ele.id), setInput(""))}
                  ></i>
                </button>
              </div>
            );
          })}
        </div>
        <br></br>
        <div className="showItems">
          <button className="btn effect" data-sm-link-text="remove All" onClick={()=>dispatch(removeTodo())}>
            <span>Check List</span>
          </button>
        </div>
      </div>
    </div>
  );
};
