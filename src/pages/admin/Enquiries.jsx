import { useEffect, useState } from "react";
import axiosInstance from "../../api/axiosInstance";

export default function Enquiries() {
  const [enquiries, setEnquiries] = useState([]);

  useEffect(() => {
    const handleEnquiries = async () => {
      try {
        const enquiries = (await axiosInstance.get("/getenquiries")).data;
        setEnquiries(enquiries);
      } catch (error) {
        console.error("Server Error");
      }
    };
    handleEnquiries();
    const interval = setInterval(handleEnquiries, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`text-white min-h-screen w-full ${
        enquiries.length === 0
          ? "flex justify-center items-center p-8"
          : "pt-24 pb-8 px-8"
      } `}
    >
      {enquiries.length === 0 ? (
        <div className="text-xl text-white/20">No New Enquiries</div>
      ) : (
        <div>
          <div className="text-2xl mb-4">Enquiries</div>
          <div className=" flex flex-col gap-2">
            {enquiries.map((enquiry) => {
              return (
                <div
                  key={enquiry._id}
                  className="bg-tertiary p-4 rounded-lg h-fit"
                >
                  <div className="font-medium text-lg ">
                    Name: {enquiry.name}
                  </div>
                  <div>
                    <a href={`mailto:${enquiry.email}`}>{enquiry.email}</a>
                  </div>
                  <div className="mb-2">
                    <a href={`tel:${enquiry.contactnumber}`}>
                      {enquiry.contactnumber}
                    </a>
                  </div>
                  <div>{enquiry.service}</div>
                  <div className="mb-2">{enquiry.message}</div>
                  <div className="text-sm text-gray-300">
                    Submitted on:{" "}
                    {new Date(enquiry.createdAt).toLocaleString("en-IN", {
                      hour: "numeric",
                      minute: "2-digit",
                      hour12: true,
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
