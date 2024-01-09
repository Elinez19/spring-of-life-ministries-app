import Image from "next/image";

const AboutSectionThree = () => {
  return (
    <section className="max-width padding-x">
      <div className="flex w-[553px] flex-col items-start justify-start gap-[32px] overflow-hidden pb-0 pl-0 pr-[48px] pt-0">
        <div className="flex flex-col items-start justify-start overflow-hidden">
          <h2 className="w-[444px] font-['Poppins'] text-[50px] font-bold leading-[60px] text-[#1f284f]">
            About Us
          </h2>
        </div>
        <div className="flex flex-col items-start justify-start gap-[16px]">
          <p className="w-[444px] font-['Poppins'] text-[20px] font-medium leading-[32px] text-[#1f284f]">
            Who are we? MailBlink is a team of talented individuals working
            together to make software people love.
          </p>
          <p className="w-[444px] font-['Poppins'] text-[20px] leading-[32px] text-[#575757]">
            We develop multi-award winning enterprise-class software that helps
            IT teams audit IT environments.
          </p>
        </div>
        <div className="flex flex-row items-center justify-center gap-[16px]">
          <div className="flex w-[173px] shrink-0 flex-col items-center justify-center rounded-[30px] border-[1px] border-solid border-[#0070f0e5] bg-[#0070f0e5] px-[24px] py-[12px]">
            <button className="custom-btn">Contact Us</button>
          </div>
          <div className="flex w-[173px] shrink-0 flex-col items-center justify-center rounded-[30px] border-[1px] border-solid border-[#3cba79] bg-[#3cba79] px-[24px] py-[12px]">
            <button className="whitespace-nowrap font-['Poppins'] text-[16px] font-bold leading-[24px] text-[#fff]">
              Book a Demo
            </button>
        <div className="h-[480px] w-[443px] rounded-b rounded-t-[16px] border-[1px] border-solid border-[#0070f0]">
          <Image
            src="/images/about-hero.png"
            alt="about-image"
            width="443"
            height="480"
            className="w-full"
          />
          <div className="h-[480px] w-[443px] rounded-b rounded-t-[16px] bg-[#afd1f866] opacity-[.98]"></div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionThree;
