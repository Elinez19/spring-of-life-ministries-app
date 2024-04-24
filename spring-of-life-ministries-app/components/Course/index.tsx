"use client";
import React, { useState, useEffect } from "react";
import AllCourses from "./CourseData";
import Image from "next/image";
import { FaArrowRight, FaUserAlt, FaPlay } from "react-icons/fa";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [activeCourse, setActiveCourse] = useState("All");

  useEffect(() => {
    setCourses(AllCourses);
  }, []);

  const courseTags = Array.from(new Set(AllCourses.map((item) => item.tag)));

  const filterCourses = (tag) => {
    const filteredCourses =
      tag === "All"
        ? AllCourses
        : AllCourses.filter((course) => course.tag === tag);
    setCourses(filteredCourses);
    setActiveCourse(tag);
  };

  return (
    <>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <h1 className="text-center text-3xl font-bold text-gray-900">
          Featured Courses
        </h1>
        <p className="mt-4 text-center text-base text-gray-600">
          Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget
          elit id imperdiet et. Cras eu sit dignissim{" "}
          <br className="hidden lg:inline" /> lorem nibh et. Ac cum eget
          habitasse in velit fringilla feugiat senectus in.
        </p>
        <div className="mt-8">
          <div className="flex flex-wrap justify-center gap-4 sm:gap-2">
            <button
              onClick={() => filterCourses("All")}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition-all focus:outline-none ${
                activeCourse === "All"
                  ? "bg-primary text-white hover:bg-blue-900"
                  : "bg-white text-gray-900 hover:bg-gray-200"
              }`}
            >
              All
            </button>
            {courseTags.map((tag) => (
              <button
                key={tag}
                onClick={() => filterCourses(tag)}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition-all focus:outline-none ${
                  activeCourse === tag
                    ? "bg-primary text-white hover:bg-blue-900"
                    : "bg-white text-gray-900 hover:bg-gray-200"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {courses.map((course) => (
              <div
                key={course.id}
                className="overflow-hidden rounded-lg border-2 border-transparent bg-white shadow-md transition-shadow hover:border-blue-900 hover:shadow-lg"
              >
                <div className="group relative cursor-pointer overflow-hidden">
                  <div className="rounded-lg p-4">
                    <Image
                      src={course.image}
                      width={320}
                      height={180}
                      loading="lazy"
                      className="h-48 w-full transform rounded-lg object-cover transition-transform hover:scale-105 sm:h-64"
                      alt="Course Image"
                    />
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center">
                    <FaPlay className="text-blue-950" />
                    <span className="ml-2 text-sm font-semibold text-gray-700">
                      {course.plays} Plays
                    </span>
                  </div>
                  <h2 className="mt-2 text-lg font-semibold text-gray-900">
                    {course.heading}
                  </h2>
                  <div className="mt-3 flex justify-between">
                    <div className="text-sm">
                      <span className="text-gray-700">Price: </span>
                      <span className="font-semibold text-gray-900">
                        ${course.sellingPrice}
                      </span>
                      <span className="ml-1 text-gray-500 line-through">
                        ${course.costPrice}
                      </span>
                    </div>
                    <div className="text-sm">
                      <span className="text-gray-700">Rating: </span>
                      <span className="font-semibold text-gray-900">
                        {course.review}/5
                      </span>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="flex items-center text-sm">
                      <FaUserAlt className="mr-1 text-gray-600" />
                      <span className="text-gray-700">
                        {course.NumStudents} Students
                      </span>
                    </div>
                  </div>
                  <div className="mt-4">
                    <button className="w-full rounded-lg bg-primary px-3 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-900 focus:outline-none">
                      View Course
                      <FaArrowRight className="ml-1 inline" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Courses;
