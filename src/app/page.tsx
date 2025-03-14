import BlogListing from "@/components/blocks/BlogListing";
import Hero from "@/components/blocks/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <div className="absolute top-0 -left-20">
        <Image
          src={"/svg/gradient-1.svg"}
          width={500}
          height={500}
          alt="Gradient 1"
        />
      </div>
      <div className="absolute bottom-0 -right-20">
        <Image
          src={"/svg/gradient-2.svg"}
          width={500}
          height={500}
          alt="Gradient 2"
        />
      </div>
      <div className="relative z-10">
        {" "}
        <Hero />
        <BlogListing />
      </div>
    </main>
  );
}
