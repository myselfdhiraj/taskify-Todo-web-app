import React, { createContext, useState } from "react";
import { getDatabase, ref, set, update } from "firebase/database";
import { app } from "../Firebase";

export const TodoContext = createContext({
  addTask: () => {},
  updateTask: () => {},
  removeTask: () => {},
});

export const TodoContextProvider = ({ children }) => {
  const [userInput, setUserInput] = useState("");
  const date = new Date().toLocaleDateString("de-DE");
  const [taskData, setTaskData] = useState(null);
  const [completed, setCompleted] = useState(false);
  const [toggleAddDiv, setToggleAddDiv] = useState(false);
  const [updateKey, setUpdateKey] = useState(null);
  const [lable, setLable] = useState(null);

  function generateUniqueID() {
    const now = new Date();
    const todayDate = +now.toISOString().slice(0, 10).replace(/-/g, "");
    const currentTime = +now.toTimeString().slice(0, 8).replace(/:/g, "");
    return todayDate * 1000000 + currentTime;
  }

  const addTaskOnDb = () => {
    setLable("Add");
    console.log(lable);
    const db = getDatabase(app);
    if (userInput != "") {
      set(ref(db, "Todo/" + generateUniqueID()), {
        Date: date,
        Task: userInput,
        Completed: completed,
      })
        .then((res) => {
          setUserInput("");
          console.log("succesadd task");
        })
        .catch((err) => {
          setUserInput("");
          console.log("addtask- " + err);
        });
    }
  };

  const updateData = () => {
    setLable("Update");
    console.log(updateKey);
    const db = getDatabase(app);
    const taskRef = ref(db, "Todo/" + updateKey);
    update(taskRef, {
      Task: userInput,
    })
      .then((res) => {
        setUserInput("");
        console.log("succesadd task");
      })
      .catch((err) => {
        setUserInput("");
        console.log("addtask- " + err);
      });
  };

  return (
    <TodoContext.Provider
      value={{
        taskData,
        setTaskData,
        userInput,
        setUserInput,
        addTaskOnDb,
        completed,
        setCompleted,
        toggleAddDiv,
        setToggleAddDiv,
        lable,
        setLable,
        date,
        updateData,
        updateKey,
        setUpdateKey,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
