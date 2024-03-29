import EventNavbar from "@/components/navbar";
import "../../styles/globals.css";

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="">
      <body>
        <EventNavbar />
        {children}
      </body>
    </html>
  );
}
