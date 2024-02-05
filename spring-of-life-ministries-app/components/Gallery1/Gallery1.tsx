import Image from "next/image";
import React from "react";

const Gallery1 = () => {
  return (
    // <div className="h-full  bg-white py-6 dark:bg-gray-800 sm:py-8 lg:py-12">
    //   <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
    //     <div className="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12">
    //       <div className="flex items-center gap-12">
    //         <h2 className="text-2xl font-bold text-gray-800 dark:text-white lg:text-3xl">
    //           Our Gallery
    //         </h2>

    //         <p className="hidden max-w-screen-sm text-black dark:text-gray-300 md:block">
    //           A cross-section of our gallery and impact we are making
    //         </p>
    //       </div>

    //       <a
    //         href="#"
    //         className="inline-block rounded-lg border bg-white px-4 py-2 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 dark:border-none dark:bg-gray-700 dark:text-gray-200 md:px-8 md:py-3 md:text-base"
    //       >
    //         Springoflifeministries
    //       </a>
    //     </div>

    //     <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
    //       {/* <!-- image - start --> */}
    //       <a
    //         href="#"
    //         className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
    //       >
    //         <Image
    //           width={100}
    //           height={100}
    //           src="/images/about/banner-1.png"
    //           loading="lazy"
    //           alt="Photo by Minh Pham"
    //           className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
    //         />

    //         <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

    //         <span className="relative mb-3 ml-4 inline-block text-sm text-white md:ml-5 md:text-lg">
    //           Springoflifeministries
    //         </span>
    //       </a>
    //       {/* <!-- image - end --> */}

    //       {/* <!-- image - start --> */}
    //       <a
    //         href="#"
    //         className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
    //       >
    //         <Image
    //           width={100}
    //           height={100}
    //           src="/images/about/banner-2.png"
    //           loading="lazy"
    //           alt="Photo by Magicle"
    //           className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
    //         />

    //         <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

    //         <span className="relative mb-3 ml-4 inline-block text-sm text-white md:ml-5 md:text-lg">
    //           Springoflifeministries
    //         </span>
    //       </a>
    //       {/* <!-- image - end --> */}

    //       {/* <!-- image - start --> */}
    //       <a
    //         href="#"
    //         className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
    //       >
    //         <Image
    //           width={100}
    //           height={100}
    //           src="/images/about/banner-3.png"
    //           loading="lazy"
    //           alt="Photo by Martin Sanchez"
    //           className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
    //         />

    //         <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

    //         <span className="relative mb-3 ml-4 inline-block text-sm text-white md:ml-5 md:text-lg">
    //           Springoflifeministries
    //         </span>
    //       </a>
    //       {/* <!-- image - end --> */}

    //       {/* <!-- image - start --> */}
    //       <a
    //         href="#"
    //         className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
    //       >
    //         <Image
    //           width={100}
    //           height={100}
    //           src="/images/about/banner-1.png"
    //           loading="lazy"
    //           alt="Photo by Lorenzo Herrera"
    //           className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
    //         />

    //         <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

    //         <span className="relative mb-3 ml-4 inline-block text-sm text-white md:ml-5 md:text-lg">
    //           Springoflifeministries
    //         </span>
    //       </a>
    //       {/* <!-- image - end --> */}
    //     </div>
    //   </div>
    // </div>
    <section className="font-poppins flex items-center  bg-gray-100  py-16 dark:bg-gray-800">
      <div className="mx-auto max-w-6xl p-4">
        <h2 className="pb-4  text-center text-4xl font-bold text-gray-800 dark:text-gray-400">
          Our Gallery
        </h2>
        <div className="mx-auto mb-10 w-44 border-b border-indigo-900 dark:border-gray-400"></div>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="group relative overflow-hidden rounded-md shadow-sm">
            <img
              src="https://i.postimg.cc/4y2GYVks/pexels-kindel-media-8566473.jpg"
              className="h-[300px] w-full transition duration-500 group-hover:origin-center group-hover:rotate-3 group-hover:scale-110"
              alt=""
            />
            <div className="absolute inset-0 z-0 h-[300px] opacity-50 transition duration-500 group-hover:bg-black"></div>
            <div>
              <div className=" absolute right-4 top-4 z-10 hidden group-hover:block">
                <a
                  href="#"
                  className="btn bg-orange-600 hover:bg-orange-700 border-orange-600 hover:border-orange-700 btn-icon lightbox rounded-full text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-camera"
                    viewBox="0 0 16 16"
                  >
                    <path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1v6zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z" />
                    <path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" />
                  </svg>
                </a>
              </div>
              <div className="absolute bottom-4 left-4 z-10 hidden group-hover:block">
                <a
                  href=""
                  className="h6 text-lg font-medium text-white transition duration-500 hover:text-blue-300"
                >
                  Artificial Inteligence
                </a>
                <p className="mb-0 text-xs text-gray-300">Robert</p>
              </div>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-md shadow-sm">
            <img
              src="https://i.postimg.cc/KjjP7SVB/pexels-designecologist-1779487.jpg"
              className="h-[300px] w-full transition duration-500 group-hover:origin-center group-hover:rotate-3 group-hover:scale-110"
              alt=""
            />
            <div className="absolute inset-0 z-0 h-[300px] opacity-50 transition duration-500 group-hover:bg-black"></div>
            <div>
              <div className=" absolute right-4 top-4 z-10 hidden group-hover:block">
                <a
                  href="#"
                  className="btn bg-orange-600 hover:bg-orange-700 border-orange-600 hover:border-orange-700 btn-icon lightbox rounded-full text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-camera"
                    viewBox="0 0 16 16"
                  >
                    <path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1v6zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z" />
                    <path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" />
                  </svg>
                </a>
              </div>
              <div className="absolute bottom-4 left-4 z-10 hidden group-hover:block">
                <a
                  href=""
                  className="h6 text-lg font-medium text-white transition duration-500 hover:text-blue-300"
                >
                  Web Technology
                </a>
                <p className="mb-0 text-xs text-gray-300">Website</p>
              </div>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-md shadow-sm">
            <img
              src="https://i.postimg.cc/rFJdVYPL/pexels-pixabay-270637.jpg"
              className="h-[300px] w-full transition duration-500 group-hover:origin-center group-hover:rotate-3 group-hover:scale-110"
              alt=""
            />
            <div className="absolute inset-0 z-0 h-[300px] opacity-50 transition duration-500 group-hover:bg-black"></div>
            <div>
              <div className=" absolute right-4 top-4 z-10 hidden group-hover:block">
                <a
                  href="#"
                  className="btn bg-orange-600 hover:bg-orange-700 border-orange-600 hover:border-orange-700 btn-icon lightbox rounded-full text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-camera"
                    viewBox="0 0 16 16"
                  >
                    <path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1v6zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z" />
                    <path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" />
                  </svg>
                </a>
              </div>
              <div className="absolute bottom-4 left-4 z-10 hidden group-hover:block">
                <a
                  href=""
                  className="h6 text-lg font-medium text-white transition duration-500 hover:text-blue-300"
                >
                  Seo Optimization
                </a>
                <p className="mb-0 text-xs text-gray-300">Content</p>
              </div>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-md shadow-sm">
            <img
              src="https://i.postimg.cc/q7HW1jpz/pexels-cottonbro-5473302.jpg"
              className="h-[300px] w-full transition duration-500 group-hover:origin-center group-hover:rotate-3 group-hover:scale-110"
              alt=""
            />
            <div className="absolute inset-0 z-0 h-[300px] opacity-50 transition duration-500 group-hover:bg-black"></div>
            <div>
              <div className=" absolute right-4 top-4 z-10 hidden group-hover:block">
                <a
                  href="#"
                  className="btn bg-orange-600 hover:bg-orange-700 border-orange-600 hover:border-orange-700 btn-icon lightbox rounded-full text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-camera"
                    viewBox="0 0 16 16"
                  >
                    <path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1v6zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z" />
                    <path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" />
                  </svg>
                </a>
              </div>
              <div className="absolute bottom-4 left-4 z-10 hidden group-hover:block">
                <a
                  href=""
                  className="h6 text-lg font-medium text-white transition duration-500 hover:text-blue-300"
                >
                  Cyber Security
                </a>
                <p className="mb-0 text-xs text-gray-300">Hackers</p>
              </div>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-md shadow-sm">
            <img
              src="https://i.postimg.cc/PfcHmbv8/pexels-pixabay-267389.jpg"
              className="h-[300px] w-full transition duration-500 group-hover:origin-center group-hover:rotate-3 group-hover:scale-110"
              alt=""
            />
            <div className="absolute inset-0 z-0 h-[300px] opacity-50 transition duration-500 group-hover:bg-black"></div>
            <div>
              <div className=" absolute right-4 top-4 z-10 hidden group-hover:block">
                <a
                  href="#"
                  className="btn bg-orange-600 hover:bg-orange-700 border-orange-600 hover:border-orange-700 btn-icon lightbox rounded-full text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-camera"
                    viewBox="0 0 16 16"
                  >
                    <path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1v6zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z" />
                    <path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" />
                  </svg>
                </a>
              </div>
              <div className="absolute bottom-4 left-4 z-10 hidden group-hover:block">
                <a
                  href=""
                  className="h6 text-lg font-medium text-white transition duration-500 hover:text-blue-300"
                >
                  Social Security
                </a>
                <p className="mb-0 text-xs text-gray-300">
                  Communication method
                </p>
              </div>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-md shadow-sm">
            <img
              src="https://i.postimg.cc/KcnXMXbC/pexels-pixabay-33488.jpg"
              className="h-[300px] w-full transition duration-500 group-hover:origin-center group-hover:rotate-3 group-hover:scale-110"
              alt=""
            />
            <div className="absolute inset-0 z-0 h-[300px] opacity-50 transition duration-500 group-hover:bg-black"></div>
            <div>
              <div className=" absolute right-4 top-4 z-10 hidden group-hover:block">
                <a
                  href="#"
                  className="btn bg-orange-600 hover:bg-orange-700 border-orange-600 hover:border-orange-700 btn-icon lightbox rounded-full text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-camera"
                    viewBox="0 0 16 16"
                  >
                    <path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1v6zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z" />
                    <path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" />
                  </svg>
                </a>
              </div>
              <div className="absolute bottom-4 left-4 z-10 hidden group-hover:block">
                <a
                  href=""
                  className="h6 text-lg font-medium text-white transition duration-500 hover:text-blue-300"
                >
                  GPS
                </a>
                <p className="mb-0 text-xs text-gray-300">Exact Location</p>
              </div>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-md shadow-sm">
            <img
              src="https://i.postimg.cc/GtBxvn8V/pexels-thisisengineering-3861958.jpg"
              className="h-[300px] w-full transition duration-500 group-hover:origin-center group-hover:rotate-3 group-hover:scale-110"
              alt=""
            />
            <div className="absolute inset-0 z-0 h-[300px] opacity-50 transition duration-500 group-hover:bg-black"></div>
            <div>
              <div className=" absolute right-4 top-4 z-10 hidden group-hover:block">
                <a
                  href="#"
                  className="btn bg-orange-600 hover:bg-orange-700 border-orange-600 hover:border-orange-700 btn-icon lightbox rounded-full text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-camera"
                    viewBox="0 0 16 16"
                  >
                    <path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1v6zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z" />
                    <path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" />
                  </svg>
                </a>
              </div>
              <div className="absolute bottom-4 left-4 z-10 hidden group-hover:block">
                <a
                  href=""
                  className="h6 text-lg font-medium text-white transition duration-500 hover:text-blue-300"
                >
                  Software Engineering
                </a>
                <p className="mb-0 text-xs text-gray-300">Software</p>
              </div>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-md shadow-sm">
            <img
              src="https://i.postimg.cc/mZNH6DRj/pexels-lisa-fotios-1092644.jpg"
              className="h-[300px] w-full transition duration-500 group-hover:origin-center group-hover:rotate-3 group-hover:scale-110"
              alt=""
            />
            <div className="absolute inset-0 z-0 h-[300px] opacity-50 transition duration-500 group-hover:bg-black"></div>
            <div>
              <div className=" absolute right-4 top-4 z-10 hidden group-hover:block">
                <a
                  href="#"
                  className="btn bg-orange-600 hover:bg-orange-700 border-orange-600 hover:border-orange-700 btn-icon lightbox rounded-full text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-camera"
                    viewBox="0 0 16 16"
                  >
                    <path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1v6zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z" />
                    <path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" />
                  </svg>
                </a>
              </div>
              <div className="absolute bottom-4 left-4 z-10 hidden group-hover:block">
                <a
                  href=""
                  className="h6 text-lg font-medium text-white transition duration-500 hover:text-blue-300"
                >
                  App Development
                </a>
                <p className="mb-0 text-xs text-gray-300">Mobile Apps</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery1;
