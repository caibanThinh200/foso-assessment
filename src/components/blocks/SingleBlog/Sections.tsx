import { ChrevonUp } from "@/components/ui/Icon";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Sections = () => {
  return (
    <div className="flex flex-col gap-5">
      <h3 className="text-vampire-black font-bold text-2xl flex justify-between">
        Nội Dung Bài Viết
        <div>
          <ChrevonUp />
        </div>
      </h3>
      <ul className="list-decimal pl-5 space-y-2">
        <li>
          <Link href={"#1"}>Quy trình 5S là gì?</Link>
        </li>
        <li>
          <Link href={"#2"}>Lợi ích quy trình 5S đem lại</Link>
        </li>
        <li>
          <Link href={"#3"}>
            Tại sao doanh nghiệp nên áp dụng quy trình 5S?
          </Link>
          <ul className="list-circle pl-5 space-y-2 my-2">
            <li>
              <Link href={"#3-1"}>
                3.1 Cải thiện rõ nét môi trường làm việc
              </Link>
            </li>
            <li>
              <Link href={"#3-2"}>3.2 Tiết kiệm thời gian đáng kể</Link>
            </li>
            <li>
              <Link href={"#3-3"}>3.3 Tăng năng suất làm việc</Link>
            </li>
            <li>
              <Link href={"#3-4"}>3.4 Tiết kiệm chi phí</Link>
            </li>
            <li>
              <Link href={"#3-5"}>3.5 Tăng chất lượng sản phẩm</Link>
            </li>
          </ul>
        </li>
        <li>
          Quy trình 5S gồm các bước:
          <ul className="list-circle pl-5 space-y-2 my-2">
            <li>4.1 Seiri (Ngăn nắp)</li>
            <li>4.2 Seiton (Sắp xếp)</li>
            <li>4.3 Seiso (Vệ sinh)</li>
            <li>4.4 Seiketsu (Tiêu chuẩn hóa)</li>
            <li>4.5 Shitsuke (Kỷ luật)</li>
          </ul>
        </li>
        <li>
          Quy trình được thực hiện như sau:
          <ul className="list-circle pl-5 space-y-2">
            <li>5.1 Giai đoạn chuẩn bị</li>
            <li>5.2 Triển khai rộng rãi</li>
            <li>5.3 Thực hiện vệ sinh toàn bộ doanh nghiệp</li>
            <li>5.4 Sàng lọc, sắp xếp và đánh giá</li>
            <li>5.5 Đánh giá</li>
          </ul>
        </li>
        <li>Quy trình 5S có giống với Kaizen?</li>
        <li>Đối tượng nào nên áp dụng 5S?</li>
        <li>Các yếu tố tạo nên thành công cho quy trình 5S</li>
      </ul>
      <div className="bg-blog-gradient relative py-10 rounded-xl lg:w-10/12">
        <Image
          src={"/images/frame-1.png"}
          alt="frame-1"
          width={425}
          height={300}
        />
        <div className="flex items-center gap-5 mt-5 px-16">
          <Image
            className="scale-175"
            src={"/images/frame-3.png"}
            alt="frame-3"
            width={136}
            height={136}
          />
          <Image
            className="flex-1 -translate-x-20"
            src={"/images/frame-2.png"}
            alt="frame-2"
            width={318}
            height={100}
          />
        </div>
        <div className="px-5 mt-10">
          <Button
            variant={"outline"}
            className="font-bold gap-10 group w-full justify-between px-5"
          >
            Trải nghiệm ngay
            <svg
              className="group-hover:-translate-y-0.5 transition-all duration-300 ease-in-out"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.344 4.50012V11.8126C14.344 12.0364 14.2551 12.251 14.0968 12.4092C13.9386 12.5675 13.724 12.6564 13.5002 12.6564C13.2764 12.6564 13.0618 12.5675 12.9036 12.4092C12.7454 12.251 12.6565 12.0364 12.6565 11.8126V6.53918L5.09717 14.0971C4.93866 14.2556 4.72368 14.3446 4.49951 14.3446C4.27535 14.3446 4.06036 14.2556 3.90185 14.0971C3.74335 13.9386 3.6543 13.7236 3.6543 13.4994C3.6543 13.2753 3.74335 13.0603 3.90185 12.9018L11.4612 5.34387H6.18771C5.96394 5.34387 5.74933 5.25498 5.59109 5.09674C5.43286 4.93851 5.34396 4.7239 5.34396 4.50012C5.34396 4.27635 5.43286 4.06173 5.59109 3.9035C5.74933 3.74527 5.96394 3.65637 6.18771 3.65637H13.5002C13.724 3.65637 13.9386 3.74527 14.0968 3.9035C14.2551 4.06173 14.344 4.27635 14.344 4.50012Z"
                fill="white"
              />
            </svg>
          </Button>
        </div>
      </div>
      <div className="bg-blog-gradient relative py-10 rounded-xl lg:w-10/12 overflow-hidden">
        <Image
          //   className="-translate-y-10"
          // className="object-cover object-right absolute top-5 right-0"
          src="/images/blog-banner-2.png"
          width={480}
          height={400}
          alt="Graphic"
        />
        <div className="font-bold text-xl px-5 text-white">
          Gia nhập cộng đồng FMRP Việt – Kết nối, chia sẻ, cùng phát triển!
        </div>
        <div className="px-5 mt-10">
          <Button
            variant={"outline"}
            className="font-bold gap-10 group w-full justify-between px-5"
          >
            Tham gia ngay
            <svg
              className="group-hover:-translate-y-0.5 transition-all duration-300 ease-in-out"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.344 4.50012V11.8126C14.344 12.0364 14.2551 12.251 14.0968 12.4092C13.9386 12.5675 13.724 12.6564 13.5002 12.6564C13.2764 12.6564 13.0618 12.5675 12.9036 12.4092C12.7454 12.251 12.6565 12.0364 12.6565 11.8126V6.53918L5.09717 14.0971C4.93866 14.2556 4.72368 14.3446 4.49951 14.3446C4.27535 14.3446 4.06036 14.2556 3.90185 14.0971C3.74335 13.9386 3.6543 13.7236 3.6543 13.4994C3.6543 13.2753 3.74335 13.0603 3.90185 12.9018L11.4612 5.34387H6.18771C5.96394 5.34387 5.74933 5.25498 5.59109 5.09674C5.43286 4.93851 5.34396 4.7239 5.34396 4.50012C5.34396 4.27635 5.43286 4.06173 5.59109 3.9035C5.74933 3.74527 5.96394 3.65637 6.18771 3.65637H13.5002C13.724 3.65637 13.9386 3.74527 14.0968 3.9035C14.2551 4.06173 14.344 4.27635 14.344 4.50012Z"
                fill="white"
              />
            </svg>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Sections;
