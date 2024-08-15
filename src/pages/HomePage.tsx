import Hero from "../components/Home/Hero";
import CourseDisplay from "../components/Home/CourseDisplay";
import CalendarDisplay from "../components/Home/CalendarDisplay";
import TaskDisplay from "../components/Home/TaskDisplay";

function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Hero />
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1">
            <CourseDisplay />
          </div>
          <div className="flex-1">
            <CalendarDisplay />
          </div>
          <div className="flex-1">
            <TaskDisplay />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
