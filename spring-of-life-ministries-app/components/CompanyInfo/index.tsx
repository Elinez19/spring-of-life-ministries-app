"use client";
import React from "react";
import SectionTitle from "../Common/SectionTitle";
import CompanyInfoData from "./CompanyInfoData";
import CompanyInfo from "./CompanyInfo";

const Feature = () => {
  return (
    <>
      {/* <!-- ===== Features Start ===== --> */}
      <section id="features" className="lg:py-25 xl:py-30 py-20">
        <div className="max-w-c-1315 mx-auto px-4 md:px-8 xl:px-0">
          {/* <!-- Section Title Start --> */}
          <SectionTitle
            title="Our Latest Blogs"
            paragraph="Spring of Life is a non-profit making Christian ministry that offers opportunities for collaborative effort to reach out to Youths and young adults."
            center
          />
          {/* <!-- Section Title End --> */}

          <div className="mt-12.5 gap-7.5 lg:mt-15 xl:gap-12.5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:mt-20">
            {/* <!-- Features item Start --> */}

            {CompanyInfoData.map((feature, key) => (
              <CompanyInfo feature={feature} key={key} />
            ))}
            {/* <!-- Features item End --> */}
          </div>
        </div>
      </section>

      {/* <!-- ===== Features End ===== --> */}
    </>
  );
};

export default Feature;
