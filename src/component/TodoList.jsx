import React from "react";
import styled from "styled-components";
import ShowDays from "./ShowDays";
import AddTask from "./AddTask";
import ListTask from "./ListTask";

function TodoList() {
  return (
    <TaskContainer>
      <div className="search">
        <input type="text" placeholder="Search Task...." />
      </div>
        <DateContainer>
            <ShowDays/>
            <AddTask/>
        </DateContainer>
        <ListTask/>
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

`;