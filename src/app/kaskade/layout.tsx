import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HookGrab",
  description: "Test you webhooks in Real-Time | GO Backend",
	other: {
		"go-import": "hg.atrin.dev/kaskade git https://github.com/hookgrab/kaskade",
		// "go-import": "hg.atrin.dev/kaskade git https://git.atrin.dev/hookgrab/kaskade",
	}
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
	return <>{children}</>
}
