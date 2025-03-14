import { ArrowRightIcon, CalendarIcon, ClockIcon } from "@/components/ui/Icon";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const BlogCard = () => {
  return (
    <Link href={"/blog/1"} className="flex flex-col gap-5">
      <div className="rounded-xl overflow-hidden">
        <Image
          src="/images/placeholder.png"
          alt="blog"
          className="object-cover w-full"
          width={510}
          height={475}
        />
      </div>
      <div className="text-yale-blue bg-lavender w-fit rounded-lg p-2">
        Quản Lý Sản Xuất
      </div>
      <h3 className="text-charcoal">
        Tại sao BOM quan trọng trong quản lý sản xuất?
      </h3>
      <div className="flex items-center">
        <div className="flex gap-2 items-center px-5 border-r border-slate-gray">
          <CalendarIcon />
          <p className="text-slate-gray">17/11/2022</p>
        </div>
        <div className="flex gap-2 items-center px-5">
          <ClockIcon />
          <p className="text-slate-gray">10 phút đọc</p>
        </div>
      </div>
      <div>
        <Button
          variant={"link"}
          className="text-slate-gray font-semibold flex gap-5 items-center group"
        >
          Khám phá thêm
          <ArrowRightIcon className="group-hover:translate-x-3 transition-all duration-300" />
        </Button>
      </div>
    </Link>
  );
};

export default BlogCard;
