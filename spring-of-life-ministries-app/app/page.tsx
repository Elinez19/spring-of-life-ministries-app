import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import { Metadata } from "next";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Herobanner from "@/components/HeroBanner";
import Gallery from "@/components/Gallery/Gallery";
import Gallery1 from "@/components/Gallery1/Gallery1";
import Services from "@/components/Services/Services";
import Newsletter from "@/components/Newsletter/Newsletter";

export const metadata: Metadata = {
  title: "Spring of Life Ministries",
  description: `offers opportunities for collaborative effort to reach out t0
                  Youths and young adults.`,
  // other metadata
};
export default function Home() {
  return (
    <>
      <ScrollUp />
      <Herobanner />
      <Features />
      <Services />
      {/* <AboutSectionOne />
      <AboutSectionTwo /> */}
      <Gallery1 />
      <Gallery />
      <Testimonials />
      {/* <Pricing /> */}
      <Blog />
      <Newsletter />
      <Contact />
    </>
  );
}
