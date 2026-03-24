import type { Metadata, Viewport } from "next";
import { Tajawal, Fira_Code } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/ThemeProvider";

const tajawal = Tajawal({
  variable: "--font-tajawal",
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "700", "800", "900"],
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Code Academy Pro | تعلم البرمجة بالعربي من الصفر",
  description: "منصة Code Academy Pro لتعلم البرمجة بالعربي — دورات في HTML, CSS, JavaScript, Python, React, AI ومحرر كود تفاعلي مجاني.",
  keywords: ["تعلم البرمجة", "برمجة بالعربي", "HTML", "CSS", "JavaScript", "Python", "React", "دورات برمجة", "كود أكاديمي"],
  authors: [{ name: "Code Academy Pro" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Code Academy Pro | تعلم البرمجة بالعربي",
    description: "تعلم البرمجة من الصفر بمحتوى عربي متميز — دورات تفاعلية ومحرر كود مباشر واختبارات ذكية.",
    type: "website",
    locale: "ar_AR",
    siteName: "Code Academy Pro",
  },
  twitter: {
    card: "summary_large_image",
    title: "Code Academy Pro | تعلم البرمجة بالعربي",
    description: "منصة عربية مجانية لتعلم البرمجة — HTML, CSS, JS, Python, AI",
  },
  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f0f4ff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a1a" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className={`${tajawal.variable} ${firaCode.variable} font-sans antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
