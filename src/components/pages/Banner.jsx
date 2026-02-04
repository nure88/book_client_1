
import banner from "../../assets/book1.png";
import Button from "../shareComponents/ShareButton/Button";

const Banner = () => {
    return (
        <div className="min-h-[100vh-105px] flex flex-col items-center bg-gray-300 rounded-t-2xl p-2 relative container mx-auto rounded-2xl">
          <div className="">
            <img className="w-full  h-80 lg:h-90 lg:w-[1200px] object-cover flex items-center" src={banner} alt="banner.jpg" />
          </div>
          <div className="absolute text-white mt-64 mr-60 hover:scale-105 duration-300">
            <Button>All Books</Button>
           
          </div>
          <div className="absolute ml-100 mt-64">
            <Button>Create Books</Button>
            
          </div>
        </div>
    );
};

export default Banner;