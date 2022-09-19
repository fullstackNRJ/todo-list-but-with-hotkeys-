import React from "react";
import "./App.css";
import { TodoProvider, TodoList } from "./../TodoList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TodoProvider>
          <TodoList />
        </TodoProvider>
      </header>
    </div>
  );
}

export default App;
