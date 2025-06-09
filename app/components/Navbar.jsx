import React from "react";

const Navbar = () => {
    return (
        <div className="bg-slate-900 w-full flex mx-auto gap-8 py-6">
            <button className="bg-slate-200 mx-auto rounded-xl p-2 hover:cursor-pointer">
                List Of Students
            </button>
            <button className="bg-slate-200 mx-auto rounded-xl p-2 hover:cursor-pointer">
                Modify list of students
            </button>
        </div>
    );
};

export default Navbar;
