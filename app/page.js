
'use client';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import StudentCard from '../components/StudentCard';
import AddStudentForm from '../components/AddStudentForm';
import Footer from '../components/Footer';

const initialStudents = [
  { id: 1, firstName: "Alice", lastName: "Smith", dob: "2006-01-15", grade: "10" },
  { id: 2, firstName: "Bob", lastName: "Jones", dob: "2005-08-20", grade: "11" },
  { id: 3, firstName: "Carol", lastName: "Lee", dob: "2007-03-10", grade: "9" },
  { id: 4, firstName: "David", lastName: "Wong", dob: "2006-12-01", grade: "10" },
  { id: 5, firstName: "Eva", lastName: "Garcia", dob: "2004-11-11", grade: "12" }
];

export default function Home() {
  const [students, setStudents] = useState(initialStudents);

  const handleAdd = (student) => {
    setStudents([...students, { ...student, id: students.length + 1 }]);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="max-w-4xl mx-auto p-6">
        <h2 className="text-xl font-semibold mb-4">Current Students</h2>
        {students.map(student => (
          <StudentCard key={student.id} student={student} />
        ))}
        <h2 className="text-xl font-semibold mt-8 mb-4">Add New Student</h2>
        <AddStudentForm onAdd={handleAdd} />
      </main>
      <Footer>
import Image from "next/image";
import Navbar from "./components/Navbar";
import StudentCard from "./components/StudentCard";
import students from "./data/students";

export default function Home() {
  return (
    <div className="flex flex-col min-w-full bg-slate-400">
      <Navbar />
      <div>
        <h2 className="text-4xl font-semibold mb-5 py-5 text-center w-full mx-auto bg-blue-100">
          Student List
        </h2>
        {students.map((student) => (
          <StudentCard key={students.id} studentData={student} />
        ))}
      </div>
    </div>
  );
}
