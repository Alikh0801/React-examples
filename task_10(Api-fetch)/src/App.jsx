import { useEffect, useState } from "react";

function App() {

  const [list, setList] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/todos")
      .then(res => res.json())
      .then(data => setList(data.todos));
  }, []);

  return (
    <div>
      <h1 className="h1">To-do lists</h1>
      <ul>
        {list.map(i => (
          <li key={i.id}>{i.todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
