import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const VisionOne = () => {
  const List = ({ text }) => (
    <p className="mb-5 flex items-center text-lg font-medium text-body-color">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
        {checkIcon}
      </span>
      {text}
    </p>
  );

  return (
    // <section id="about" className="pt-16 md:pt-20 lg:pt-28">
    //   <div className="container">
    //     <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
    //       <div className="-mx-4 flex flex-wrap items-center">
    //         <div className="w-full px-4 lg:w-1/2">
    //           <SectionTitle
    //             title="Our Mission"
    //             paragraph="Empower youths and young adults, instilling hope, while spreading the eternal message of Christ as outlined in Revelation 14:6-12, aligning with the Great Commission in Matthew 28:18-20 to make disciples of all nations."
    //             mb="44px"
    //           />

    //           <div
    //             className="wow fadeInUp mb-12 max-w-[570px] lg:mb-0"
    //             data-wow-delay=".15s"
    //           >
    //             <div className="mx-[-12px] flex flex-wrap">
    //               <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
    //                 <List text="Implement transformative programs for youths to positively impact society." />
    //                 <List text="Empower young adults, especially in developing countries." />
    //                 <List text="Create small groups in educational institutions for relationship-building and integration." />
    //               </div>

    //               <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
    //                 <List text="Establish a regular support center for academic and life issues in higher institutions." />
    //                 <List text="Evaluate and address the needs of youths in developing countries, starting with Nigeria." />
    //                 <List text="Organize vocational studies to equip young adults for self-employment and societal impact." />
    //               </div>
    //             </div>
    //           </div>
    //         </div>

    //         <div className="w-full px-4 lg:w-1/2">
    //           <div
    //             className="wow fadeInUp relative mx-auto aspect-[25/24] max-w-[500px] lg:mr-0"
    //             data-wow-delay=".2s"
    //           >
    //             <Image
    //               src="/images/about/about-image.svg"
    //               alt="about-image"
    //               fill
    //               className="mx-auto max-w-full drop-shadow-three dark:hidden dark:drop-shadow-none lg:mr-0"
    //             />
    //             <Image
    //               src="/images/about/about-image-dark.svg"
    //               alt="about-image"
    //               fill
    //               className="mx-auto hidden max-w-full drop-shadow-three dark:block dark:drop-shadow-none lg:mr-0"
    //             />
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>

    <section className="bg-white bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')] pt-16 dark:bg-gray-900 dark:bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-dark.svg')] md:pt-20 lg:pt-28">
      <div className="relative z-10 mx-auto max-w-screen-xl px-4 py-8 text-center lg:py-16">
        <a
          href="#"
          className="mb-7 inline-flex items-center justify-between rounded-full bg-blue-100 px-1 py-1 pe-4 text-sm text-blue-700 hover:bg-blue-200 dark:bg-blue-900 dark:text-blue-300 dark:hover:bg-blue-800"
        >
          <span className="me-3 rounded-full bg-blue-600 px-4 py-1.5 text-xs text-white">
            New
          </span>{" "}
          <span className="text-sm font-medium">
            Jumbotron component was launched! See what is new
          </span>
          <svg
            className="ms-2 h-2.5 w-2.5 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
        </a>
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
          We invest in the world’s potential
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-500 dark:text-gray-200 sm:px-16 lg:px-48 lg:text-xl">
          Here at Flowbite we focus on markets where technology, innovation, and
          capital can unlock long-term value and drive economic growth.
        </p>
        <form className="mx-auto w-full max-w-md">
          <label
            htmlFor="default-email"
            className="sr-only mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Email sign-up
          </label>
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3.5 rtl:inset-x-0">
              <svg
                className="h-4 w-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 16"
              >
                <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
              </svg>
            </div>
            <input
              type="email"
              id="default-email"
              className="block w-full rounded-lg border border-gray-300 bg-white p-4 ps-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder="Enter your email here..."
              required
            ></input>
            <button
              type="submit"
              className="absolute bottom-2.5 end-2.5 rounded-lg bg-blue-700 px-4 py-2 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Sign up
            </button>
          </div>
        </form>
      </div>
      <div className="absolute left-0 top-0 z-0 h-full w-full bg-gradient-to-b from-blue-50 to-transparent dark:from-blue-900"></div>
    </section>
  );
};

export default VisionOne;
