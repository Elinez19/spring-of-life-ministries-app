import React from "react";

const AboutCta = () => {
  return (
    <div className="flex flex-row items-start justify-start gap-[20px] self-stretch">
      <div className="flex w-[553px] flex-col items-start justify-start gap-[24px] overflow-hidden pb-0 pl-0 pr-[48px] pt-0">
        <div className="flex flex-col items-start justify-start overflow-hidden">
          <h1 className="whitespace-nowrap font-['Poppins'] text-[50px] font-bold leading-[60px] text-[#1f284f]">
            Become a Partner
          </h1>
          <p className="w-[444px] font-['Poppins'] text-[20px] leading-[32px] text-[#575757]">
            Used and supported in over 178 countries around the globe.
            <br />
            We’ll work with you to open more doors and close more sales across
            all verticals.
          </p>
        </div>
      </div>
      <div className="ml-40 flex flex-row items-start justify-start gap-[20px] self-stretch">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div
              className="wow fadeInUp mb-12 rounded-sm bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s
              "
            >
              <form>
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="name"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your name"
                        className="w-full rounded-sm border border-stroke bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="email"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Email
                      </label>
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full rounded-sm border border-stroke bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label
                        htmlFor="message"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Message
                      </label>
                      <textarea
                        name="message"
                        rows={5}
                        placeholder="Enter your Message"
                        className="w-full resize-none rounded-sm border border-stroke bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      ></textarea>
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <button className="rounded-sm bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark">
                      Submit Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            {/* <NewsLatterBox /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

<div className="flex flex-row items-start justify-start gap-[20px] self-stretch">
  <div className="flex flex-1 flex-col items-start justify-start gap-[4px]">
    <div className="w-[381px] font-['Poppins'] text-[12px] font-medium text-[#515458]">
      First name
    </div>
    <div className="relative flex h-[48px] shrink-0 self-stretch">
      <div className="absolute left-0 top-0 h-[48px] w-[247px] rounded-[8px] border-[1px] border-solid border-[#b7bfc7] bg-[#fff]">
        <div className="absolute left-[12px] top-[12px] w-[357px] font-['Poppins'] text-[16px] leading-[24px] text-[#575757]">
          enter first name
        </div>
      </div>
    </div>
  </div>
  <div className="flex flex-1 flex-col items-start justify-start gap-[4px]">
    <div className="w-[381px] font-['Poppins'] text-[12px] font-medium text-[#515458]">
      Last name
    </div>
    <div className="relative flex h-[48px] shrink-0 self-stretch">
      <div className="absolute left-0 top-0 h-[48px] w-[247px] rounded-[8px] border-[1px] border-solid border-[#b7bfc7] bg-[#fff]">
        <div className="absolute left-[12px] top-[12px] w-[357px] font-['Poppins'] text-[16px] leading-[24px] text-[#575757]">
          enter last name
        </div>
      </div>
    </div>
  </div>
</div>;
export default AboutCta;
