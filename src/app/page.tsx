import FAQ from "@/components/FAQ";
import CallForAction from "@/components/Applications/CallForAction";
import Convertible from "@/components/Applications/Convertible";
import LidarMapping from "@/components/Applications/Features";
// import PromotionalVideo from "@/components/Applications/PromotionalVideo";
import SmoothCommand from "@/components/Applications/SmoothCommand";
import UserInteractive from "@/components/Applications/UserInteractive";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SeedSection from "@/components/SeedSection"
import HomeBanner from "@/components/HomeBanner";
import IntroBanner from "@/components/IntroBanner";
import Features from "@/components/Benefits";

export default function Home() {
  return (
    <>
      <Header />
      <HomeBanner />
      <IntroBanner />
      <LidarMapping />
      <UserInteractive />
      <SmoothCommand />
      <Convertible />
      <Features/>
      <SeedSection/>
      {/* <PromotionalVideo /> */}
      <CallForAction />
      <FAQ />
      <Footer />
    </>
  );
}
