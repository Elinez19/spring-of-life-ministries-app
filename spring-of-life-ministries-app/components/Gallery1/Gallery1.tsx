import Image from "next/image";
import React from "react";

const Gallery1 = () => {
  return (
    <div className="h-full  bg-white py-6 dark:bg-gray-800 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12">
          <div className="flex items-center gap-12">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white lg:text-3xl">
              Our Gallery
            </h2>

            <p className="hidden max-w-screen-sm text-black dark:text-gray-300 md:block">
              A cross-section of our gallery and impact we are making
            </p>
          </div>

          <a
            href="#"
            className="inline-block rounded-lg border bg-white px-4 py-2 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 dark:border-none dark:bg-gray-700 dark:text-gray-200 md:px-8 md:py-3 md:text-base"
          >
            Springoflifeministries
          </a>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
          {/* <!-- image - start --> */}
          <a
            href="#"
            className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
          >
            <Image
              width={100}
              height={100}
              src="/images/about/banner-1.png"
              loading="lazy"
              alt="Photo by Minh Pham"
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

            <span className="relative mb-3 ml-4 inline-block text-sm text-white md:ml-5 md:text-lg">
              Springoflifeministries
            </span>
          </a>
          {/* <!-- image - end --> */}

          {/* <!-- image - start --> */}
          <a
            href="#"
            className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
          >
            <Image
              width={100}
              height={100}
              src="/images/about/banner-2.png"
              loading="lazy"
              alt="Photo by Magicle"
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

            <span className="relative mb-3 ml-4 inline-block text-sm text-white md:ml-5 md:text-lg">
              Springoflifeministries
            </span>
          </a>
          {/* <!-- image - end --> */}

          {/* <!-- image - start --> */}
          <a
            href="#"
            className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
          >
            <Image
              width={100}
              height={100}
              src="/images/about/banner-3.png"
              loading="lazy"
              alt="Photo by Martin Sanchez"
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

            <span className="relative mb-3 ml-4 inline-block text-sm text-white md:ml-5 md:text-lg">
              Springoflifeministries
            </span>
          </a>
          {/* <!-- image - end --> */}

          {/* <!-- image - start --> */}
          <a
            href="#"
            className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
          >
            <Image
              width={100}
              height={100}
              src="/images/about/banner-1.png"
              loading="lazy"
              alt="Photo by Lorenzo Herrera"
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

            <span className="relative mb-3 ml-4 inline-block text-sm text-white md:ml-5 md:text-lg">
              Springoflifeministries
            </span>
          </a>
          {/* <!-- image - end --> */}
        </div>
      </div>
    </div>
  );
};

export default Gallery1;
