import "./index.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Layout from "./layouts/Layout";
import ProfilePage from "./pages/ProfilePage";
import HomePage from "./pages/HomePage";
import CoursesPage from "./pages/CoursesPage";
import CalendarPage from "./pages/CalendarPage";

// Main App component that sets up routing for the application
const App = () => {
  return (
    // Router component provides routing capabilities
    <Router>
      {/* Routes component defines the routing configuration */}
      <Routes>
        {/* Route for the home page */}
        <Route
          path="/"
          element={
            // Layout component wraps the page with header, footer, and sidebar
            <Layout>
              <HomePage /> {/* Home page component */}
            </Layout>
          }
        />
        {/* Route for the courses page */}
        <Route
          path="/courses"
          element={
            <Layout>
              <CoursesPage /> {/* Courses page component */}
            </Layout>
          }
        />
        {/* Route for the calendar page */}
        <Route
          path="/calendar"
          element={
            <Layout>
              <CalendarPage /> {/* Calendar page component */}
            </Layout>
          }
        />
        {/* Route for the profile page */}
        <Route
          path="/profile"
          element={
            <Layout>
              <ProfilePage /> {/* Profile page component */}
            </Layout>
          }
        />
        {/* Catch-all route for undefined paths */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
