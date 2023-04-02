import "./globals.css";
import Navigation from "../components/Navigation";
import Footer from "./(home-components)/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reka Forgo",
  keywords:
    "Graphic design Portfolio Logo design Branding Visuals Creative design Art direction Illustration Typography Color theory Web design Print design Layout User experience (UX) User interface (UI) Adobe Creative Suite Photoshop Illustrator InDesign Design thinking Digital design Print production Brand identity Marketing design Advertising design Packaging design Motion graphics Infographics Responsive design Design trends Design inspiration",
  description:
    "Looking for stunning graphic design work that stands out from the crowd? Look no further than our portfolio landing page! Our expert designers have crafted a range of eye-catching visuals that showcase their skills and creativity. Whether you're looking for logos, branding, or other design elements, we've got you covered. So why wait? Explore our portfolio today and discover what makes us the top choice for high-quality graphic design!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-background">
        <Navigation />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
