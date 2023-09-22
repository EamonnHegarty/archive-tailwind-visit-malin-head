import FarrensBar from "../assets/Farrens-Bar.jpg";
const HospitalityShowCase = () => {
  return (
    <div className="max-w-[1240px] mx-auto px-4 py-16 text-center">
      <h1>All Star Hostpiality</h1>
      <p className="py-4">Tasty food and</p>
      <div className="grid sm:grid-cols-2 ">
        <div className="relative">
          <img src={FarrensBar} alt="" />
          <div className="bg-gray-900/30 absolute top-0 left-0 w-full h-full">
            <p className="left-4 bottom-4 font-bold text-2xl text-white absolute">
              Farrens Bar
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HospitalityShowCase;
