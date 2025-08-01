export default function Card({ title, description, icon }) {
  return (
    <div className="relative flex flex-col justify-center items-center bg-tertiary h-60 w-80 rounded-2xl p-8 shadow-md text-center mt-8">
      <div className="absolute -top-10 bg-white rounded-full p-4 shadow-[0_2px_2px_black]">
        <img src={icon} alt="icon" />
      </div>
      <div className="mb-4 font-bold">{title}</div>
      <div className="font-light">{description}</div>
    </div>
  );
}
