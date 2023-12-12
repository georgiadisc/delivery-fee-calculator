import type { Metadata } from "next";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Delivery Fee Calculator | Wolt Delivery",
  description:
    "Elevate your Wolt experience by effortlessly planning and calculating delivery fees. Discover and get what you want, delivered to your home and office with ease",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
