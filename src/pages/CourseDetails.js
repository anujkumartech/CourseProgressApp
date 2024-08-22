import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const CourseDetails = () => {
  const { courseId } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    axios.get(`/courses/${courseId}`)
      .then(response => {
        const parsedData = response.data;
        setCourse(parsedData);
      })
      .catch(error => console.error('Error fetching course details:', error));
  }, [courseId]);

  if (!course) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Course Details</h1>
      
      <div className="mb-4">
        <p><strong>Course Name:</strong> {course.courseName}</p>
        <p><strong>Instructor:</strong> {course.instructor}</p>
        <p><strong>Description:</strong> {course.description}</p>
      </div>
      
      <hr className="my-4" />

      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Course Syllabus</h2>
        <ul className="list-decimal pl-5">
          {course.modules && course.modules.map((module, index) => (
            <li key={index}>{module.moduleName}</li>
          ))}
        </ul>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h2 className="text-xl font-semibold mb-2">Module Progress</h2>
          <ul>
            {course.modules && course.modules.map((module, index) => (
              <li key={index} className="mb-2">
                {module.moduleName}: 
                <div className="w-full bg-gray-200 rounded-full h-4">
                  <div
                    className="bg-blue-500 h-4 rounded-full"
                    style={{ width: `${module.progress}%` }}
                  ></div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Upcoming Events</h2>
          <ul>
            {course.upcomingEvents && course.upcomingEvents.map((event, index) => (
              <li key={index} className="mb-2">
                {event.name}: {event.date}
              </li>
            ))}
            {!course.upcomingEvents && <li>No upcoming events</li>}
          </ul>
        </div>
      </div>

      <div className="mt-6">
        <a href="/" className="text-blue-500 underline">Back to Dashboard Overview</a>
      </div>
    </div>
  );
};

export default CourseDetails;
