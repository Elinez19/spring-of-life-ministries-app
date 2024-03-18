import CoursesPage from "@/components/Programmes/MissionProgrammes";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Card from "@/components/Courses";

export const metadata: Metadata = {
  title: "Spring of Life Ministries",
  description: `offers opportunities for collaborative effort to reach out t0
                  Youths and young adults.`,
  // other metadata
};

const Courses = () => {
  return (
    <>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </>
  );
};

export default Courses;
