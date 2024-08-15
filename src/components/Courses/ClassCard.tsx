import { motion } from "framer-motion";
import { FC, useState, useRef, useEffect } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdOutlineEdit } from "react-icons/md";
import { PiTrashBold } from "react-icons/pi";
import { useCourseContext } from "../../contexts/CourseContext";

interface Course {
  courseName: string;
  classification: string;
  meetingTime: string;
  courseNumber: string;
}

const ClassCard: FC<Course> = ({
  courseName,
  classification,
  meetingTime,
  courseNumber,
}) => {
  const { deleteCourse, updateCourse } = useCourseContext();
  const [openDrop, setOpenDrop] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedCourseName, setEditedCourseName] = useState(courseName);
  const [editedCourseNumber, setEditedCourseNumber] = useState(courseNumber);
  const [editedClassification, setEditedClassification] =
    useState(classification);
  const [editedMeetingTime, setEditedMeetingTime] = useState(meetingTime);

  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleDelete = async () => {
    try {
      await deleteCourse(courseName);
    } catch (err) {
      console.error("ERROR DELETING COURSE");
      throw err;
    }
  };

  const handleUpdate = async () => {
    try {
      await updateCourse(courseName, {
        courseName: editedCourseName,
        courseNumber: editedCourseNumber,
        classification: editedClassification,
        meetingTime: editedMeetingTime,
      });
      setIsEditing(false);
    } catch (err) {
      console.error("ERROR UPDATING COURSE");
      throw err;
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setOpenDrop(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative border border-gray-300 w-80 rounded-lg p-4 m-2 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start">
        <div className="flex items-center justify-center w-full h-32 bg-gray-200 mb-4">
          <svg
            className="w-16 h-16 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 10h16M4 14h16M4 18h16"
            ></path>
          </svg>
        </div>

        <motion.button
          onClick={() => setOpenDrop(!openDrop)}
          whileHover={{ scale: 1.07 }}
          className="relative z-20"
        >
          <BsThreeDotsVertical className="hover:text-zinc-500 ml-3 mt-2 transition-all duration-300 ease-in-out" />
        </motion.button>

        {openDrop && (
          <div
            ref={dropdownRef}
            className="absolute right-0 top-12 mt-2 w-40 bg-white border border-gray-300 rounded-lg shadow-lg z-10"
          >
            <div className="flex flex-col justify-start items-start gap-2 mx-3 my-2 w-full">
              <button
                onClick={handleDelete}
                className="flex items-center gap-1 w-auto text-left px-2 py-1 group hover:bg-gray-400 hover:bg-opacity-10 rounded-lg transition-all duration-300 ease-in-out"
              >
                <PiTrashBold className="text-red-500 group-hover:text-red-600 rounded-full transition-all duration-300 ease-in-out" />
                <span className="ml-1 text-red-500 group-hover:text-red-600 font-medium text-sm transition-all duration-300 ease-in-out">
                  Delete Course
                </span>
              </button>

              <button
                onClick={() => setIsEditing(true)}
                className="flex items-center gap-1 w-auto text-left px-2 py-1 group hover:bg-gray-400 hover:bg-opacity-10 rounded-lg transition-all duration-300 ease-in-out"
              >
                <MdOutlineEdit className="text-gray-400 group-hover:text-gray-500 rounded-full transition-all duration-300 ease-in-out" />
                <span className="ml-1 text-gray-400 group-hover:text-gray-500 font-medium text-sm transition-all duration-300 ease-in-out">
                  Edit Course
                </span>
              </button>
            </div>
          </div>
        )}
      </div>

      {isEditing ? (
        <div className="space-y-2">
          <input
            type="text"
            value={editedCourseName}
            onChange={(e) => setEditedCourseName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
          <input
            type="text"
            value={editedCourseNumber}
            onChange={(e) => setEditedCourseNumber(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
          <input
            type="text"
            value={editedClassification}
            onChange={(e) => setEditedClassification(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
          <input
            type="text"
            value={editedMeetingTime}
            onChange={(e) => setEditedMeetingTime(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
          <div className="flex justify-end space-x-2 mt-2">
            <button
              onClick={handleUpdate}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all"
            >
              Save
            </button>
            <button
              onClick={() => setIsEditing(false)}
              className="px-4 py-2 bg-gray-300 text-black rounded-lg hover:bg-gray-400 transition-all"
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <>
          <h3 className="text-xl font-semibold">
            {courseName + " " + courseNumber}
          </h3>
          <p className="text-gray-600 mb-1">{classification}</p>
          <p className="text-gray-600">{meetingTime}</p>
        </>
      )}
    </div>
  );
};

export default ClassCard;
