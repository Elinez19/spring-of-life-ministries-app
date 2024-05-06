import Image from "next/image";
import { Herobanner } from "@/types/herobanner";
const SingleHeroBanner = ({ banner }: { banner: Herobanner }) => {
  const { id, mainTitle, img, title, paragraphy, buttonText } = banner;
  return (
    <div className="relative h-[500px] md:h-[600px] xl:h-[700px]">
      <div className="absolute inset-0">
        <Image
          src={img}
          alt="hero section"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0"
        />
        <div className="absolute inset-0 bg-purple opacity-50"></div>
      </div>
      <div className="absolute inset-0 z-10 flex items-center justify-center text-center text-white">
        <div className="max-w-[1200px]">
          <h1 className="mb-8 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl xl:text-6xl">
            {mainTitle}
          </h1>
          <p className="mb-8 whitespace-normal text-xs md:text-sm lg:text-base xl:text-lg">
            {paragraphy}
          </p>
          <button
            type="button"
            className="rounded border-2 border-white px-6 py-2 text-sm font-medium uppercase leading-normal transition duration-150 ease-in-out hover:border-opacity-0 hover:bg-opacity-0 hover:text-white focus:border-opacity-0 focus:text-white focus:outline-none focus:ring-0 active:border-opacity-0 active:text-white"
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleHeroBanner;
