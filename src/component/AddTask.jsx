import React, { useContext } from "react";
import styled from "styled-components";
import { RxCross1 } from "react-icons/rx";
import { TodoContext } from "../context/TodoContext";

function AddTask({ setToggleAddDiv }) {
  const { setUserInput,userInput,addTaskOnDb } = useContext(TodoContext);
  const submitHandler = (e) => {
    e.preventDefault();
    addTaskOnDb()
  };

  return (
    <AddTaksContainer>
      <div className="closebutton">
        <RxCross1
          fontSize="30px"
          onClick={() => setToggleAddDiv((prev) => !prev)}
        />
      </div>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="task">
            Task Name
            <input type="text" id="task"
            value={userInput}
            onChange={(e)=> setUserInput(e.target.value)}
            placeholder="Write Task here..." />
          </label>
        </div>
        <div>
          <button>Add Task</button>
        </div>
      </form>
    </AddTaksContainer>
  );
}

export default AddTask;

const AddTaksContainer = styled.div`
  width: 80%;
  background-color: #fff;
  position: absolute;
  margin: auto;
  left: 0;
  right: 0;
  padding: 30px 20px;
  box-shadow: 1px 2px 19px -5px #7a7a7a;
  .closebutton {
    cursor: pointer;
    position: absolute;
    display: grid;
    top: 10px;
    right: 20px;
    justify-content: flex-end;
  }
  div {
    width: 90%;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    input {
      all: unset;
      border-radius: 5px;
      border: 2px solid #000;
      color: #000;
      width: 90%;
      margin: 5px auto;
      padding: 10px 15px;
    }
    button {
      all: unset;
      background-color: #fc3b6e;
      width: 90px;
      text-align: center;
      color: #fff;
      font-size: 1.1rem;
      padding: 8px 15px;
      border-radius: 10px;
      font-weight: 500;
      margin: 10px auto 0;
      border: 2px solid transparent;
      &:hover {
        border: 2px solid #fc3b6e;
        background-color: #fff;
        color: #000;
      }
    }
  }
`;
