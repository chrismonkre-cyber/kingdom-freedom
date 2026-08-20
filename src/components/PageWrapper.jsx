import Navbar from "./Navbar";
import Footer from "./Footer";

const IMAGES = {
  home: {
    desktop: "https://media.base44.com/images/public/user_69a2073c194ba1099feee8ab/9ee23539d_home-desktop.png",
    mobile: "https://media.base44.com/images/public/user_69a2073c194ba1099feee8ab/27fda474d_home-mobile.png",
  },
  daily: {
    desktop: "https://media.base44.com/images/public/user_69a2073c194ba1099feee8ab/2bbb34699_daily-desktop.png",
    mobile: "https://media.base44.com/images/public/user_69a2073c194ba1099feee8ab/64eb973de_daily-mobile.png",
  },
  journey: {
    desktop: "https://media.base44.com/images/public/user_69a2073c194ba1099feee8ab/e09d312b8_journey-desktop.png",
    mobile: "https://media.base44.com/images/public/user_69a2073c194ba1099feee8ab/34fcca2fe_journey-mobile.png",
  },
  chains: {
    desktop: "https://media.base44.com/images/public/user_69a2073c194ba1099feee8ab/62079cc2d_chains-desktop.png",
    mobile: "https://media.base44.com/images/public/user_69a2073c194ba1099feee8ab/3bc5c7154_chains-mobile.png",
  },
  mind: {
    desktop: "https://media.base44.com/images/public/user_69a2073c194ba1099feee8ab/71f051de1_mind-desktop.png",
    mobile: "https://media.base44.com/images/public/user_69a2073c194ba1099feee8ab/9a7777a8f_mind-mobile.png",
  },
  prayer: {
    desktop: "https://media.base44.com/images/public/user_69a2073c194ba1099feee8ab/709ed47ca_prayer-desktop.png",
    mobile: "https://media.base44.com/images/public/user_69a2073c194ba1099feee8ab/409b07d40_prayer-mobile.png",
  },
  journal: {
    desktop: "https://media.base44.com/images/public/user_69a2073c194ba1099feee8ab/d8039b50a_journal-desktop.png",
    mobile: "https://media.base44.com/images/public/user_69a2073c194ba1099feee8ab/a7754bbdf_journal-mobile.png",
  },
  resources: {
    desktop: "https://media.base44.com/images/public/user_69a2073c194ba1099feee8ab/8088d0f51_resources-desktop.png",
    mobile: "https://media.base44.com/images/public/user_69a2073c194ba1099feee8ab/e0b04f556_resources-mobile.png",
  },
  about: {
    desktop: "https://media.base44.com/images/public/user_69a2073c194ba1099feee8ab/ce07dfe50_about-desktop.png",
    mobile: "https://media.base44.com/images/public/user_69a2073c194ba1099feee8ab/f287bb344_about-mobile.png",
  },
};

const LOGO = "https://media.base44.com/images/public/user_69a2073c194ba1099feee8ab/228e01ce9_newlogo.png";

export { IMAGES, LOGO };

export default function PageWrapper({ pageKey, children }) {
  const imgs = IMAGES[pageKey] || IMAGES.home;

  return (
    <div className="relative min-h-screen w-full">
      {/* Desktop bg */}
      <div
        className="hidden md:block fixed inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${imgs.desktop})` }}
      />
      {/* Mobile bg */}
      <div
        className="block md:hidden fixed inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${imgs.mobile})` }}
      />
      {/* Very soft overlay to help readability without killing the image */}
      <div className="fixed inset-0 bg-black/35 z-0 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 w-full">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
}
