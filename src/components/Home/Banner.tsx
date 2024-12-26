"use client"; // Add this directive at the top of the file
import { motion } from "framer-motion";
import Link from "next/link";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import ResumeDownload from "../shared/ResumeDownload";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { BsLinkedin } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";

const socialLinks = [
  {
    Icon: FaLinkedin,
    link: "https://www.linkedin.com/in/aalabonya/",
  },
  {
    Icon: FaXTwitter,
    link: "https://twitter.com/AALabonya",
  },
  {
    Icon: FaGithub,
    link: "https://github.com/AALabonya",
  },
  {
    Icon: FaFacebook,
    link: "https://www.facebook.com/profile.php?id=100053911782912",
  },
];

const Banner = () => {
  return (
    <section className="h-[80vh] flex items-center gap-28 justify-center overflow-hidden">
      <div className="relative z-[2]">
        <h3 className="text-[18px] md:text-[30px] text-white">I&apos;M</h3>
        <h1 className="titleText leading-[99%] text-[50px] md:text-[96px]">
          Aklima Akter
        </h1>
        <TypeAnimation
          className="font-semibold text-transparent text-[20px] md:text-[44px] upper-case text-white leading-10 bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600"
          sequence={[
            "I am a frontend Developer.",
            1000,
            "I am a full stack developer.",
            1000,
            "I am a MERN stack developer.",
            1000,
            "I am a React js developer.",
            1000,
          ]}
          speed={50}
          style={{ fontSize: "2em" }}
          repeat={Infinity}
        />
        <p className="text-white text-[12px] md:text-[15px] max-w-[550px]">
        Welcome to my portfolio—let's create innovative, high-performance web applications together!
        </p>

        <div className="flex items-start justify-start flex-col md:flex-row gap-[20px] mt-[25px]">
          <Link
            href="#about"
            className="bg-white px-4 py-1 rounded-lg font-bold"
            target="_blank"
          >
            ABOUT ME
          </Link>
          <ResumeDownload />
        </div>
      </div>
      <div>
        {/* Right Section */}
        <motion.div
          className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-gray-700 shadow-lg"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Image
           width={200}
           height={200}
             src="https://i.ibb.co.com/6RVVRMP/Aklima-Akter-wht-bg.jpg"
             alt="Profile"
             className="w-full h-full object-cover"
          />
         </motion.div>
      </div>
      <div className="fixed z-[50] top-[50%] right-12 -translate-x-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-[50px] text-white">
        {socialLinks.map(({ Icon, link }, i) => (
          <Link key={i + "social"} href={link} className="socialIcon text-[40px]">
            <Icon />
          </Link>
        ))}
      </div>
      {/* <div className="text-emerald-300 bg-slate-900">
      <div className="header_social text-emerald-300">
        <a href="https://www.linkedin.com/in/aalabonya"  target="_blank" rel="noopener noreferrer" ><BsLinkedin className='text text-emerald-300 bg-emerald-800'/></a>
        <a href="https://github.com/AALabonya"  target="_blank" rel="noopener noreferrer"><FaGithub className='text text-emerald-300 bg-emerald-800'/></a>
        <a href="https://twitter.com/AALabonya"  target="_blank" rel="noopener noreferrer"><FaXTwitter className='text text-emerald-300 bg-emerald-800'/></a>
      </div>
      </div> */}
    </section>
  );
};

export default Banner;
