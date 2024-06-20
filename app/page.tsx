import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button as FlowButton } from "flowbite-react";
import { Button } from "@/components/ui/button";
import NavShadow from "@/components/NavShadow";

const navLinks = [
  {
    title: "For Sales Managers",
    link: "/sales-manager",
  },
  {
    title: "Features",
    link: "/features",
  },
  {
    title: "Pricing",
    link: "/pricing",
  },
  {
    title: "Integrations",
    link: "/integrations",
  },
  {
    title: "Blog",
    link: "/blog",
  },
];

export default function Home() {
  return (
    <Fragment>
      <NavShadow />
      <nav
        className="container section-padding mx-auto flex justify-between items-center 
      h-16 sm:h-[5.375rem] fixed top-0 left-1/2 -translate-x-[50%] z-10 bg-white"
      >
        <Link href="/" scroll={false}>
          <Image
            src="/logo.svg"
            width={82}
            height={32.5}
            alt="logo"
            className="ml-4 sm:ml-0"
          />
        </Link>

        <div className="hidden lg:flex">
          {navLinks.map(({ link, title }) => (
            <Link
              className="px-4 py-2 font-[500] text-black-1"
              href={link}
              key={link}
            >
              {title}
            </Link>
          ))}

          <Link
            href="/signup"
            className="ml-4 px-5 py-2 text-primary-1 border border-primary-1
            font-[500] rounded-md hover:bg-[#dfdfdf]"
          >
            Sign Up
          </Link>
          <Link
            className="ml-6 px-5 py-2 text-white bg-primary-1
            font-[500] rounded-md"
            href="/book-a-demo"
          >
            Book a demo
          </Link>
        </div>
      </nav>
      <main className="h-[1600px] mt-16 sm:mt-[5.375rem] container mx-auto section-padding">
        <div className="h-3 w-full bg-yellow-1 sm:bg-transparent" />
        <div
          className="bg-home-hero pb-[1rem] lg:pb-[7rem] py-[7rem] px-[1.25rem] md:px-[5.25rem] border 
        sm:rounded-2xl"
        >
          <div className="w-full lg:w-[45%]">
            <h1
              className="text-white text-center lg:text-left text-[2.5rem] lg:text-[3.75rem] font-[700] 
            leading-[120%] "
            >
              Spend Your Evenings With Your Partner,
              <br />
              <span className="text-yellow-1">Not Your CRM</span>
            </h1>
            <p
              className="text-white text-center lg:text-left pt-4 max-w-[370px] text-[18px] font-[500] 
            leading-[150%] mx-auto lg:mx-0 tracking-wide opacity-90 lg:opacity-100"
            >
              Let Oliv help you research, take notes, and update your CRM after
              every call: so you can focus on winning conversations!
            </p>
            <div className="flex flex-col lg:flex-row gap-3 lg:gap-4 mt-[40px]">
              <Link
                href="/signup"
                className="bg-yellow-1 text-black px-4 py-[0.7rem] rounded-md font-[500] text-center"
              >
                Get Started for Free
              </Link>
              <Link
                href="/book-a-demo"
                className="bg-transparent text-white border border-white px-4 py-[0.7rem] 
                  rounded-md font-[500] text-center"
              >
                Book a 7m demo
              </Link>
            </div>
            <p className="text-white text-center lg:text-left font-[500] mt-2 tracking-wide text-[12px] leading-[150%]">
              2-step setup | No credit card required
            </p>
          </div>
        </div>

        <div className="mt-10 flex gap-4">
          <Button variant="green">Click Me</Button>
          <FlowButton pill color="failure" className="bg-red-500">
            Flow Button
          </FlowButton>
        </div>
      </main>
    </Fragment>
  );
}
