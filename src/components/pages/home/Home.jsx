import Banner from "../Banner";
import TopGenres from "../topGenres/TopGenres";
import HomeCard from "./homeCard/HomeCard";

const bookPromise = fetch("http://localhost:5000/latest-books").then((res) =>
  res.json(),
);
// console.log(bookPromise);

const Home = () => {
  return (
    <div className="min-h-[100vh-105px]">
      <Banner />
<div>

      <HomeCard bookPromise={bookPromise} />
</div>
<div>
  <TopGenres />
</div>
    </div>
  );
};

export default Home;
