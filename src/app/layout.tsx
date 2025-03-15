import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HookGrab",
  description: "Test you webhooks in Real-Time",
	other: {
		"go-import": "hg.atrin.dev/proto mod https://github.com/hookgrab/hg-proto",
	}
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
			<Head>
				{/* <meta name="go-import" content="hg.atrin.dev/proto mod https://git.atrin.dev/hookgrab/hg-proto" /> */}
				<meta name="go-import" content="hg.atrin.dev/proto mod https://github.com/hookgrab/hg-proto" />
			</Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
