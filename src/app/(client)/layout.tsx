

import Footer from "@/components/shared/Footer";

import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
   
      <main className="w-full bg-cyan-900  min-h-screen">
        <div className="">{children}</div>
      </main>
      <Footer/>
    </>
  );
};

export default layout;
