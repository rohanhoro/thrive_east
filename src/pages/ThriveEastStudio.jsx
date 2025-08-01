import logo from "../assets/ThriveEastStudio.svg";
import heroImg from "../assets/studio2.jpg";
import adsIcon from "../assets/icons/megaphone.svg";
import showreelIcon from "../assets/icons/reel.svg";
import marketingIcon from "../assets/icons/chart.svg";
import artistIcon from "../assets/icons/mic.svg";
import Card from "../components/Card";
import ContactSection from "../components/ContactSection";

export default function ThriveEastStudio() {
  return (
    <div className="bg-secondary text-white">
      <div
        className="flex h-80 max-xs:h-60 bg-center bg-cover mb-14 "
        style={{
          backgroundImage: `url(${heroImg})`,
        }}
      >
        <div className="flex justify-center items-center h-full w-full bg-black/50 backdrop-blur-xs">
          <img
            className=" w-95 max-xs:w-88"
            src={logo}
            alt="EastSide Chronicles Logo"
          />
        </div>
      </div>

      <div className="flex flex-col max-w-6xl mx-auto items-center justify-center ">
        <div className="mb-8 font-medium text-2xl text-primary">
          Our Core Services
        </div>
        <div className=" max-sm:w-auto w-140 text-center mx-8 mb-16">
          Thrive Studio is your creative and strategic partner for visual storytelling, brand building, and talent development. From cinematic productions to artist representation, we help ideas come alive.
        </div>
        <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-8 mb-16">
          <Card
            icon={adsIcon}
            title={"Advertisements"}
            description={
              "Concept-to-screen ad films, digital campaigns, and branded content that speaks to your audience"
            }
          />
          <Card
            icon={showreelIcon}
            title={"Showreels"}
            description={
              "Slick, story-driven video content — from corporate films and music videos to highlight reels and short-form content."
            }
          />
          <Card
            icon={marketingIcon}
            title={"Production & Marketing"}
            description={
              "Targeted content marketing, social media strategy, and campaign execution to grow your brand's voice."
            }
          />
          <Card
            icon={artistIcon}
            title={"Artist management"}
            description={
              "End-to-end talent curation, bookings, branding, and career shaping for emerging and established artists."
            }
          />
        </div>
      </div>
      <div className="max-w-6xl mx-auto flex justify-center pb-16">
        <ContactSection />
      </div>
    </div>
  );
}
