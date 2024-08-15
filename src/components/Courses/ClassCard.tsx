import { FC } from "react";

interface ClassProps {
  courseName: string;
  classification: string;
  meetingTime: string;
  courseNumber: string;
}

const ClassCard: FC<ClassProps> = ({
  courseName,
  classification,
  meetingTime,
  courseNumber,
}) => {
  return (
    <div className="border border-gray-300 w-80 rounded-lg p-4 m-2 shadow-sm hover:shadow-md transition-shadow">
      <div className="w-full h-32 bg-gray-200 mb-4 flex items-center justify-center">
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
      <h3 className="text-xl font-semibold">
        {courseName + " " + courseNumber}
      </h3>
      <p className="text-gray-600 mb-1">{classification}</p>
      <p className="text-gray-600">{meetingTime}</p>
    </div>
  );
};

export default ClassCard;
