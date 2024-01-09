import AboutCta from "@/components/About/AboutCta";
import AboutHero from "@/components/About/AboutHero";
import AboutSectionFour from "@/components/About/AboutSectionFour";
import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionSix from "@/components/About/AboutSectionSix";
import AboutSectionThree from "@/components/About/AboutSectionThree";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import AboutTeam from "@/components/About/AboutTeam";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Spring of Life Ministries",
  description: `offers opportunities for collaborative effort to reach out t0
                  Youths and young adults.`,
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Our History"
        description="Spring of Life is a non-profit making Christian ministry that offers opportunities for collaborative effort to reach out to Youths and young adults."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
      {/* <AboutSectionFour />
      <AboutHero />
      <AboutSectionSix />
      <AboutTeam />
      <AboutCta /> */}
    </>
  );
};

export default AboutPage;
