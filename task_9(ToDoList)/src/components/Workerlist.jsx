import { useState } from "react";

function WorkerList({ workers, deleteWorker, editWorker }) {
    const [editId, setEditId] = useState(null);
    const [editName, setEditName] = useState("");
    const [editJob, setEditJob] = useState("");

    const startEdit = (worker) => {
        setEditId(worker.id);
        setEditName(worker.name);
        setEditJob(worker.job);
    };

    const saveEdit = () => {
        editWorker(editId, { id: editId, name: editName, job: editJob });
        setEditId(null);
        setEditName("");
        setEditJob("");
    };

    return (
        <ul>
            {workers.map((w) => (
                <li key={w.id}>
                    {editId === w.id ? (
                        <>
                            <input
                                value={editName}
                                onChange={(e) => setEditName(e.target.value)}
                            />
                            <input
                                value={editJob}
                                onChange={(e) => setEditJob(e.target.value)}
                            />
                            <button onClick={saveEdit}>Save</button>
                        </>
                    ) : (
                        <>
                            <div>
                                <strong>{w.name}</strong> — {w.job}
                            </div>
                            <div>
                                <button onClick={() => startEdit(w)}>Edit</button>
                                <button onClick={() => deleteWorker(w.id)}>Delee</button>
                            </div>
                        </>
                    )}
                </li>
            ))}
        </ul>
    );
}

export default WorkerList;
