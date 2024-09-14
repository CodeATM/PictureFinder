import Footer from "@Components/Reuseables/Footer";
import Navbar from "@Components/Reuseables/Navbar";
import "@styles/global.css";
import FeaturesNav from "@Components/Reuseables/FeaturesNav";

export const metadata = {
  title: "Picfinder",
  description: "Image downloading website with over 1M images for download.",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className="h-screen flex flex-col" >
        <div className="fixed z-10 w-full bg-white top-0">
          <Navbar />
          <div className="border-b-[1px] border-[#E7E7E7]">
            <FeaturesNav />
          </div>
        </div>
        <main className="pt-32 flex-1 ">{children}</main>
        <div className="bottom-0">
          <Footer />
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
