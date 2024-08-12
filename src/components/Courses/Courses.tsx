import ClassCard from "./ClassCard";
import ClassForm from "./ClassForm";

function Courses() {
  return (
    <div>
      <div className="p-12 flex-grow items-center justify-center">
        <h1 className="text-6xl font-bold p-8">Courses</h1>
        <ClassForm />
        <ClassCard className={""} Classification={""} meetingTime={""} />
      </div>
    </div>
  );
}

export default Courses;
