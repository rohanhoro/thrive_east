import logo from "../assets/EastNestHomestay.svg";
import locationBasedIcon from "../assets/icons/locationhome.svg";
import checkinIcon from "../assets/icons/calenderclock.svg";
import homestayIcon from "../assets/icons/home.svg";
import taxiIcon from "../assets/icons/taxi.svg";
import heroImg from "../assets/homestay.jpg";
import Card from "../components/Card";
import ContactSection from "../components/ContactSection";

export default function EastNestHomeStay() {
  return (
    <div className="bg-secondary text-white">
      <div
        className="flex h-80 max-xs:h-60 bg-center bg-cover mb-14 "
        style={{
          backgroundImage: `url(${heroImg})`,
        }}
      >
        <div className="flex justify-center items-center h-full w-full bg-black/50 backdrop-blur-sm">
          <img
            className="w-80 max-xs:w-60"
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
          Eastnest Homestays offers comfortable, well-maintained homes designed for peaceful getaways and short stays. Whether you're traveling for rest or routine, we provide clean, reliable spaces with the care and convenience you deserve.
        </div>
        <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-8 mb-16">
          <Card
            icon={locationBasedIcon}
            title={"Location-Based Hosting"}
            description={
              "Heritage homes, hill station hideouts, and urban escapes — each space curated for thoughtful living."
            }
          />
          <Card
            icon={checkinIcon}
            title={"Flexible Check-In/Check-Out"}
            description={
              "We accommodate your timing whenever possible — just let us know in advance."
            }
          />
          <Card
            icon={homestayIcon}
            title={"Homes for Short Stays"}
            description={
              "Clean, fully-equipped accommodations ideal for families, professionals, or small groups."
            }
          />
          <Card
            icon={taxiIcon}
            title={"Cab services & Local Tours"}
            description={
              "Trusted transportation for local sightseeing, pickups, drop-offs, and personalized travel plans."
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
