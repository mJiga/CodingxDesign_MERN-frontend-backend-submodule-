import { FC } from "react";
import { useCourseContext } from "../../contexts/CourseContext";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Book } from "lucide-react";

const CourseDisplay: FC = () => {
  // Access the courses from the context
  const { courses } = useCourseContext();

  return (
    <div className="bg-white shadow rounded-lg flex flex-col">
      {/* Section for heading and link to the courses page */}
      <motion.div whileHover={{ scale: 1.02 }} className="p-4">
        <Link to={"/courses"} className="flex items-center">
          <Book className="mr-2" /> {/* Book icon */}
          <h3 className="text-lg font-semibold">
            Your Registered Courses
          </h3>{" "}
          {/* Title text */}
        </Link>
      </motion.div>

      {/* Divider line */}
      <hr className="text-gray-300 my-2" />

      {/* Section for listing courses */}
      <div className="p-4 flex flex-col">
        <ul className="space-y-2">
          {courses.map((course, index) => (
            <li
              key={index}
              className="flex justify-between items-center bg-gray-50 p-3 rounded"
            >
              <span>{course.courseName}</span> {/* Course name */}
              <span className="text-sm text-gray-500">
                {course.classification}
              </span>{" "}
              {/* Course classification */}
            </li>
          ))}
        </ul>

        {/* Button to add a new course */}
        <Link to={"/courses"}>
          <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
            Add New Course
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CourseDisplay;
