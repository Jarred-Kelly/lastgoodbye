import { ReactNode } from "react";
import type { Metadata } from "next";
import { ClerkProvider, SignInButton } from "@clerk/nextjs";
import { DM_Sans } from "next/font/google";

import "@stream-io/video-react-sdk/dist/css/styles.css";
import "react-datepicker/dist/react-datepicker.css";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Last Goodbye",
  description: "Funeral Streaming Service",
  icons: {
    icon: "/icons/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <ClerkProvider
        signInUrl="/admin/sign-in"
        signUpUrl="/admin/sign-up"
        signInForceRedirectUrl="/dashboard"
        signUpForceRedirectUrl="/dashboard"
        appearance={{
          layout: {
            socialButtonsVariant: "iconButton",
            logoImageUrl: "/icons/lastGoodbye-logo.svg",
            unsafe_disableDevelopmentModeWarnings: true, // Remeber to remove, and not launch dev to prod
          },
          variables: {
            colorText: "#fff",
            colorPrimary: "#0E78F9",
            colorBackground: "#1C1F2E",
            colorInputBackground: "#252A41",
            colorInputText: "#fff",
          },
        }}
      >
        <body className={`${inter.className} bg-dark-2`}>
          <Toaster />
          {children}
        </body>
      </ClerkProvider>
    </html>
  );
}
