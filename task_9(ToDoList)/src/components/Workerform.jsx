import { useState } from "react";

function WorkerForm({ addWorker }) {
    const [name, setName] = useState("");
    const [job, setJob] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (name.trim() === "" || job.trim() === "") {
            alert("Bos qoymaq olmaz!");
            return;
        }

        addWorker({ name, job });
        setName("");
        setJob("");
    };

    return (
        <form onSubmit={handleSubmit} className="form">
            <input
                type="text"
                placeholder="Fullname"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="text"
                placeholder="Position"
                value={job}
                onChange={(e) => setJob(e.target.value)}
            />
            <button type="submit">Add</button>
        </form>
    );
}

export default WorkerForm;
