import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import ValuesOne from "@/components/Values/ValuesOne";
import ValuesTwo from "@/components/Values/ValuesThree";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Spring of Life Ministries",
  description: `offers opportunities for collaborative effort to reach out t0
                  Youths and young adults.`,
  // other metadata
};

const Values = () => {
  return (
    <>
      {/* <Breadcrumb
        pageName="Our Values "
        description="Spring of Life is a non-profit making Christian ministry that offers opportunities for collaborative effort to reach out to Youths and young adults."
      /> */}
      <ValuesOne />
      <ValuesTwo />
    </>
  );
};

export default Values;
