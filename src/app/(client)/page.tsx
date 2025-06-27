import Blog from "@/components/Blog/Blog";
import AboutMe from "@/components/Home/AboutMe";
import Banner from "@/components/Home/Banner";
import Contact from "@/components/Home/ContactUs";
import Skills from "@/components/Home/MySkills";
import AllProject from "@/components/Home/Project";


export default function Home() {
  return (
    <div className="w-full py-[50px]   min-h-screen">
      <Banner />
      <AboutMe />
      <Skills />
      <AllProject />
      <Blog />
      <Contact />
    </div>
  );
}
