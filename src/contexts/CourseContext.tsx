import {
  FC,
  createContext,
  useState,
  useEffect,
  ReactNode,
  useContext,
} from "react";

// Port for API calls
const PORT = import.meta.env.VITE_PORT;

// Interface for course data
interface Course {
  courseName: string;
  classification: string;
  meetingTime: string;
  courseNumber: string;
}

// Type for Course Context
interface CourseContextType {
  courses: Course[];
  fetchCourses: () => Promise<void>;
  getCourse: (courseName: string) => Promise<void>;
  postCourse: (course: Course) => Promise<void>;
  updateCourse: (
    courseName: string,
    newInformation: Partial<Course>
  ) => Promise<void>;
  deleteCourse: (courseName: string) => Promise<void>;
}

// Create a context for course data
const CourseContext = createContext<CourseContextType | undefined>(undefined);

// Custom hook to use CourseContext
export const useCourseContext = () => {
  const context = useContext(CourseContext);
  if (context === undefined) {
    throw new Error("CourseContext must be used within a CourseProvider");
  }
  return context;
};

// Props type for CourseProvider component
interface CourseProviderProps {
  children: ReactNode;
}

// Provider component for course context
const CourseProvider: FC<CourseProviderProps> = ({ children }) => {
  // State to hold the list of courses
  const [courses, setCourses] = useState<Course[]>([]);

  // Fetch courses on component mount
  useEffect(() => {
    fetchCourses();
  }, []);

  // Fetch all courses from the server and update state
  const fetchCourses = async () => {
    try {
      const response = await fetch(`http://localhost:${PORT}/course`);
      if (!response.ok) throw new Error("Network response failed");
      const data = await response.json();
      setCourses(data);
    } catch (err) {
      console.error("FETCH ERROR ");
      throw err;
    }
  };

  // Fetch a specific course by its name
  const getCourse = async (courseName: string) => {
    try {
      const response = await fetch(
        `http://localhost:${PORT}/courses/${courseName}`
      );
      if (!response.ok) throw new Error("Network response failed");
      return await response.json();
    } catch (err) {
      console.error("FETCH ERROR ");
      throw err;
    }
  };

  // Add a new course to the server and refresh the course list
  const postCourse = async (course: Course) => {
    try {
      const response = await fetch(`http://localhost:${PORT}/course`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(course),
      });
      if (!response.ok) throw new Error("Network response failed");
      await fetchCourses();
    } catch (err) {
      console.error("POST ERROR");
      throw err;
    }
  };

  // Update an existing course on the server and update local state
  const updateCourse = async (
    courseName: string,
    newInformation: Partial<Course>
  ) => {
    try {
      const response = await fetch(
        `http://localhost:${PORT}/course/${courseName}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newInformation),
        }
      );
      if (!response.ok) throw new Error("Network response failed");
      await updateLocalCourse(courseName, newInformation);
    } catch (err) {
      console.error("PUT ERROR");
      throw err;
    }
  };

  // Delete a course from the server and update local state
  const deleteCourse = async (courseName: string) => {
    try {
      const response = await fetch(
        `http://localhost:${PORT}/course/${courseName}`,
        {
          method: "DELETE",
        }
      );
      if (!response.ok) throw new Error("Network response failed");
      setCourses((courseList) =>
        courseList.filter((course) => course.courseName !== courseName)
      );
    } catch (err) {
      console.error("DELETE ERROR");
      throw err;
    }
  };

  // Update the course details in local state without fetching from server
  const updateLocalCourse = (
    courseName: string,
    newInformation: Partial<Course>
  ) => {
    setCourses((courseList) =>
      courseList.map((course) =>
        course.courseName === courseName
          ? { ...course, ...newInformation }
          : course
      )
    );
  };

  // Value to be provided by the context
  const value: CourseContextType = {
    courses,
    fetchCourses,
    getCourse,
    postCourse,
    updateCourse,
    deleteCourse,
  };

  // Render the provider with the given children
  return (
    <CourseContext.Provider value={value}>{children}</CourseContext.Provider>
  );
};

export default CourseProvider;
