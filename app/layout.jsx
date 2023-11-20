import Footer from "@Components/Footer";
import Navbar from "@Components/Navbar";
import "@styles/global.css";

export const metadata = {
  title: "Picfinder",
  description: "Image downloading website withover 1M images for download.",                
};

const RootLayout = ({ children }) => {
  return (
      <html lang="en">
        <body className = ''>
          <Navbar/>
          <main className=''>{children}</main>
          <Footer />
        </body>
      </html>
  );
};

export default RootLayout;
