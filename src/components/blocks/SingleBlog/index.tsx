import { CalendarIcon, ClockIcon } from "@/components/ui/Icon";
import Image from "next/image";
import ImageWithNode from "./ImageWithNote";
import Quote from "./Quote";
import BlogContent from "./BlogContent";
import BlogCard from "@/components/ui/BlogCard";
import Sections from "./Sections";

const SingleBlog = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="flex-2 flex flex-col gap-10">
          {" "}
          <div className="text-yale-blue bg-lavender w-fit rounded-lg p-2">
            Quản Lý Sản Xuất
          </div>
          <h1 className="text-heading-2">
            Quy trình 5S là gì? Cách ứng dụng hiệu quả nên biết
          </h1>
          <div className="flex justify-between lg:items-center flex-col lg:flex-row items-start gap-10">
            <div className="flex gap-2 items-center">
              <div className="bg-white rounded-full size-16 shadow-lg flex justify-center items-center">
                <Image
                  src={"/images/logo-pattern.png"}
                  alt="Logo"
                  width={32}
                  height={32}
                />
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-slate-gray">Tác giả</p>
                <p className="text-charcoal font-bold texg-lg">FOSO Creator</p>
              </div>
            </div>
            <div className="flex lg:items-center flex-col lg:flex-row items-start lg:gap-0 gap-5">
              <div className="flex gap-2 items-center px-5 border-0 lg:border-r border-slate-gray">
                <CalendarIcon />
                <p className="text-slate-gray">Cập nhật vào: 17/11/2022</p>
              </div>
              <div className="flex gap-2 items-center px-5">
                <ClockIcon />
                <p className="text-slate-gray">10 phút đọc</p>
              </div>
            </div>
          </div>
          {/* Blog content */}
          <div>
            <ImageWithNode
              src="/images/blog-thumbnail.png"
              note="Quy trình 5s là gì?"
            />
          </div>
          <div>
            <Quote description="Chắc hẳn bạn đã từng nghe qua khái niệm về quy trình 5S là gì? Xây dựng 5S cần yếu tố gì? Bài viết dưới đây của FOSO sẽ trả lời cho bạn thông tin chi tiết về mô hình này cũng như yếu tố tạo nên thành công của quy trình bạn nhé." />
          </div>
          <BlogContent />
          <div className="rounded-xl bg-white p-6 flex flex-col gap-5 items-center shadow-lg">
            <p className="font-bold text-xl">Bạn thấy bài viết như thế nào?</p>
            <p className="font-medium">4 phản hồi</p>
            <div className="flex justify-between gap-10 items-center flex-col lg:flex-row">
              <div className="flex flex-col gap-5 items-center">
                <Image
                  src={"/images/thumbs-up.png"}
                  width={60}
                  height={60}
                  alt="Thumb up"
                />
                <p className="text-charcoal font-bold">2</p>
                <p className="font-medium">Hữu ích</p>
              </div>
              <div className="flex flex-col gap-5 items-center">
                <Image
                  src={"/images/green-heart.png"}
                  width={60}
                  height={60}
                  alt="Thumb up"
                />
                <p className="text-charcoal font-bold">2</p>
                <p className="font-medium">Yêu thích</p>
              </div>
              <div className="flex flex-col gap-5 items-center">
                <Image
                  src={"/images/star-struck.png"}
                  width={60}
                  height={60}
                  alt="Thumb up"
                />
                <p className="text-charcoal font-bold">2</p>
                <p className="font-medium">Thú vị</p>
              </div>
              <div className="flex flex-col gap-5 items-center">
                <Image
                  src={"/images/hushed-face.png"}
                  width={60}
                  height={60}
                  alt="Thumb up"
                />
                <p className="text-charcoal font-bold">2</p>
                <p className="font-medium">Bất ngờ</p>
              </div>
              <div className="flex flex-col gap-5 items-center">
                <Image
                  src={"/images/yawning-face.png"}
                  width={60}
                  height={60}
                  alt="Thumb up"
                />
                <p className="text-charcoal font-bold">2</p>
                <p className="font-medium">Nhàm chán</p>
              </div>
              <div className="flex flex-col gap-5 items-center">
                <Image
                  src={"/images/pouting-face.png"}
                  width={60}
                  height={60}
                  alt="Thumb up"
                />
                <p className="text-charcoal font-bold">2</p>
                <p className="font-medium">Tức giận</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 hidden lg:block">
          <Sections />
        </div>
      </div>
      <div className="flex flex-col gap-10 mt-10">
        <h2 className="capitalize">Bài viết liên quan</h2>
        <div className="grid lg:grid-cols-3 gap-5">
          {Array(3)
            .fill("")
            .map((_, idx) => (
              <BlogCard key={idx} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
