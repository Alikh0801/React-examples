import { useState } from "react";
import WorkerForm from "./components/Workerform";
import WorkerList from "./components/Workerlist";
import "./index.css";


function App() {
  const [workers, setWorkers] = useState([]);

  const addWorker = (worker) => {
    setWorkers([...workers, { ...worker, id: Date.now() }]);
  };

  const deleteWorker = (id) => {
    setWorkers(workers.filter((w) => w.id !== id));
  };

  const editWorker = (id, updatedWorker) => {
    setWorkers(workers.map((w) => (w.id === id ? updatedWorker : w)));
  };

  return (
    <div className="container">
      <h1>Employes List</h1>
      <WorkerForm addWorker={addWorker} />
      <WorkerList
        workers={workers}
        deleteWorker={deleteWorker}
        editWorker={editWorker}
      />
    </div>
  );
}

export default App;