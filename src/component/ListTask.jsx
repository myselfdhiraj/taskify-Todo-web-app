import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { MdCheckBoxOutlineBlank, MdCheckBox } from "react-icons/md";
import { TiPin, TiPinOutline } from "react-icons/ti";
import { TodoContext } from "../context/TodoContext";
import { getDatabase, ref, onValue, update } from "firebase/database";
import { app } from "../Firebase";

function ListTask() {
  const { taskData, setTaskData, completed, setCompleted } =
    useContext(TodoContext);

  useEffect(() => {
    const db = getDatabase(app);
    const taskref = ref(db, "Todo");
    onValue(taskref, (data) => {
      setTaskData(data.val());
    });
  }, [completed, setCompleted]);


  const taskDone = (key) => {
    const db = getDatabase(app);
    const taskRef = ref(db, "Todo/" + key);
    const updatedCompleted = !taskData[key]?.Completed;
    update(taskRef, {
      Completed: updatedCompleted,
    });
    setTaskData((prevData) => ({
      ...prevData,
      [key]: {
        ...prevData[key],
        Completed: updatedCompleted,
      },
    }));
  };
  


  return (
    <>
      {taskData &&
        Object.entries(taskData).map(([key, value]) => {
          return (
            <ListTasks key={key}>
              {value.Completed ? (
                <MdCheckBox
                  fontSize="25px"
                  onClick={() => taskDone(key)}
                  color="#1fe052"
                />
              ) : (
                <MdCheckBoxOutlineBlank
                  fontSize="25px"
                  onClick={() => taskDone(key)}
                />
              )}
              <div className="text">{value.Task}</div>
              <TiPinOutline fontSize="25px" />
            </ListTasks>
          );
        })}
    </>
  );
}

export default ListTask;

const ListTasks = styled.div`
  margin: 5px auto;
  width: 100%;
  gap: 5px;
  background-color: #fff;
  padding: 8px 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #e6e6e6;
  border-radius: 10px;

  .text {
    margin: auto;
    width: 88%;
    height: 30px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    padding: 4px 0px;
  }
`;
