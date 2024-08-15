import ClassForm from "../components/Courses/ClassForm";
import ClassList from "../components/Courses/ClassList";

function CoursesPage() {
  return (
    <div className="p-4 md:p-8 lg:p-12 flex flex-col justify-center items-center space-y-4">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-center">
        Courses
      </h1>
      <ClassForm />
      <hr className="my-8 border-gray-300" />
      <ClassList />
    </div>
  );
}

export default CoursesPage;
