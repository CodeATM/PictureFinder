import Footer from "@Components/Reuseables/Footer";
import Navbar from "@Components/Reuseables/Navbar";
import "@styles/global.css";
import ClientProvider from "@lib/Context/Query-client-provider";
import FeaturesNav from "@Components/Reuseables/FeaturesNav";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const metadata = {
  title: "Apertur – Free High-Resolution Stock Photos & Images",
  description:
    "Download stunning high-resolution photos for free from Apertur. Over 1 million royalty-free stock images, curated for creatives, designers, and businesses worldwide.",
  keywords: [
    "free stock photos",
    "high resolution images",
    "royalty free images",
    "download free photos",
    "stock photography",
    "free images for commercial use",
    "Apertur",
    "Unsplash alternative",
  ],
  authors: [{ name: "Apertur" }],
  openGraph: {
    title: "Apertur – Free High-Resolution Stock Photos & Images",
    description:
      "Download stunning high-resolution photos for free from Apertur. Over 1 million royalty-free stock images, curated for creatives, designers, and businesses worldwide.",
    url: "https://apertur.com",
    siteName: "Apertur",
    images: [
      {
        url: "https://apertur.com/og-image.jpg", // Replace with your OG image URL
        width: 1200,
        height: 630,
        alt: "Apertur free stock images",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Apertur – Free High-Resolution Stock Photos & Images",
    description:
      "Over 1 million free high-resolution images. Download and use for personal or commercial projects without attribution.",
    images: ["https://apertur.com/og-image.jpg"], // Replace with your image
    creator: "@apertur",
  },
};

const RootLayout = ({ children }) => {
  const queryClient = new QueryClient();

  return (
    <html lang="en">
      <body className="h-screen flex flex-col">
        <ClientProvider>
          <div className="fixed z-10 w-full bg-white top-0">
            <Navbar />
            <div className="border-b-[1px] border-[#E7E7E7]">
              <FeaturesNav />
            </div>
          </div>
          <main className="pt-24 flex-1 ">{children}</main>
          <div className="bottom-0">
            <Footer />
          </div>
        </ClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;
