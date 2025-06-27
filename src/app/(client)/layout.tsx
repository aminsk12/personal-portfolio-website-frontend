import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navber";
import ScrollToTopButton from "@/components/shared/ScrollToTop";


const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <main className="w-full bg-white dark:bg-cyan-900 min-h-screen">
        <div className="">{children}</div>
        <ScrollToTopButton />
      </main>
      <Footer />
    </>
  );
};

export default Layout;