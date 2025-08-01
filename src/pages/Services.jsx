import event from "../assets/event.jpg";
import homestay from "../assets/homestay.jpg";
import property from "../assets/property.jpg";
// import store from "../assets/store.jpg";
import studio from "../assets/studio.jpg";

import ServiceCard from "../components/ServiceCard";

export default function Services() {
  return (
    <div className="flex bg-secondary text-white ">
      <div className="flex flex-col items-center gap-12 max-w-6xl mx-auto my-12 px-12">
        <h3 className="text-4xl font-medium">OUR SERVICES</h3>
        <ServiceCard
          cardImg={event}
          title={"THE EASTSIDE CHRONICLES"}
          description={
            "The Eastside Chronicles transforms life's most meaningful moments into unforgettable, artfully curated celebrations. From weddings and proposals, concerts, corporate gatherings, and music events, we design experiences that blend refined elegance with authentic local artistry."
          }
          tagline={
            <>
              <b>The Eastside Chronicles</b> — Your partner in celebrating in
              elegance.
            </>
          }
          cardLink={"chronicles"}
        />
        <ServiceCard
          cardImg={studio}
          title={"THRIVE EAST STUDIO"}
          description={
            "House of Flicks is where your story comes to ife—beautifully and authentically. From cinematic films and commercial shoots to branded content and social media reels, we create visually compelling narratives that forge emotional connections and leave a lasting cultural impact. Rooted in Assamese heritage and infused with modern storytelling techniques, our work is crafted to be elegant, evocative, and unforgettable."
          }
          tagline={
            <>
              <b>House of Flicks</b> — Visuals that thrive.
            </>
          }
          cardLink={"studio"}
        />
        {/* <ServiceCard
          cardImg={store}
          title={"THRIVE STORE"}
          description={
            "Welcome to Thrive Store, your one-stop destination for curated essentials that elevate everyday living. From wellness and personal care to home, tech, and fashion accessories, we handpick products that blend quality, style, and practicality. At Thrive, we believe in helping you live better—whether you’re upgrading your space, simplifying your routine, or finding the perfect gift."
          }
          tagline={
            <>
              <b>Thrive Store</b> — Where Lifestyle Meets Convenience.
            </>
          }
          cardLink={"thrivestore"}

        /> */}
        <ServiceCard
          cardImg={property}
          title={"EASTNEST PROPERTY CARE"}
          description={
            "EastNest Property Care provides professional, hassle-free property management. Tailored for NRIs and local owners, we handle guest services, maintenance, and marketing so your property performs while you relax. Cultural understanding meets modern professionalism."
          }
          tagline={
            <>
              <b>EastNest Property Care</b> — Your Property, Our Priority.
            </>
          }
          cardLink={"propertycare"}
        />
        <ServiceCard
          cardImg={homestay}
          title={"EASTNEST"}
          description={
            "EastNest offers curated homestay and Airbnb experiences with Assamese warmth and modern minimalism. It's more than a stay—it's an invitation to belong. Designed for comfort, culture, and authenticity, EastNest turns travel into an elegant, personal journey."
          }
          tagline={
            <>
              <b>EastNest</b> — Stay. Belong. Thrive.
            </>
          }
          cardLink={"homestay"}
        />
      </div>
    </div>
  );
}
