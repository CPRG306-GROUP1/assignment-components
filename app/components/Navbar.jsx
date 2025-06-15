"use client"
import React from "react";

const Navbar = ({ setActiveTab }) => {
    return (
        <div className="bg-slate-900 w-full flex mx-auto gap-8 py-6">
            <button 
                onClick={() => setActiveTab("studentList")}
                className="bg-slate-200 mx-auto rounded-xl p-2 hover:cursor-pointer">
                List Of Students
            </button>
            <button 
                onClick={() => setActiveTab("addStudentForm")}
                className="bg-slate-200 mx-auto rounded-xl p-2 hover:cursor-pointer">
                Modify list of students
            </button>
        </div>
    );
};

export default Navbar;
