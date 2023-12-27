import React, { useState } from "react";
import styled from "styled-components";
import ShowDays from "./ShowDays";
import AddTask from "./AddTask";
import ListTask from "./ListTask";
import { IoCreateOutline } from "react-icons/io5";


function TodoList() {
  const  [toggleAddDiv,setToggleAddDiv] = useState(false)

const toggleAddTask = ()=>{
  setToggleAddDiv((prev)=>!prev)
  console.log("clicked" + toggleAddDiv);

}

  return (
    <TaskContainer>
      <div className="search">
        <input type="text" placeholder="Search Task...." />
      </div>
      <DateContainer>
        <ShowDays />
        {toggleAddDiv ? <AddTask setToggleAddDiv={setToggleAddDiv}/>:!<AddTask/>}
        <AddTaskButton onClick={toggleAddTask}>
          <IoCreateOutline fontSize="30px" />
        </AddTaskButton>
      </DateContainer>
      <ListTask />
    </TaskContainer>
  );
}

export default TodoList;

const TaskContainer = styled.div`
  width: 500px;
  background-color: #fff;
  min-height: 600px;
  margin: 30px auto;
  padding: 20px;
  border-radius: 20px;
  @media (0 < width < 580px) {
    width: 90%;
  }
  .search {
    width: 100%;
    height: auto;
    border-radius: 10px;
    border: 2px solid #fc3b6e;
    margin: auto;
    input {
      all: unset;
      width: 95%;
      padding: 8px 10px;
    }
  }
`;

const DateContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  padding: 10px;
  position: relative;
`;

const AddTaskButton = styled.button`
all: unset;
&:hover{
  color: #333333;
}
`;