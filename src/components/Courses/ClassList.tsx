import ClassCard from "./ClassCard";

const classList = [
  {
    courseName: "Introduction to Computer Science",
    classification: "Freshman",
    meetingTime: "Mon/Wed/Fri 10:00 AM - 11:00 AM",
  },
  {
    courseName: "Data Structures",
    classification: "Sophomore",
    meetingTime: "Tue/Thu 2:00 PM - 3:30 PM",
  },
  {
    courseName: "Algorithms",
    classification: "Junior",
    meetingTime: "Mon/Wed 1:00 PM - 2:30 PM",
  },
  {
    courseName: "Operating Systems",
    classification: "Senior",
    meetingTime: "Tue/Thu 10:00 AM - 11:30 AM",
  },
];

function ClassList() {
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {classList.map((course, index) => (
        <ClassCard
          key={index}
          courseName={course.courseName}
          classification={course.classification}
          meetingTime={course.meetingTime}
        />
      ))}
    </div>
  );
}

export default ClassList;
