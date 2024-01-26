import VisionTwo from "@/components/Vision/VisionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import VisionOne from "@/components/Vision/VisionOne";

import { Metadata } from "next";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";

export const metadata: Metadata = {
  title: "Spring of Life Ministries",
  description: `offers opportunities for collaborative effort to reach out t0
                  Youths and young adults.`,
  // other metadata
};

const Vision = () => {
  return (
    <>
      {/* <Breadcrumb
        pageName="Our Vision "
        description="Spring of Life is a non-profit making Christian ministry that offers opportunities for collaborative effort to reach out to Youths and young adults."
      /> */}
      <AboutSectionTwo />
      <VisionOne />
      <VisionTwo />
    </>
  );
};

export default Vision;
