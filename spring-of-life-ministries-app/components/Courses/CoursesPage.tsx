"use client";
import * as React from "react";
import { useState } from "react";
import {
  GlobeAltIcon,
  DevicePhoneMobileIcon,
  CircleStackIcon,
  CloudIcon,
} from "@heroicons/react/24/outline";

interface Name {
  course: string;
  imageSrc: string;
  profession: string;
  price: string;
  category:
    | "mobiledevelopment"
    | "webdevelopment"
    | "datascience"
    | "cloudcomputing";
}

const names: Name[] = [
  {
    course: "HTML, CSS, JS",
    imageSrc: "/images/courses/coursesOne.svg",
    profession: "HTML, CSS, Javascript Development",
    price: "40",
    category: "webdevelopment",
  },
  {
    course: "Node.js",
    imageSrc: "/images/courses/coursesTwo.svg",
    profession: "Backend with Node.js and Express.js",
    price: "21",
    category: "webdevelopment",
  },
  {
    course: "Database",
    imageSrc: "/images/courses/coursesThree.svg",
    profession: "Learn Mongodb with Mongoose",
    price: "21",
    category: "webdevelopment",
  },
  {
    course: "React.js",
    imageSrc: "/images/courses/coursesFour.svg",
    profession: "Learn React with Redux toolkit",
    price: "99",
    category: "webdevelopment",
  },
  {
    course: "React Native",
    imageSrc: "/images/courses/coursesOne.svg",
    profession: "Learn React Native with Node.js",
    price: "89",
    category: "mobiledevelopment",
  },
  {
    course: "Swift",
    imageSrc: "/images/courses/coursesThree.svg",
    profession: "Learn Swift from Scratch",
    price: "89",
    category: "mobiledevelopment",
  },
  {
    course: "Flutter",
    imageSrc: "/images/courses/coursesFour.svg",
    profession: "Flutter App Development",
    price: "69",
    category: "mobiledevelopment",
  },
  {
    course: "Onsen UI",
    imageSrc: "/images/courses/coursesTwo.svg",
    profession: "Learn Onsen Ui with HTML, CSS",
    price: "69",
    category: "mobiledevelopment",
  },
  {
    course: "TensorFlow",
    imageSrc: "/images/courses/coursesTwo.svg",
    profession: "Learn TensorFlow with SQL",
    price: "99",
    category: "datascience",
  },
  {
    course: "AWS",
    imageSrc: "/images/courses/coursesFour.svg",
    profession: "AWS Deep Learning AMI",
    price: "99",
    category: "datascience",
  },
  {
    course: "Bokeh",
    imageSrc: "/images/courses/coursesOne.svg",
    profession: "Learn Bokeh with Python",
    price: "99",
    category: "datascience",
  },
  {
    course: "Scikit",
    imageSrc: "/images/courses/coursesThree.svg",
    profession: "Scikit with Python Development",
    price: "89",
    category: "datascience",
  },
  {
    course: "Laas",
    imageSrc: "/images/courses/coursesThree.svg",
    profession: "Infra-as-a-Service",
    price: "21",
    category: "cloudcomputing",
  },
  {
    course: "Iaas",
    imageSrc: "/images/courses/coursesFour.svg",
    profession: "Info-as-a-Service",
    price: "29",
    category: "cloudcomputing",
  },
  {
    course: "Paas",
    imageSrc: "/images/courses/coursesOne.svg",
    profession: "Platform-as-a-Service",
    price: "99",
    category: "cloudcomputing",
  },
  {
    course: "Saas",
    imageSrc: "/images/courses/coursesTwo.svg",
    profession: "Software-as-a-Service",
    price: "58",
    category: "cloudcomputing",
  },
];

const NamesList = () => {
  const [selectedButton, setSelectedButton] = useState<
    | "mobiledevelopment"
    | "webdevelopment"
    | "datascience"
    | "cloudcomputing"
    | "all"
    | null
  >("webdevelopment");

  const mobileDevelopment = names.filter(
    (name) => name.category === "mobiledevelopment",
  );
  const webDevelopment = names.filter(
    (name) => name.category === "webdevelopment",
  );
  const dataScience = names.filter((name) => name.category === "datascience");
  const cloudComputing = names.filter(
    (name) => name.category === "cloudcomputing",
  );

  let selectedNames: Name[] = [];

  if (selectedButton === "mobiledevelopment") {
    selectedNames = mobileDevelopment;
  } else if (selectedButton === "webdevelopment") {
    selectedNames = webDevelopment;
  } else if (selectedButton === "datascience") {
    selectedNames = dataScience;
  } else if (selectedButton === "cloudcomputing") {
    selectedNames = cloudComputing;
  }

  const nameElements = selectedNames.map((name, index) => (
    <div key={index}>
      <div className=" py-5 text-lg sm:text-sm lg:py-0">
        <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
          <img
            src={name.imageSrc}
            alt={name.imageSrc}
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div className="flex justify-between">
          <div className="mt-6 block font-normal text-gray-900">
            {name.course}
          </div>
          <div className="text-green border-green mt-6 block rounded-md border-2 border-solid px-1 text-lg font-semibold">
            ${name.price}
          </div>
        </div>
        <p aria-hidden="true" className="mb-5 mt-2 text-2xl font-semibold ">
          {name.profession}
        </p>

        <div className="border-grey500 flex justify-between rounded-md border-2 border-solid p-2">
          <p>12 Classes</p>
          <div className="flex flex-row space-x-4">
            <div className="flex">
              <img src={"/images/courses/account.svg"} alt="circle" />
              <p className="text-lightgrey ml-1">120</p>
            </div>
            <div className="flex">
              <img src={"/images/courses/Star.svg"} alt="star" />
              <p className="ml-s1">4.5</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  ));

  return (
    <div>
      <div
        id="courses-section"
        className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-36 lg:max-w-7xl lg:px-8"
      >
        <div className="items-center justify-between pb-12 sm:flex">
          <h2 className="my-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Mission Programmes
          </h2>
          <div>
            <button className="text-purple border-purple rounded border bg-transparent px-4 py-3 font-medium hover:border-transparent hover:bg-primary hover:text-white">
              Explore Our Mission
            </button>
          </div>
        </div>

        <div className="nowhitespace flex space-x-5 overflow-x-auto rounded-xl bg-white p-1">
          {/* FOR DESKTOP VIEW */}
          <button
            onClick={() => setSelectedButton("webdevelopment")}
            className={
              "bg-white " +
              (selectedButton === "webdevelopment"
                ? "border-orange border-b-2 text-black"
                : "text-lightgrey") +
              " hidden pb-2 text-lg sm:block"
            }
          >
            Web Development
          </button>
          <button
            onClick={() => setSelectedButton("mobiledevelopment")}
            className={
              "bg-white " +
              (selectedButton === "mobiledevelopment"
                ? "border-orange border-b-2 text-black"
                : "text-lightgrey") +
              " hidden pb-2 text-lg sm:block"
            }
          >
            Mobile Development
          </button>
          <button
            onClick={() => setSelectedButton("datascience")}
            className={
              "bg-white " +
              (selectedButton === "datascience"
                ? "border-orange border-b-2 text-black"
                : "text-lightgrey") +
              " hidden pb-2 text-lg sm:block"
            }
          >
            Data Science
          </button>
          <button
            onClick={() => setSelectedButton("cloudcomputing")}
            className={
              "bg-white " +
              (selectedButton === "cloudcomputing"
                ? "border-orange border-b-2 text-black"
                : "text-lightgrey") +
              " hidden pb-2 text-lg sm:block"
            }
          >
            Cloud Computing
          </button>

          {/* FOR MOBILE VIEW */}
          <GlobeAltIcon
            onClick={() => setSelectedButton("webdevelopment")}
            width={70}
            height={70}
            className={
              "bg-white " +
              (selectedButton === "webdevelopment"
                ? "border-orange fill-orange border-b-2"
                : "") +
              " block pb-2 sm:hidden"
            }
          />
          <DevicePhoneMobileIcon
            onClick={() => setSelectedButton("mobiledevelopment")}
            width={70}
            height={70}
            className={
              "bg-white " +
              (selectedButton === "mobiledevelopment"
                ? "border-orange fill-orange border-b-2"
                : "") +
              " block pb-2 sm:hidden"
            }
          />
          <CircleStackIcon
            onClick={() => setSelectedButton("datascience")}
            width={70}
            height={70}
            className={
              "bg-white " +
              (selectedButton === "datascience"
                ? "border-orange fill-orange border-b-2"
                : "") +
              " block pb-2 sm:hidden"
            }
          />
          <CloudIcon
            onClick={() => setSelectedButton("cloudcomputing")}
            width={70}
            height={70}
            className={
              "bg-white " +
              (selectedButton === "cloudcomputing"
                ? "border-orange fill-orange border-b-2"
                : "") +
              " block pb-2 sm:hidden"
            }
          />
        </div>

        <div>
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 gap-x-8 gap-y-10 py-12">
              <div className="col-start-1 grid grid-cols-1 gap-x-8 sm:grid-cols-2 lg:grid-cols-4">
                {nameElements.length > 0 ? (
                  nameElements
                ) : (
                  <p>No data to show</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NamesList;
