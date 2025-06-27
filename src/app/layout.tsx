import type { Metadata, Viewport } from "next";
import { Judson } from "next/font/google";
import "./globals.css";
import ReduxProvider from "@/provider/ReduxProvider";
import { siteConfig } from "@/config/site";
import { ThemeProvider } from "@/components/shared/ThemeProvider";
 // নতুন ইম্পোর্ট

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s - ${siteConfig.keywords}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "https://res.cloudinary.com/dlmmd8a0k/image/upload/v1746943019/Black___Blue_Minimalist_Modern_Initial_Font_Logo-removebg-preview_l5sgy9.png",
  },
};

const judson = Judson({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <link rel="icon" href="/favicon.ico.png" sizes="any" />
      <body className={judson.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <ReduxProvider>{children}</ReduxProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}