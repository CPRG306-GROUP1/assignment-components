"use client";
import React from "react";
import { useState } from "react";

const AddStudentForm = () => {
  const [formData, setFormData] = useState({
    id: "",
    firstName: "",
    lastName: "",
    dob: "",
    currentGrade: "",
  });

  const [message, setMessage] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    // TODO: Handle Submission and post to students data
    console.log("Submission handled");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log("Change handled");
  };

  return (
    <div className="flex-row p-6 mb-4 bg-blue-100 w-4/5 rounded-2xl mx-auto border-black">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="firstName"
            className="block text-sm font-medium text-gray-600 text-left pl-2"
          >
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            className="mt-1 p-2 w-full border-1 rounded-2xl border-gray-900 text-lg"
            value={formData.firstName}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="lastName"
            className="block text-sm font-medium text-gray-600 text-left pl-2"
          >
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            className="mt-1 p-2 w-full border-1 rounded-2xl border-gray-900 text-lg"
            value={formData.lastName}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="dob"
            className="block text-sm font-medium text-gray-600 text-left pl-2"
          >
            Date of Birth
          </label>
          <input
            type="date"
            id="dob"
            name="dob"
            className="mt-1 p-2 w-full border-1 rounded-2xl border-gray-900 text-lg"
            value={formData.dob}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="currentGrade"
            className="block text-sm font-medium text-gray-600 text-left pl-2"
          >
            Current Grade
          </label>
          <input
            type="number"
            id="currentGrade"
            name="currentGrade"
            className="mt-1 p-2 w-full border-1 rounded-2xl border-gray-900 text-lg"
            value={formData.currentGrade}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="mb-4">
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-md w-full hover:bg-blue-600"
          >
            Add Student
          </button>
        </div>
      </form>
      {message && (
        <div className="mt-4 text-center text-green-900">{message}</div>
      )}
    </div>
  );
};

export default AddStudentForm;
