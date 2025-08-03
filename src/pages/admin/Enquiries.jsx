import { useEffect, useState } from "react";
import axiosInstance from "../../api/axiosInstance";

export default function Enquiries() {
  const [enquiries, setEnquiries] = useState([]);
  useEffect(() => {
    const handleEnquiries = async () => {
      try {
        const enquiries = (await axiosInstance.get("/getenquiries")).data;
        setEnquiries(enquiries);
        console.log(enquiries);
      } catch (error) {
        console.error("Server Error");
      }
    };
    handleEnquiries();
  }, []);

  return (
    <div className="text-white pt-24 pb-8 px-8 flex flex-col w-full">
      <div className="text-2xl mb-4">Enquiries</div>
      <div className=" flex flex-col gap-2">
        {enquiries.map((enquiry) => {
          return (
            <div key={enquiry._id} className="bg-tertiary p-4 rounded-lg h-fit">
              <div className="font-medium text-lg ">Name: {enquiry.name}</div>
              <div>
                <a href={`mailto:${enquiry.email}`}>{enquiry.email}</a>
              </div>
              <div className="mb-2">
                <a href={`tel:${enquiry.contactnumber}`}>{enquiry.contactnumber}</a>
                
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
  );
}
