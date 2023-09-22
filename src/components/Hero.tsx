import nearBanbasCrown2 from "../assets/nearBanbasCrown2.jpg";

const Hero = () => {
  return (
    <div className="w-full h-screen relative">
      <img className="w-full h-full object-cover" src={nearBanbasCrown2} />
      <div className="absolute w-full h-full top-0 left-0 bg-gray-900/30">
        <div className="absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4">
          <h1 className="py-2">Visit Malin Head</h1>
          <h2>Ireland's most northernly point</h2>
        </div>
      </div>
    </div>
  );
};

export default Hero;
