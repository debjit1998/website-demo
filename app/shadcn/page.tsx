import NavShadow from "@/components/NavShadow";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Filter, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";

const services = [
  {
    name: "Financial services",
    description:
      "Reimagine your business and enable security and compliance at scale",
  },
  {
    name: "Telecom",
    description:
      "Transition from connectivity provider to digital service provider and reimagine the customer experience",
  },
  {
    name: "Healthcare and life sciences",
    description:
      "Innovate faster for clinicians and patients with unmatched reliability, security, and data privacy",
  },
  {
    name: "Games",
    description:
      "Build, run, and grow games with purpose-built, developer-friendly solutions",
  },
  {
    name: "Analytics and data lakes",
    description:
      "Get solutions for advanced analytics, data management, and predictive analytics with ML",
  },
];

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

const SnadCnDemoPage = () => {
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
      <main className="container mx-auto pt-24 section-padding mb-5">
        <h1 className="text-[32px] font-[700]">Explore our solutions</h1>
        <div className="mt-5">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="pill" className="flex items-center gap-2">
                <Filter className="h-4 w-4" />
                <span>Filter our solutions</span>
              </Button>
            </PopoverTrigger>
            <PopoverContent
              align="start"
              sideOffset={-52}
              alignOffset={-3}
              className="size-[300px] relative rounded-3xl !bg-white p-0"
            >
              <div className="absolute z-[-10] inset-0 w-full h-full bg-shade"></div>
              <div className="bg-inherit w-full h-full rounded-3xl flex justify-center items-center">
                <p>Filter By</p>
              </div>
            </PopoverContent>
          </Popover>
        </div>

        <div className="mt-8 flex flex-wrap gap-8">
          {services.map((service) => (
            <Card
              className="w-[260px] h-[300px] flex flex-col relative bg-[#eff2f6] group cursor-pointer"
              key={service.name}
            >
              <div className="absolute z-[-10] inset-0 w-full h-full group-hover:bg-shade" />
              <CardHeader>
                <CardTitle>{service.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{service.description}</p>
              </CardContent>
              <CardFooter className="mt-auto flex gap-2 items-center h-10">
                <p
                  className="w-0 overflow-hidden transition-[width,opacity]  ease-in-out duration-300
              group-hover:w-[102px] whitespace-nowrap"
                >
                  View solutions
                </p>
                <ArrowRight className="size-5" />
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
    </Fragment>
  );
};

export default SnadCnDemoPage;
