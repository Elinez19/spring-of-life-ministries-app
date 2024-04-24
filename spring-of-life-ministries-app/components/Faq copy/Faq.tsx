import React from "react";

const Faq = () => {
  return (
    <div>
      (
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="font-manrope text-center text-4xl font-bold leading-[3.25rem] text-gray-900">
              Frequently asked questions
            </h2>
          </div>
          <div className="accordion-group" data-accordion="default-accordion">
            <div
              className="accordion accordion-active:bg-indigo-50 accordion-active:border-indigo-600 active mb-8 rounded-xl border border-solid border-gray-300 p-4 transition duration-500 lg:p-4"
              id="basic-heading-one-with-icon"
            >
              <button
                className="accordion-toggle accordion-active:font-medium accordion-active:text-indigo-600 group inline-flex w-full items-center justify-between text-left text-lg font-normal leading-8 text-gray-900 transition duration-500 hover:text-indigo-600"
                aria-controls="basic-collapse-one-with-icon"
              >
                <h5>How can I reset my password?</h5>
                <svg
                  className="accordion-active:text-indigo-600 accordion-active:hidden block h-6 w-6 origin-center text-gray-900 transition duration-500 group-hover:text-indigo-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 12H18M12 18V6"
                    stroke="currentColor"
                    stroke-width="1.6"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
                <svg
                  className="accordion-active:text-indigo-600 accordion-active:block hidden h-6 w-6 text-gray-900 transition duration-500 group-hover:text-indigo-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 12H18"
                    stroke="currentColor"
                    stroke-width="1.6"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </button>
              <div
                id="basic-collapse-one-with-icon"
                className="accordion-content max-h-64 w-full overflow-hidden pr-4"
                aria-labelledby="basic-heading-one"
              >
                <p className="text-base font-normal leading-6 text-gray-900">
                  To create an account, find the 'Sign up' or 'Create account'
                  button, fill out the registration form with your personal
                  information, and click 'Create account' or 'Sign up.' Verify
                  your email address if needed, and then log in to start using
                  the platform.
                </p>
              </div>
            </div>
            <div
              className="accordion accordion-active:bg-indigo-50 accordion-active:border-indigo-600 mb-8 rounded-xl border border-solid border-gray-300 p-4 lg:p-4"
              id="basic-heading-two-with-icon"
            >
              <button
                className="accordion-toggle accordion-active:font-medium accordion-active:text-indigo-600 group inline-flex w-full items-center justify-between text-left text-lg font-normal leading-8 text-gray-900 transition duration-500 hover:text-indigo-600"
                aria-controls="basic-collapse-two-with-icon"
              >
                <h5>How do I update my billing information?</h5>
                <svg
                  className="accordion-active:text-indigo-600 accordion-active:hidden block h-6 w-6 text-gray-900 transition duration-500 group-hover:text-indigo-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 12H18M12 18V6"
                    stroke="currentColor"
                    stroke-width="1.6"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
                <svg
                  className="accordion-active:text-indigo-600 accordion-active:block hidden h-6 w-6 text-gray-900 transition duration-500 group-hover:text-indigo-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 12H18"
                    stroke="currentColor"
                    stroke-width="1.6"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </button>
              <div
                id="basic-collapse-two-with-icon"
                className="accordion-content w-full overflow-hidden pr-4"
                aria-labelledby="basic-heading-two"
              >
                <p className="text-base font-normal leading-6 text-gray-900">
                  To create an account, find the 'Sign up' or 'Create account'
                  button, fill out the registration form with your personal
                  information, and click 'Create account' or 'Sign up.' Verify
                  your email address if needed, and then log in to start using
                  the platform.
                </p>
              </div>
            </div>
            <div
              className="accordion accordion-active:bg-indigo-50 accordion-active:border-indigo-600 mb-8 rounded-xl border border-solid border-gray-300 p-4 lg:p-4"
              id="basic-heading-three-with-icon"
            >
              <button
                className="accordion-toggle accordion-active:font-medium accordion-active:text-indigo-600 group inline-flex w-full items-center justify-between text-left text-lg font-normal leading-8 text-gray-900 transition duration-500 hover:text-indigo-600"
                aria-controls="basic-collapse-three-with-icon"
              >
                <h5>How can I contact customer support?</h5>
                <svg
                  className="accordion-active:text-indigo-600 accordion-active:hidden block h-6 w-6 text-gray-900 transition duration-500 group-hover:text-indigo-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 12H18M12 18V6"
                    stroke="currentColor"
                    stroke-width="1.6"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
                <svg
                  className="accordion-active:text-indigo-600 accordion-active:block hidden h-6 w-6 text-gray-900 transition duration-500 group-hover:text-indigo-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 12H18"
                    stroke="currentColor"
                    stroke-width="1.6"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </button>
              <div
                id="basic-collapse-three-with-icon"
                className="accordion-content w-full overflow-hidden pr-4"
                aria-labelledby="basic-heading-three"
              >
                <p className="text-base font-normal leading-6 text-gray-900">
                  To create an account, find the 'Sign up' or 'Create account'
                  button, fill out the registration form with your personal
                  information, and click 'Create account' or 'Sign up.' Verify
                  your email address if needed, and then log in to start using
                  the platform.
                </p>
              </div>
            </div>
            <div
              className="accordion accordion-active:bg-indigo-50 accordion-active:border-indigo-600 mb-8 rounded-xl border border-solid border-gray-300 p-4 lg:p-4"
              id="basic-heading-three-with-icon"
            >
              <button
                className="accordion-toggle accordion-active:font-medium accordion-active:text-indigo-600 group inline-flex w-full items-center justify-between text-left text-lg font-normal leading-8 text-gray-900 transition duration-500 hover:text-indigo-600"
                aria-controls="basic-collapse-three-with-icon"
              >
                <h5>How do I delete my account?</h5>
                <svg
                  className="accordion-active:text-indigo-600 accordion-active:hidden block h-6 w-6 text-gray-900 transition duration-500 group-hover:text-indigo-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 12H18M12 18V6"
                    stroke="currentColor"
                    stroke-width="1.6"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
                <svg
                  className="accordion-active:text-indigo-600 accordion-active:block hidden h-6 w-6 text-gray-900 transition duration-500 group-hover:text-indigo-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 12H18"
                    stroke="currentColor"
                    stroke-width="1.6"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </button>
              <div
                id="basic-collapse-three-with-icon"
                className="accordion-content w-full overflow-hidden pr-4"
                aria-labelledby="basic-heading-three"
              >
                <p className="text-base font-normal leading-6 text-gray-900">
                  To create an account, find the 'Sign up' or 'Create account'
                  button, fill out the registration form with your personal
                  information, and click 'Create account' or 'Sign up.' Verify
                  your email address if needed, and then log in to start using
                  the platform.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      )
    </div>
  );
};

export default Faq;
