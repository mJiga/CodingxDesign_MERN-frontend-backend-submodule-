import { PiCode } from "react-icons/pi";
import utep2 from "../../assets/utep2.jpg";

function Hero() {
  return (
    <div>
      <div className="container mx-auto px-20 py-20">
        <div className="flex gap-16 justify-center items-center">
          <div className="flex flex-col items-start max-w-2xl">
            <span className="flex text-3xl text-black font-bold tracking-tight">
              <h1 className="text-8xl font-bold mb-3">dev.board</h1>
              <PiCode className="ml-2 mt-2 w-20 h-20" />
              <label className="text-lg ml-2 mt-2 text-orange-400">
                @ UTEP
              </label>
            </span>
            <h2 className="text-xl mb-3 ml-2 max-w-lg font-bold">
              Everything in one place:
            </h2>
            <h3 className="text-xl ml-2 max-w-lg">
              Excel at your CS Course Curriculum @ UTEP
            </h3>
          </div>
          <img
            src={utep2}
            className="w-1/2 h-auto rounded-xl border-4 border-gray-300 shadow-lg transition-transform duration-300 hover:scale-105"
            alt="UTEP Campus"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
