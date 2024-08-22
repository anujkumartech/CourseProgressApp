import React from 'react';
import { Link } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const StudentOverview = ({ data }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Student Overview</h2>
      <table className="w-full text-left">
        <thead>
          <tr>
            <th className="py-2">Name</th>
            <th className="py-2">Grades</th>
            <th className="py-2">Attendance</th>
            <th className="py-2">Progress</th>
            <th className="py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((student, i) => (
            <tr key={i} className="border-b">
              <td className="py-2">{student.studentName}</td>
              <td className="py-2">
                {Object.entries(student.grades).map(([courseId, grade]) => (
                  <div key={courseId}>
                    {courseId}: {grade}%
                    <Link to={`/course-details/${courseId}`} className="text-blue-500 underline ml-2">
                      View Course
                    </Link>
                  </div>
                ))}
              </td>
              <td className="py-2">{student.attendance || 'N/A'}%</td>
              <td className="py-2">
                {Object.entries(student.courseProgress).map(([courseId, progress]) => (
                  <div key={courseId}>
                    {courseId}: {progress}%
                    <Link to={`/course-details/${courseId}`} className="text-blue-500 underline ml-2">
                      View Course
                    </Link>
                  </div>
                ))}
              </td>
              <td className="py-2">
                <button className="text-blue-500 underline">Details</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-6">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <XAxis dataKey="studentName" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="attendance" fill="#82ca9d" />
            <Bar dataKey="grades" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default StudentOverview;
