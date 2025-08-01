import { Link } from "react-router-dom";

export default function ServiceCard({ cardImg, title, description, tagline,cardLink }) {
  return (
    <Link to={cardLink}>
      <div className="flex max-md:flex-col md:h-100 md:max-w-200 max-md:justify-center items-center max-md:items-center hover:shadow-xl bg-tertiary rounded-2xl overflow-hidden hover:scale-102 cursor-pointer transition-all duration-300">
        <div className="h-full w-100 max-md:h-70 max-md:w-full">
          <img
            className="object-cover w-full h-full "
            src={cardImg}
            alt="Service Image"
          />
        </div>
        <div className="md:mx-12 w-[50%] max-md:w-full max-md:p-8">
          <div className="text-3xl mb-8 font-bold">{title}</div>
          <div className="mb-4 text-justify">{description}</div>
          <div>{tagline}</div>
        </div>
      </div>
    </Link>
  );
}
