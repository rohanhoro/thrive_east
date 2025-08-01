import logo from "../assets/EastNestProperty2.svg";
import heroImg from "../assets/property2.jpg";
import housekeepingIcon from "../assets/icons/brush.svg";
import repairIcon from "../assets/icons/wrench.svg";
import billIcon from "../assets/icons/receipt.svg";
import keyIcon from "../assets/icons/key.svg";
import Card from "../components/Card";
import ContactSection from "../components/ContactSection";

export default function EastNestPropertyCare() {
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
            className="w-60 max-xs:w-50"
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
          We offers tailored, trustworthy solutions to help you maintain, manage, and protect your property — whether it’s a primary home, holiday villa, or investment property.
        </div>
        <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-8 mb-16">
          <Card
            icon={housekeepingIcon}
            title={"Regular Maintenance & Housekeeping"}
            description={
              "Scheduled cleaning, upkeep, deep cleans — we keep your property spotless and guest-ready."
            }
          />
          <Card
            icon={repairIcon}
            title={"Repairs & Utility Management"}
            description={
              "From plumbing and electricity to appliance checks and handyman work, we handle it all."
            }
          />
          <Card
            icon={billIcon}
            title={"Bill Payments & Paperwork Handling"}
            description={
              "Timely utility payments, property tax reminders, and documentation support."
            }
          />
          <Card
            icon={keyIcon}
            title={"Tenant & Key Holder Management"}
            description={
              "Entry coordination, tenant move-ins/outs, and acting as local point-of-contact in your absence."
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

