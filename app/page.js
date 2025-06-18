"use client";
import { act, useState } from "react";
import Image from "next/image";
import Navbar from "./components/Navbar";
import StudentCard from "./components/StudentCard";
import students from "./data/students";
import AddStudentForm from "./components/AddStudentForm";

export default function Home() {
  const [activeTab, setActiveTab] = useState("studentList");

  return (
    <div className="flex flex-col min-w-full bg-slate-400 min-h-screen">
      <Navbar setActiveTab={setActiveTab} />

      {activeTab === "studentList" && (
        <div>
          <h2 className="text-4xl font-semibold mb-5 py-5 text-center w-full mx-auto bg-blue-100">
            Student List
          </h2>
          {students.map((student) => (
            <StudentCard key={student.id} studentData={student} />
          ))}
        </div>
      )}

      {activeTab === "addStudentForm" && (
        <div>
          <h2 className="text-4xl font-semibold mb-5 py-5 text-center w-full mx-auto bg-blue-100">
            Add New Student
          </h2>
          <AddStudentForm />
        </div>
      )}
    </div>
  );
}
