import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HookGrab",
  description: "Test you webhooks in Real-Time",
	other: {
		"go-import": "hg.atrin.dev/proto git https://github.com/hookgrab/hg-proto",
		// "go-import": "hg.atrin.dev/proto git https://git.atrin.dev/hookgrab/hg-proto",
	}
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
	return <>{children}</>
}
