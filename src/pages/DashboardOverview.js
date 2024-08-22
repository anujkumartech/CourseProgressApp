import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CourseProgress from '../components/CourseProgress';
import UpcomingAssignments from '../components/UpcomingAssignments';
import StudentOverview from '../components/StudentOverview';

const DashboardOverview = () => {
  const [courseProgress, setCourseProgress] = useState([]);
  const [upcomingAssignments, setUpcomingAssignments] = useState([]);
  const [students, setStudents] = useState([]);

  useEffect(() => {
    // Fetch course progress data
    axios.get('/students/STUDENT123/courses')  // Adjust STUDENT123 to the actual student ID
      .then(response => setCourseProgress(response.data))
      .catch(error => console.error('Error fetching course progress:', error));

    // Fetch upcoming assignments data
    axios.get('/students/STUDENT123/assignments')  // Adjust STUDENT123 to the actual student ID
      .then(response => setUpcomingAssignments(response.data))
      .catch(error => console.error('Error fetching upcoming assignments:', error));

    // Fetch student overview data
    axios.get('/students')
      .then(response => {
        console.log(response);
        setStudents(JSON.parse(response.data.body))
      })
      .catch(error => console.error('Error fetching students:', error));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6">Dashboard Overview</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <CourseProgress data={courseProgress} />
        <UpcomingAssignments data={upcomingAssignments} />
      </div>
      <div className="mt-6">
        <StudentOverview data={students} />
      </div>
    </div>
  );
};

export default DashboardOverview;
