import ClassCard from "./ClassCard";
import { useCourseContext } from "../../contexts/CourseContext";

function ClassList() {
  const { courses } = useCourseContext();

  if (courses.length === 0)
    return (
      <h1 className="text-xl text-gray-400 font-medium">Register a course</h1>
    );

  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {courses.map((course, index) => (
        <ClassCard
          key={index}
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
