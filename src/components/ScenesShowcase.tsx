import MalinHeadPier from "../assets/malinHeadPier.jpg";
import NearBanbasCrown from "../assets/NearBanbasCrown.jpg";
import BanbasCrown from "../assets/BanbasCrown.jpg";

const Showcase = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 text-center">
      <h1>Beautiful Scenes</h1>
      <p className="py-4">Lots of beautifuls scenes</p>
      <div className="grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4">
        <img
          className="w-full h-full object-cover col-span-2 md:col-span-3 row-span-2"
          src={MalinHeadPier}
          alt="/"
        />
        <img
          className="w-full h-full object-cover"
          src={NearBanbasCrown}
          alt="/"
        />
        <img className="w-full h-full object-cover" src={BanbasCrown} alt="/" />
        <img
          className="w-full h-full object-cover"
          src={MalinHeadPier}
          alt="/"
        />
        <img
          className="w-full h-full object-cover"
          src={MalinHeadPier}
          alt="/"
        />
      </div>
    </div>
  );
};

export default Showcase;
