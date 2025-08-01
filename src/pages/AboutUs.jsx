import Button from "../components/Button";

export default function AboutUs() {
  return (
    <div className="bg-white flex">
      <div className="flex flex-col items-center max-w-2xl mx-auto bg-white text-center pb-8">
        <div>
          <h3 className="text-4xl font-bold my-8 text-primary">
            Who we are ?
          </h3>
          <p className="mb-8">
            Born in Assam. Built to Thrive. Thrive East is a hybrid lifestyle
            ecosystem designed to transform the everyday into the extraordinary.
            Rooted in Assamese culture yet styled for the modern world, we bring
            together experiences that whisper elegance and celebrate meaning. We
            don’t just offer services — we craft memories, stories, and spaces
            that help you live beautifully.
          </p>
        </div>
        <div>
          <h3 className="text-4xl font-bold my-8 text-primary">
            Our Philosophy
          </h3>
          <p className="mb-8">
            At Thrive East, we believe in thoughtful design and emotional
            branding. Every event we style, every gift we curate, every stay we
            host, every property we manage, and every story we tell is guided by
            one promise: Elegance in execution. Emotion at heart. We’re not here
            to do more. We’re here to do it better.
          </p>
        </div>
        <div>
          <h3 className="text-4xl font-bold my-8 text-primary">
            Our Ecosystem
          </h3>

          <div>
            <h4 className="text-xl font-medium mb-1">
              The Eastside Chronicles
            </h4>
            <p className="mb-4">“Event Styling & Management”</p>
            <p className="mb-4">
              Where dreams turn into styled realities — from weddings and
              proposals that speaks from the heart.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-medium mb-1">Thrive East Studio</h4>
            <p className="mb-4">“Your Creative Production House”</p>
            <p className="mb-4">
              Bring your vision to life with cinematic ad films, reels, short
              stories, and artful photography. From concept to final cut, we
              design frames that speak your brand’s truth and soul.
            </p>
          </div>
          {/* <div>
            <h4 className="text-xl font-medium mb-1">Thrive Store</h4>
            <p className="mb-4">One stop E-Commerce store</p>
            <p className="mb-4">
              Emotions, beautifully boxed. Bespoke gifts, perfumes, and
              self-care rituals designed to elevate everyday moments.
            </p>
          </div> */}
          <div>
            <h4 className="text-xl font-medium mb-1">EastNest Property Care</h4>
            <p className="mb-4">“Your Property, Our Priority”</p>
            <p className="mb-4">
              Hassle-free property management for local and NRI homeowners.
              Maintenance, guest care, and peace of mind delivered with
              elegance.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-medium mb-1">EastNest</h4>
            <p className="mb-4">“Boutique Homestays with Soul”</p>
            <p className="mb-4">
              Handpicked stays rooted in local culture, designed for travelers
              who seek to belong.
            </p>
          </div>
        </div>
        <div>
          <h3 className="text-4xl font-bold my-8 text-primary">Our Promise</h3>
          <p className="mb-8">
            Thrive East exists to help you celebrate, belong, and thrive in
            elegance. Whether you’re styling a milestone, sending a gift,
            booking a stay, caring for your property, or telling your story —
            we’re here to make it beautiful.
          </p>
          <h3 className="text-4xl font-bold my-8 text-primary">
            Let’s Thrive Together.
          </h3>
        </div>
        <Button text={"Book a Free Consultation"} link={"/contact"} />
      </div>
    </div>
  );
}
