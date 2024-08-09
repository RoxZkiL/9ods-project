import BlogSection from "./BlogSection";
import SearchBar from "./SearchBar";
import TitleImageBlog from "./TitleImageBlog";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";

const Blog = () => {
  return (
    <>
      <Header />
      <TitleImageBlog />
      <SearchBar />
      <BlogSection />
      <Footer />
    </>
  );
};

export default Blog;
