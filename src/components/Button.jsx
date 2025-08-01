import { Link } from "react-router-dom";

export default function Button({ text, className, link }) {
  return (
    <Link to={`${link}`}>
      <div
        className={`bg-primary font-bold text-white py-4 px-6 rounded-full cursor-pointer hover:text-black w-fit ${className}`}
      >
        {text}
      </div>
    </Link>
  );
}
