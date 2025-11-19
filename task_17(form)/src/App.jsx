import { useState } from "react";
import JobForm from "./components/JobForm";

export default function App() {
  return (
    <div className="p-8 font-sans flex justify-center">
      <JobForm />
    </div>
  );
}