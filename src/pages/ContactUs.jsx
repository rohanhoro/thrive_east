import contact from "../assets/contact.jpg";
import emailIcon from "../assets/icons/email.svg";
import phoneIcon from "../assets/icons/phone.svg";
export default function ContactUs() {
  return (
    <div className="flex bg-secondary text-white pt-16">
      <div className="flex flex-col max-w-6xl mx-auto text-justify ">
        <div className="flex gap-12 px-8 max-sm:flex-col my-8 max-xs:px-8 ">
          <div className="w-[50%] h-100 overflow-hidden max-sm:w-full max-sm:h-60">
            <img src={contact} alt="Contact Us Image" />
          </div>
          <div className="w-[50%] max-sm:w-full ">
            <h3 className="font-medium text-5xl mb-4">Contact Us</h3>
            <div className="mb-8">
              We’d love to hear from you. Whether you’re planning an
              unforgettable event, looking for elegant lifestyle products, or
              just want to say hello—Thrive East is here to help you thrive in
              elegance. Reach out to us for collaborations, custom styling, or
              any questions. Our team will reach out to you as soon as possible.
            </div>
            <div className="font-bold mb-4">Contact Info</div>
            <div className="flex gap-2 mb-4">
              <img src={emailIcon} alt="Email Icon" />
              <a href="mailto:thriveeastinfo@gmail.com">
                thriveeastinfo@gmail.com
              </a>
            </div>
            <div className="flex gap-2 mb-8">
              <img src={phoneIcon} alt="Phone Icon" />
              <a href="tel:+919678039205">+91-9678039205</a>
            </div>
            <a
              className="font-bold text-2xl text-primary"
              href="https://forms.gle/a9Fg6geSZdutAf3M9"
            >
              Get a Quote
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center my-12 mx-4">
          <h3 className="font-medium text-5xl mb-8">Our Location</h3>
          <div className="w-full">
            <div className=" w-full h-80 md:h-112 overflow-hidden rounded-xl border-4 border-gray-900 mb-2">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d445.7783966542971!2d92.79334463513209!3d26.64120792624906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjbCsDM4JzI4LjMiTiA5MsKwNDcnMzYuMSJF!5e0!3m2!1sen!2sin!4v1751788141128!5m2!1sen!2sin"
                className="w-full h-full"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="text-xl pl-2 transition-all duration-200">
              <a
                href="https://maps.app.goo.gl/3ugVUPBMrR7EARqG6?g_st=aw"
                className="cursor-pointer active:text-primary  hover:text-primary"
              >
                Get directions &#8594;
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
