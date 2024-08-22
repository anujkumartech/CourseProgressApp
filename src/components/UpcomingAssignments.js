import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

const UpcomingAssignments = ({ data }) => {
  const assignments = [
    { name: 'Completed', value: data.filter(a => a.completionStatus === 'Completed').length },
    { name: 'Pending', value: data.filter(a => a.completionStatus === 'Pending').length },
  ];

  const COLORS = ['#0088FE', '#FF8042'];

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Upcoming Assignments</h2>
      <ul className="list-disc pl-5 mb-6">
        {data.map((assignment, index) => (
          <li key={index} className="mb-1">
            {assignment.assignmentName}: {assignment.dueDate}
          </li>
        ))}
      </ul>
      <div className="mt-6">
        <ResponsiveContainer width="100%" height={200}>
          <PieChart>
            <Pie
              data={assignments}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {assignments.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default UpcomingAssignments;
