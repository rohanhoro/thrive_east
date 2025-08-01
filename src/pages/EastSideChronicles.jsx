import logo from "../assets/EastSideChronicles.svg";
import heroImg from "../assets/event2.jpg";
import privateEventIcon from "../assets/icons/cake.svg";
import marriageIcon from "../assets/icons/diamond.svg";
import eventIcon from "../assets/icons/event.svg";
import proposalIcon from "../assets/icons/heartcalender.svg";
import Card from "../components/Card";
import ContactSection from "../components/ContactSection";

export default function EastSideChronicles() {
  return (
    <div className="bg-secondary text-white">
      <div
        className="flex h-80 max-xs:h-60 bg-center mb-14 "
        style={{
          backgroundImage: `url(${heroImg})`,
        }}
      >
        <div className="flex justify-center items-center h-full w-full bg-black/50">
          <img
            className="w-95 max-xs:w-88"
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
          Whatever the occasion, our diverse range of event management services
          is here to make your moments truly special and worry-free.
        </div>
        <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-8 mb-16">
          <Card
            icon={eventIcon}
            title={"Event Management"}
            description={
              "Comprehensive planning and coordination for events of all sizes, ensuring a seamless and memorable experience."
            }
          />
          <Card
            icon={marriageIcon}
            title={"Marriages"}
            description={
              "Expert wedding planning services to bring your dream celebration to life, from traditional to modern ceremonies."
            }
          />
          <Card
            icon={proposalIcon}
            title={"Proposals & Engagements"}
            description={
              "Romantic and personalized proposal planning to create the perfect 'yes' moment."
            }
          />
          <Card
            icon={privateEventIcon}
            title={"Private Events & Parties"}
            description={
              "Birthdays, anniversaries, baby showers, housewarmings — we handle it all with flair and finesse."
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
