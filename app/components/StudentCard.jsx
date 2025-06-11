import React from 'react'

const StudentCard = ({ studentData }) => {
    return (
        <div className='flex-row p-6 mb-4 bg-blue-100 w-4/5 rounded-2xl mx-auto'>
            <h2 className='text-2xl font-semibold mb-4'>{studentData.name}</h2>
            <div>
                <h4 className='font-semibold border-b-1 mb-2'>Student Information</h4>
                <p>Birthdate: {studentData.dob}</p>
                <p>Grade: {studentData.currentGrade}</p>
            </div>
        </div>
    )
}

export default StudentCard