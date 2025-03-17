import SingleBlog from "@/components/blocks/SingleBlog";
import Link from "next/link";

const BlogDetail = () => {
  return (
    <main className="container">
      <div className="flex gap-2 items-center mb-10 flex-wrap">
        <Link href={"/"} className="text-eerie-black text-xs lg:text-base">
          Trang chủ
        </Link>
        &gt;
        <Link href="/" className="text-eerie-black text-xs lg:text-base">
          Tài nguyên
        </Link>
        &gt;
        <Link href="/" className="text-eerie-black text-xs lg:text-base">
          Blog
        </Link>
        &gt;
        <Link href="/" className="text-eerie-black text-xs lg:text-base font-bold">
          Quản lí sản xuất
        </Link>
      </div>
      <SingleBlog />
    </main>
  );
};

export default BlogDetail;
