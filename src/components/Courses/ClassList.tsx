import ClassCard from "./ClassCard";
import { useCourseContext } from "../../contexts/CourseContext";

function ClassList() {
  // Access the courses from the CourseContext
  const { courses } = useCourseContext();

  // Show a message if there are no courses
  if (courses.length === 0)
    return (
      <h1 className="text-xl text-gray-400 font-medium">Register a course</h1>
    );

  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {/* Map over the courses and render a ClassCard for each one */}
      {courses.map((course, index) => (
        <ClassCard
          key={index} // Use index as key, consider using a unique identifier if available
          courseName={course.courseName}
          classification={course.classification}
          meetingTime={course.meetingTime}
          courseNumber={course.courseNumber}
        />
      ))}
    </div>
  );
}

export default ClassList;
