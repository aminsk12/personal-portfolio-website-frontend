
"use client";
import { Button } from "@/components/ui/button";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { Locate, PhoneCall, MessageCircle, Send } from "lucide-react";
import { useRef, useState } from "react";
import { MdEmail } from "react-icons/md";
import { toast } from "sonner";

export default function ContactUs() {
  const form = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) {
        toast.error("Form not initialized properly.");
        return;
    }


    setIsSending(true);
    emailjs
        .sendForm(
            'service_tjjeb3m',
            'template_e5442fw',
            form.current,
            '2jl78v7DRskL6El2' as string
        )
        .then(
            () => {
                form.current?.reset();
                toast.success("Email sent successfully");
                setIsSending(false);
            },
            () => {
                toast.error("Failed to send Email");
                setIsSending(false);
            }
        );
};

  return (
      <main className="max-w-5xl mx-auto px-4 py-12">
          <section className="dark:bg-white bg-cyan-100 rounded-lg px-6 py-8 md:px-8 md:py-10 lg:p-12">
              <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-5"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}>
                  <div className="p-6 mr-2 sm:rounded-lg">
                      <h6
                          className=" font-medium uppercase text-sm"
                        
                      >
                          Contact Me
                      </h6>
                      <h2 className="text-3xl lg:text-4xl font-semibold mb-3 lg:mb-4">
                          Get in touch
                      </h2>
                      <p className="text-black">
                          Fill in the form to start a conversation
                      </p>
                      <div className="flex items-center mt-8 text-black">
                         <Locate/>
                          <div className="ml-4 text-md">
                              Kolkta, West Bangal, India
                          </div>
                      </div>
                      <div className="flex items-center mt-4 text-black">
                         <PhoneCall/>
                          <div className="ml-4 text-md">
                              +91 8101718317
                          </div>
                      </div>
                      <div className="flex items-center mt-4 text-black">
                         <MessageCircle />
                          <div className="ml-4 text-md">
                              +91 7047408860
                          </div>
                      </div>
                      <div className="flex items-center mt-2 text-black">
                         <MdEmail/>
                          <div className="ml-4 text-md">
                             aminskeh786@gmail.com
                          </div>
                      </div>
                     
                  </div>
                  <form
                      ref={form}
                      className="p-6 flex flex-col justify-center"
                      onSubmit={sendEmail}
                  >
                      <div className="flex flex-col">
                          <input
                              type="text"
                              id="name"
                              name="name"
                              required
                              className="w-full bg-[rgba(255,255,255,.05)] rounded border border-gray-300 text-sm outline-none text-gray-300 py-2 px-3.5 resize-none leading-6 transition-colors duration-200 ease-in-out"
                              placeholder="Enter Name"
                          />
                      </div>
                      <div className="flex flex-col mt-2">
                          <input
                              type="email"
                              id="email"
                              name="email"
                              required
                              className="w-full bg-[rgba(255,255,255,.05)] rounded border border-gray-300 text-sm outline-none text-gray-300 py-2 px-3.5 resize-none leading-6 transition-colors duration-200 ease-in-out"
                              placeholder="Enter Email Address"
                          />
                      </div>
                      <div className="flex flex-col mt-2">
                          <textarea
                              id="message"
                              name="message"
                              required
                              className="w-full bg-[rgba(255,255,255,.05)] rounded border border-gray-300 h-32 text-sm outline-none text-gray-300 py-2 px-3.5 resize-none leading-6 transition-colors duration-200 ease-in-out"
                              placeholder="Enter Message"
                          />
                      </div>
                      <div className="mt-2">
                          <Button type="submit" disabled={isSending} size={'lg'} className="w-full">
                              {isSending ? "Email Sending..." : "Email Send"}
                              <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </Button>
                      </div>
                  </form>
              </motion.div>
          </section>
      </main>
  );
}