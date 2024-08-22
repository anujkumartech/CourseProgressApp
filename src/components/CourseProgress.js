import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const CourseProgress = ({ data }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Course Progress</h2>
      <div className="mb-6">
        {data.map((course) => (
          <div key={course.courseId} className="mb-2">
            <div className="flex justify-between text-sm font-medium">
              <span>{course.courseName}</span>
              <span>{course.progress}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-4">
              <div
                className="bg-blue-500 h-4 rounded-full"
                style={{ width: `${course.progress}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6">
        <ResponsiveContainer width="100%" height={200}>
          <BarChart 
            data={data} 
            layout="vertical"
            margin={{ top: 20, right: 0, left: 0, bottom: 20 }} // Adjusted margins
          >
            <XAxis type="number" hide />
            <YAxis 
              type="category" 
              dataKey="courseName" 
              width={150} // Increased width to prevent cutting off
            />
            <Tooltip />
            <Bar dataKey="progress" fill="#82ca9d">
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.progress > 60 ? "#82ca9d" : "#8884d8"} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default CourseProgress;
