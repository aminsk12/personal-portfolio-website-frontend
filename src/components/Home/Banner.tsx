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
    link: "https://www.linkedin.com/in/amin-sk",
  },
  {
    Icon: FaGithub,
    link: "https://github.com/aminsk12",
  },
  {
    Icon: FaFacebook,
    link: "https://www.facebook.com/amin.sk.979568",
  },
];

const Banner = () => {
  return (
    <section className="min-h-[80vh] flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-28 px-4 py-10 relative overflow-hidden">
      {/* Left Content */}
      <div className="relative z-[2] order-2 lg:order-1 text-center lg:text-left">
        <h3 className="text-[18px] md:text-[30px] text-cyan-900 dark:text-blue-500">
          I&apos;M
        </h3>
        <h1 className="titleText leading-[99%] text-[50px] md:text-[96px] text-black dark:text-white">
          Amin sk
        </h1>
        <TypeAnimation
          className="font-semibold text-transparent text-[20px] md:text-[44px] upper-case  leading-10 bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600"
          sequence={[
            "I am a Frontend Developer.",
            1000,
            "I am a Full stack Developer.",
            1000,
            "I am a MERN stack Developer.",
            1000,
            "I am a React js Developer.",
            1000,
          ]}
          speed={10}
          style={{ fontSize: "1.5rem" }}
          repeat={Infinity}
        />
        <p className="text-black dark:text-white text-[16px] md:text-[20px] pt-5 max-w-[550px] mx-auto lg:mx-0">
          Welcome to my portfolio—let's create innovative, high-performance web
          applications together!
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5 mt-[25px]">
          <Link
            href="#about"
            className="bg-black text-white dark:bg-white dark:text-black px-6 py-2 rounded-lg font-bold hover:bg-gray-900 dark:hover:bg-gray-200 transition"
          >
            About Me
          </Link>
          <ResumeDownload />
        </div>
      </div>

      {/* Right Image */}
      <div className="order-1 lg:order-2">
        <motion.div
          className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-gray-700 shadow-lg"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            width={256}
            height={256}
            src="https://i.ibb.co/VmCJkhg/hjhggff.jpg"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

      {/* Social Links Sidebar - Hidden on mobile, shown on lg+ */}
      <div className="fixed z-[50] top-[50%] right-4 lg:right-8 xl:right-12 -translate-y-1/2 hidden lg:flex flex-col gap-6 lg:gap-8 text-white">
        {socialLinks.map(({ Icon, link }, i) => (
          <Link
            key={i + "social"}
            href={link}
            className="socialIcon text-3xl lg:text-4xl hover:text-emerald-400 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon />
          </Link>
        ))}
      </div>

      {/* Mobile Social Links - Shown at bottom on mobile */}
      <div className="lg:hidden flex order-3 gap-6 mt-8 text-white">
        {socialLinks.map(({ Icon, link }, i) => (
          <Link
            key={i + "mobile-social"}
            href={link}
            className="text-3xl hover:text-emerald-400 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Banner;
