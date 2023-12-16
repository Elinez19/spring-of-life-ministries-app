"use client";
import React from "react";
import SingleBrand from "./SingleBrandLogo";
import brandData from "./BrandsLogoData";

const BrandsLogo = () => {
  return (
    <>
      {/* <!-- ===== Clients Start ===== --> */}
      <section className="bg-alabaster dark:border-y-strokedark border border-x-0 border-y-stroke py-11 dark:bg-black">
        <div className="max-w-c-1390 mx-auto px-4 md:px-8 2xl:px-0">
          <div className="gap-7.5 lg:gap-12.5 xl:gap-29 grid grid-cols-3 items-center justify-center md:grid-cols-6">
            {brandData.map((brand, key) => (
              <SingleBrand brand={brand} key={key} />
            ))}
          </div>
        </div>
      </section>
      {/* <!-- ===== Clients End ===== --> */}
    </>
  );
};

export default BrandsLogo;
