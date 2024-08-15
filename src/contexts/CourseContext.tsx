import {
  FC,
  createContext,
  useState,
  useEffect,
  ReactNode,
  useContext,
} from "react";

interface Course {
  courseName: string;
  classification: number;
  meetingTime: string;
  courseNumber: string;
}

interface CourseContextType {
  courses: Course[];
  fetchCourses: () => Promise<void>;
  getCourse: (className: string) => Promise<void>;
  postCourse: (course: Course) => Promise<void>;
  updateCourse: (
    className: string,
    newInformation: Partial<Course>
  ) => Promise<void>;
  deleteCourse: (className: string) => Promise<void>;
}

const CourseContext = createContext<CourseContextType | undefined>(undefined);

export const useCourseContext = () => {
  const context = useContext(CourseContext);
  if (context === undefined) {
    throw new Error("CourseContext must be used within a CourseProvider");
  }
  return context;
};
interface CourseProviderProps {
  children: ReactNode;
}

const CourseProvider: FC<CourseProviderProps> = ({ children }) => {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await fetch("http://localhost:7000/courses");
      if (!response.ok) throw new Error("Network response failed");
      const data = await response.json();
      setCourses(data);
    } catch (err) {
      console.error("FETCH ERROR ");
      throw err;
    }
  };

  const getCourse = async (courseName: string) => {
    try {
      const response = await fetch(
        `http://localhost:7000/courses/${courseName}`
      );
      if (!response.ok) throw new Error("Network response failed");
      return await response.json();
    } catch (err) {
      console.error("FETCH ERROR ");
      throw err;
    }
  };

  const postCourse = async (course: Course) => {
    try {
      const response = await fetch("http://localhost:7000/courses", {
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

  const updateCourse = async (
    courseName: string,
    newInformation: Partial<Course>
  ) => {
    try {
      const response = await fetch(
        `http://localhost:7000/courses/${courseName}`,
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

  const deleteCourse = async (courseName: string) => {
    try {
      const response = await fetch(
        `http://localhost:7000/courses/${courseName}`,
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

  const value: CourseContextType = {
    courses,
    fetchCourses,
    getCourse,
    postCourse,
    updateCourse,
    deleteCourse,
  };

  return (
    <CourseContext.Provider value={value}>{children}</CourseContext.Provider>
  );
};

export default CourseProvider;
