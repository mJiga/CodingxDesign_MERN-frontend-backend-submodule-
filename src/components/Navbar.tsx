import { FC } from "react";
import { Home, Book, Calendar, User, LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

// Define the props for NavbarItem
interface NavbarItemProps {
  icon: LucideIcon; // Type for the Lucide icons
  label: string;
}

const NavbarItem: FC<NavbarItemProps> = ({ icon: Icon, label }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full p-4 transition-all duration-300 hover:bg-blue-500 hover:text-white group">
      <Icon
        size={24}
        className="mb-1 transition-transform duration-300 group-hover:scale-110"
      />
      <span className="text-xs font-medium opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        {label}
      </span>
    </div>
  );
};

const Navbar: FC = () => {
  return (
    <div className="relative w-20 h-screen bg-gray-100 shadow-lg">
      <div className="flex flex-col h-full">
        <div className="flex-1">
          <Link to={"/profile"}>
            <NavbarItem icon={User} label="Profile" />
          </Link>
          <Link to={"/"}>
            <NavbarItem icon={Home} label="Home" />
          </Link>
          <Link to={"/courses"}>
            <NavbarItem icon={Book} label="Courses" />
          </Link>
          <Link to={"/calendar"}>
            <NavbarItem icon={Calendar} label="Calendar" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
