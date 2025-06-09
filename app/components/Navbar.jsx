import React from "react";

const Navbar = () => {
    return (
        <div className="flex mx-auto gap-8 my-auto mb-6 mt-6">
            <button className="bg-gray-500 rounded-xl p-2 hover:cursor-pointer">
                List Of Students
            </button>
            <button className="bg-gray-500 rounded-xl p-2 hover:cursor-pointer">
                Modify list of students
            </button>
        </div>
    );
};

export default Navbar;
