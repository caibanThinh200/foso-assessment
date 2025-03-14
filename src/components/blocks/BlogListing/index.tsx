import FeaturedBlog from "./FeaturedBlog";
import BlogCard from "../../ui/BlogCard";
import Categories from "./Categories";
import PaginationBlog from "./Pagination";

const BlogListing = () => {
  return (
    <div className="container py-10">
      <div className="flex gap-10 flex-col-reverse lg:flex-row">
        <div className="flex-2">
          <div className="flex flex-col gap-10">
            <h2 className="capitalize">Tất cả bài viết</h2>
            <FeaturedBlog />
            <div className="grid lg:grid-cols-2 gap-5">
              {Array(8)
                .fill("")
                .map((_, idx) => (
                  <BlogCard key={idx} />
                ))}
            </div>
          </div>
        </div>
        <div className="flex-1">
          <Categories />
        </div>
      </div>
      <div className="mt-20">
        <PaginationBlog />
      </div>
    </div>
  );
};

export default BlogListing;
