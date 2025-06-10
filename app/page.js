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
