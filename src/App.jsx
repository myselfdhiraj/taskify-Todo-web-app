import Header from "./component/Header"
import TodoList from "./component/TodoList"
import { TodoContextProvider } from "./context/TodoContext"

function App() {

  return (
    <TodoContextProvider>
    <Header/>
    <TodoList/>
    </TodoContextProvider>
  )
}

export default App