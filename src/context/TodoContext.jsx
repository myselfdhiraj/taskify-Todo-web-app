import React, { createContext, useContext, useEffect, useState } from "react";
import { getDatabase, ref, set, onValue } from "firebase/database";
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
  function generateUniqueID() {
    const now = new Date();
    const todayDate = +now.toISOString().slice(0, 10).replace(/-/g, "");
    const currentTime = +now.toTimeString().slice(0, 8).replace(/:/g, "");
    return todayDate * 1000000 + currentTime;
  }

  const addTaskOnDb = () => {
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
          console.log("addtask- " + err);
        });
    }
  };

  return (
    <TodoContext.Provider
      value={{
        taskData,
        setTaskData,
        userInput,
        setUserInput,
        addTaskOnDb
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
