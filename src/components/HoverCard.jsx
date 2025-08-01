import { Link } from "react-router-dom";

// import cardImg from "../assets/buildings_bg.jpg";
export default function HoverCard({ title, content, image, cardLink }) {
  return (
    <div
      className="relative group flex-1 h-120 rounded-lg bg-primary text-white text-shadow-sm font-bold hover:flex-3 transition-all duration-300 cursor-pointer bg-cover bg-center max-xs:h-60"
      style={{ backgroundImage: `url(${image})` }}
    >
      <Link to={cardLink}>
        <div className="group-hover:bg-black/50 group-hover:backdrop-blur-xs transition-all duration-300 h-120 max-xs:h-60">
          <div className="transform absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-90 group-hover:rotate-0 max-xs:rotate-0 transition-all duration-300  text-center">
            <div className=" text-2xl text-nowrap ">{title}</div>
            <div className="hidden group-hover:inline">{content}</div>
          </div>
        </div>
      </Link>
    </div>
  );
}
