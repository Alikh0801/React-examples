import { useState } from "react";


function JobForm() {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [company, setCompany] = useState("");
    const [role, setRole] = useState("");
    const [month, setMonth] = useState("");
    const [day, setDay] = useState("");

    const companies = ["Google", "Apple", "Microsoft", "Amazon", "Facebook"];
    const roles = ["Engineer", "Manager", "Designer", "HR", "Intern"];

    const months = [
        { value: "1", label: "January" },
        { value: "2", label: "February" },
        { value: "3", label: "March" },
        { value: "4", label: "April" },
        { value: "5", label: "May" },
        { value: "6", label: "June" },
        { value: "7", label: "July" },
        { value: "8", label: "August" },
        { value: "9", label: "September" },
        { value: "10", label: "October" },
        { value: "11", label: "November" },
        { value: "12", label: "December" },
    ];

    const days = Array.from({ length: 31 }, (_, i) => i + 1);

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(
            `Name: ${name}\nPhone: ${phone}\nCompany: ${company}\nRole: ${role}\nStart Date: ${months.find(m => m.value === month)?.label} ${day}`
        );
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-6 w-full max-w-2xl bg-gray-100 p-8 rounded-lg shadow-lg"
        >
            <h2 className="text-2xl font-semibold text-center mb-4">Employee Information Form</h2>


            <div className="flex gap-4">
                <input
                    type="text"
                    placeholder="Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="flex-1 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <input
                    type="tel"
                    placeholder="Phone Number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    className="flex-1 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
            </div>


            <div className="flex gap-4">
                <div className="flex-1">
                    <label className="block mb-1 font-medium">Company</label>
                    <select
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        required
                        className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                        <option value="">-- Select Company --</option>
                        {companies.map((c, idx) => (
                            <option key={idx} value={c}>{c}</option>
                        ))}
                    </select>
                </div>

                <div className="flex-1">
                    <label className="block mb-1 font-medium">Role</label>
                    <select
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        required
                        className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                        <option value="">-- Select Role --</option>
                        {roles.map((r, idx) => (
                            <option key={idx} value={r}>{r}</option>
                        ))}
                    </select>
                </div>
            </div>


            <div className="flex gap-4">
                <div className="flex-1">
                    <label className="block mb-1 font-medium">Month</label>
                    <select
                        value={month}
                        onChange={(e) => setMonth(e.target.value)}
                        required
                        className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                        <option value="">-- Month --</option>
                        {months.map((m) => (
                            <option key={m.value} value={m.value}>{m.label}</option>
                        ))}
                    </select>
                </div>

                <div className="flex-1">
                    <label className="block mb-1 font-medium">Day</label>
                    <select
                        value={day}
                        onChange={(e) => setDay(e.target.value)}
                        required
                        className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                        <option value="">-- Day --</option>
                        {days.map((d) => (
                            <option key={d} value={d}>{d}</option>
                        ))}
                    </select>
                </div>
            </div>

            <button
                type="submit"
                className="p-3 bg-black text-white rounded hover:bg-gray-800 transition-colors"
            >
                Submit
            </button>
        </form>
    );
}
export default JobForm;