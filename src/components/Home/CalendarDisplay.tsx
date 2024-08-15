import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import { Link } from "react-router-dom";

function CalendarDisplay() {
  return (
    <div className="bg-white shadow rounded-lg flex flex-col">
      <Link to={"/calendar"} className="flex items-center">
        <motion.div
          whileHover={{ scale: 1.01 }}
          className="p-4 flex items-center cursor-pointer"
        >
          <Calendar className="mr-2" />
          <h3 className="text-lg font-semibold">Course Calendar</h3>
        </motion.div>
      </Link>
      <hr className="text-gray-300 my-2" />
      <div className="p-4 flex flex-col items-center">
        <div className="bg-gray-200 h-64 flex items-center justify-center w-full rounded-lg">
          Calendar Component Placeholder
        </div>
      </div>
    </div>
  );
}

export default CalendarDisplay;
