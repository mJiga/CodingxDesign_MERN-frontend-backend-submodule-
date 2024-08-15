import { Link } from "react-router-dom";
import { PiCode } from "react-icons/pi";

const Header = () => {
  return (
    <div className="bg-blue-900 py-6">
      <div className="container mx-auto flex justify-between">
        <span className="flex text-3xl text-white font-bold tracking-tight">
          <Link to="/">dev.board</Link>
          <PiCode className="ml-2 mt-1" />
          <label className="text-xs ml-2 mt-2 text-orange-400"> @ UTEP</label>
        </span>
      </div>
    </div>
  );
};

export default Header;
