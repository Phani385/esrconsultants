import { useState, useEffect } from "react";
import HeroPage from "./HeroPage";

const ImageUrls = [
  "https://res.cloudinary.com/dv0oedkxm/image/upload/v1714631683/banner_cl8hjf.webp",
  "https://images.pexels.com/photos/3184395/pexels-photo-3184395.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  // Add more image URLs as needed
];

const HomeHeroSection = () => {
  const [imageUrlIndex, setImageUrlIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Increment imageUrlIndex, loop back to 0 if it reaches the end
      setImageUrlIndex((prevIndex) =>
        prevIndex === ImageUrls.length - 1 ? 0 : prevIndex + 1
      );
    }, 10000); // 30 seconds interval

    return () => clearInterval(intervalId); // Cleanup function
  }, []); // Empty dependency array to run only once on component mount

  return (
    <div className="flex-1 bg-blue-500">
      <HeroPage imageUrl={ImageUrls[imageUrlIndex]} />
    </div>
  );
};

export default HomeHeroSection;
