import { Pencil } from "lucide-react";
import { useState } from "react";
import { useCourseContext } from "../../contexts/CourseContext";

// Define the structure of the course object
interface Course {
  courseName: string;
  classification: string;
  meetingTime: string;
  courseNumber: string;
}

function ClassForm() {
  const { postCourse } = useCourseContext(); // Get the postCourse function from context

  // State variables for form inputs
  const [classification, setClassification] = useState("");
  const [courseName, setCourseName] = useState("");
  const [courseNumber, setCourseNumber] = useState("");
  const [meetingTime, setmeetingTime] = useState("");

  // Handle form submission
  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      if (!courseName) {
        console.log("Empty course name: Unable to create post");
        return;
      }

      // Create a course object
      const course: Course = {
        courseName,
        classification,
        meetingTime,
        courseNumber,
      };

      // Call the postCourse function to submit the course
      await postCourse(course);
    } catch (err) {
      console.error("ERROR REGISTERING COURSE");
      throw err;
    }

    // Clear form fields after successful submission
    setClassification("");
    setCourseName("");
    setCourseNumber("");
    setmeetingTime("");
  };

  return (
    <div className="container relative flex items-center justify-center border-2 border-opacity-60 border-zinc-300 max-w-4xl h-20 rounded-3xl shadow-lg overflow-hidden">
      <form onSubmit={handleSubmit} className="flex w-full h-full items-center">
        {/* Classification input field */}
        <label className="group flex-1 h-full flex flex-col justify-center px-6 border-r border-zinc-300 hover:bg-zinc-100 transition-colors ease-in-out duration-300 cursor-pointer">
          <span className="text-sm font-extrabold">Classification</span>
          <input
            placeholder="Choose classification"
            onChange={(e) => setClassification(e.target.value)}
            value={classification}
            className="text-xs font-medium text-zinc-500 bg-transparent focus:outline-none focus:text-black w-full group-hover:placeholder-zinc-400"
            required
          />
        </label>

        {/* Course Name input field */}
        <label className="group flex-1 h-full flex flex-col justify-center px-6 border-r border-zinc-300 hover:bg-zinc-100 transition-colors ease-in-out duration-300 cursor-pointer">
          <span className="text-sm font-extrabold">Course</span>
          <input
            placeholder="Input course"
            onChange={(e) => setCourseName(e.target.value)}
            value={courseName}
            className="text-xs font-medium text-zinc-500 bg-transparent focus:outline-none focus:text-black w-full group-hover:placeholder-zinc-400"
            required
          />
        </label>

        {/* Course Number input field */}
        <label className="group flex-1 h-full flex flex-col justify-center px-6 border-r border-zinc-300 hover:bg-zinc-100 transition-colors ease-in-out duration-300 cursor-pointer">
          <span className="text-sm font-extrabold">Course Number</span>
          <input
            placeholder="Input course number"
            onChange={(e) => setCourseNumber(e.target.value)}
            value={courseNumber}
            className="text-xs font-medium text-zinc-500 bg-transparent focus:outline-none focus:text-black w-full group-hover:placeholder-zinc-400"
            required
          />
        </label>

        {/* Meeting Time input field */}
        <label className="group flex-1 h-full flex flex-col justify-center px-6 hover:bg-zinc-100 transition-colors ease-in-out duration-300 cursor-pointer">
          <span className="text-sm font-extrabold">Meeting Times</span>
          <input
            placeholder="Choose meeting times"
            onChange={(e) => setmeetingTime(e.target.value)}
            value={meetingTime}
            className="text-xs font-medium text-zinc-500 bg-transparent focus:outline-none focus:text-black w-full group-hover:placeholder-zinc-400"
            required
          />
        </label>

        {/* Submit button */}
        <button className="h-full bg-blue-800 text-white font-bold text-base px-8 hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center">
          <Pencil className="mr-2 w-5 stroke-white" />
          Register
        </button>
      </form>
    </div>
  );
}

export default ClassForm;
