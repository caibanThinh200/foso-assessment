import { Button } from "@/components/ui/button";
import Image from "next/image";

const FeaturedBlog = () => {
  return (
    <div className="rounded-blog bg-blog-gradient relative overflow-hidden">
      <Image
        className="object-cover object-right absolute top-5 right-0"
        src="/images/blog-banner.png"
        width={480}
        height={400}
        alt="Graphic"
      />
      <div className="lg:w-7/12 space-y-10 p-10 relative z-10">
        <h2 className="text-white font-bold">
          Gia nhập cộng đồng FMRP – Kết nối, chia sẻ, cùng phát triển!
        </h2>
        <Button variant={"outline"} className="font-bold gap-10 group">
          Tham gia ngay{" "}
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
  );
};

export default FeaturedBlog;
