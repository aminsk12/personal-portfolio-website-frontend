"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { BsFillPatchCheckFill } from "react-icons/bs";

const Education = () => {
  return (
    <div className="max-w-5xl mx-auto">
      {/* Education Section */}
      <section id="education" className="py-10 text-white">
        <motion.h2
          className="text-center text-3xl font-semibold text-white mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          My Education
        </motion.h2>
        <div className="container mx-auto space-y-12">
          {/* Education Item 1 */}
          <motion.div
            className="flex flex-col md:flex-row items-center gap-6 bg-white p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-20 h-20 flex items-center justify-center bg-gray-700 rounded-lg">
            <Image width={200} height={200} src="https://www.hamdarduniversity.edu.bd/images/hub_logo.png" alt="phero" />
            </div>
            <div>
              <h3 className="text-xl text-black font-semibold">Hamdard University Bangladesh</h3>
              <p className="text-sm text-black">Bachelor of Business Administration (BBA)</p>
              <p className="text-sm text-black">Major: Finance</p>
            </div>
          </motion.div>

          {/* Education Item 2 */}
          <motion.div
            className="flex flex-col md:flex-row items-center gap-6 bg-white p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="w-20 h-20 flex items-center justify-center bg-gray-700 rounded-lg">
              {/* <BsFillPatchCheckFill className="text-blue-500 text-3xl" /> */} 
              <Image width={200} height={200} src="https://web.programming-hero.com/static/media/ph_logo.cda7f338.svg" alt="phero" />
            </div>
            <div>
              <h3 className="text-xl text-black font-semibold">Programming Hero</h3>
              <p className="text-sm text-black">Complete Web Development Course</p>
               {/* <div className="flex text-black gap-6"><p>level 1 </p> <p>level 2</p></div> */}
              <p className="text-sm text-black">Skills: Web Development</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Education;
