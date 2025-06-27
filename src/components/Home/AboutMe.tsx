"use client"
import { motion } from "framer-motion";


const AboutMe= () => {
  return (
    <section className=" py-16 relative" id="about">
      <div className="container mx-auto px-6 md:px-12 flex flex-col items-center space-y-6">
        {/* Heading */}
        <motion.h2
          className="text-center  text-3xl md:text-4xl font-semibold dark:text-white upper-case"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>

        {/* Paragraph */}
        <motion.p
          className="dark:text-gray-300 text-center text-base md:text-lg max-w-5xl leading-relaxed "
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          An enthusiastic learner, passionate Full Stack Developer seeking to build innovative web applications. With a strong foundation in JavaScript, TypeScript, DBMS, SQL, PostgreSQL, Prisma, MongoDB, Mongoose, Express.js, React.js, Next.js, Node.js, Firebase, JWT, Tailwind CSS, Bootstrap, I'm dedicated to crafting user-friendly and high-performance experiences.
<br/>
Beyond technical prowess, I'm driven by a love for learning and a commitment to delivering exceptional results. I thrive in collaborative environments, working closely with teams to bring creative ideas to life.


<br/>When I'm not immersed in code, you can find me exploring new places or losing myself in the rhythm of music. Let's connect to discuss how my skills can contribute to your next project.
        </motion.p>
      </div>
      <div
  className="py-12"
  data-aos="fade-up"
  data-aos-duration="1000"
>
  <h1 className="text-4xl font-bold text-center dark:text-white mb-8">What I Do</h1>
  {/* Service content */}
  <div className="flex flex-wrap justify-center gap-6 text-center">
    {/* Single service */}
    <div className="max-w-xs bg-white shadow-lg p-6 border border-white transition duration-300 hover:border-yellow-400">
      <h2 className="text-lg font-semibold text-black mb-4">Mobile-First Design</h2>
      <p className="text-sm text-black">
        I craft websites with a mobile-first approach, ensuring that your
        website looks and works flawlessly on all devices, from smartphones
        to large desktops.
      </p>
    </div>
    {/* Single service */}
    <div className="max-w-xs bg-white shadow-lg p-6 border border-white transition duration-300 hover:border-yellow-400">
      <h2 className="text-lg font-semibold text-black mb-4">Engaging UI/UX Design</h2>
      <p className="text-sm text-black">
        I design intuitive and visually captivating interfaces that engage
        users, providing an outstanding experience that enhances the usability
        and accessibility of your website.
      </p>
    </div>
    {/* Single service */}
    <div className="max-w-xs bg-white shadow-lg p-6 border border-white transition duration-300 hover:border-yellow-400">
      <h2 className="text-lg font-semibold text-black mb-4">Website Speed Optimization</h2>
      <p className="text-sm text-black">
        I specialize in improving website speed by optimizing performance,
        ensuring fast load times and a seamless browsing experience that keeps
        visitors engaged and reduces bounce rates.
      </p>
    </div>
  </div>
</div>

    </section>
  );
};

export default AboutMe;