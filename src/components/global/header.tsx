"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowTopLeft, ChrevonDown, HambugerMenu, ViFlag } from "../ui/Icon";
import Drawer from "react-modern-drawer";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const menuItems = useMemo(() => {
    return [
      { title: "Về chúng tôi", href: "/" },
      {
        title: "Giải pháp",
        items: [
          { title: "Thiết kế website", href: "/" },
          { title: "Thiết kế app", href: "/" },
        ],
        href: "/",
      },
      {
        title: "Tài nguyên",
        items: [
          { title: "Thiết kế website", href: "/" },
          { title: "Thiết kế app", href: "/" },
        ],
        href: "/",
      },
      { title: "Liên hệ", href: "/" },
    ];
  }, []);

  return (
    <div className="lg:container lg:py-10">
      <div className="bg-white shadow-lg lg:rounded-full lg:py-4 lg:px-20 p-5">
        <div className="flex justify-between items-center">
          <Link href={"/"}>
            <Image src="/images/logo.png" width={140} height={60} alt="logo" />
          </Link>
          <div className="gap-10 items-center hidden lg:flex">
            {menuItems.map((item, index) =>
              (item.items || []).length > 0 ? (
                <div className="flex gap-2 items-center" key={index}>
                  <Link href={item.href}>{item.title}</Link>
                  <ChrevonDown />
                </div>
              ) : (
                <div key={index}>
                  <Link href={item.href} className="text-charcoal">
                    {item.title}
                  </Link>
                </div>
              )
            )}
          </div>
          <div className="flex gap-2 items-center">
            <div className="rounded-full gap-2 bg-[#09090B0D] border border-[#09090B1A] cursor-pointer flex items-center p-2 px-4">
              <ViFlag />
              VI
              <ChrevonDown />
            </div>
            <button className="rounded-full cursor-pointer gap-2 bg-caribbean-green hidden lg:flex items-center p-2 px-4 font-bold">
              Trở Thành Khách Hàng
              <ArrowTopLeft />
            </button>
            <button onClick={toggleDrawer} className="block lg:hidden">
              <HambugerMenu />
            </button>
          </div>
        </div>
      </div>
      <Drawer
        size={"100%"}
        open={isOpen}
        onClose={() => setIsOpen(!isOpen)}
        direction="right"
      >
        <div className="p-10">
          <div className="mb-14">
            <button onClick={() => setIsOpen(!isOpen)}>
              <Image
                src={"/images/close.png"}
                className="size-5"
                width={30}
                height={30}
                alt={"close"}
              />
            </button>
          </div>
          <div className="flex flex-col gap-5 items-center ">
            <ul className="flex 2xl:gap-10 flex-col gap-5 items-center">
              {menuItems?.map((item, idx) => (
                <li key={idx}>
                  <Link
                    onClick={() => {
                      // e.preventDefault();
                      setIsOpen(false);
                      // router.push(item.href);
                    }}
                    className="font-medium hover:text-main-orange transition-colors"
                    href="/"
                  >
                    {item?.title}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex gap-5 flex-col items-center">
              <button className="rounded-full flex cursor-pointer gap-2 bg-caribbean-green items-center p-2 px-4 font-bold">
                Trở Thành Khách Hàng
                <ArrowTopLeft />
              </button>
              <div className="rounded-full gap-2 bg-[#09090B0D] border border-[#09090B1A] cursor-pointer flex items-center p-2 px-4">
                <ViFlag />
                VI
                <ChrevonDown />
              </div>
            </div>
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default Header;
