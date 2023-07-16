import FeaturedCategories from "../../Components/FeaturedCategories/FeaturedCategories";
import Hero from "../../Components/Hero/Hero";
import RecentBooks from "../../Components/RecentBooks/RecentBooks";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <FeaturedCategories />
      <RecentBooks />
    </div>
  );
};

export default HomePage;
