import ClassCard from "./ClassCard";
import { useCourseContext } from "../../contexts/CourseContext";

function ClassList() {
  const { courses } = useCourseContext();

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
