import Button from "../components/Button";
import noContentImg from "../assets/404.svg";

export default function NoContent() {
  return (
    <div className="flex bg-secondary justify-center items-center h-screen text-white">
      <div className="flex flex-col items-center">
        <img className="h-80 w-100 object-cover" src={noContentImg} alt="No Content Image" />
        <div className="text-2xl mb-4">No content found</div>
        <div className="max-w-88 text-center mb-8">We couldn't find what you're looking for. It might have been removed or doesn't exist.</div>
        <Button text={"Go Back to Home"} link={"/"} />
      </div>
    </div>
  );
}
