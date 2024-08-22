import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardOverview from './pages/DashboardOverview';
import CourseDetails from './pages/CourseDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<DashboardOverview />} />
          {/* <Route path="/course-details" element={<CourseDetails />} /> */}
          <Route path="/course-details/:courseId" element={<CourseDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
