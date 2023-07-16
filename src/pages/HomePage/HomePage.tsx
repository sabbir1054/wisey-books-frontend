import FavoriteAuthors from "../../Components/FavouriteAuthors/FavoriteAuthors";
import FeaturedCategories from "../../Components/FeaturedCategories/FeaturedCategories";
import Hero from "../../Components/Hero/Hero";
import RecentBooks from "../../Components/RecentBooks/RecentBooks";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <FeaturedCategories />
      <RecentBooks />
      <FavoriteAuthors />
    </div>
  );
};

export default HomePage;
