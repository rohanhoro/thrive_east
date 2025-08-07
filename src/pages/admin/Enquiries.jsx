import { Trash } from "lucide-react";
import { useEffect, useState } from "react";
import axiosInstance from "../../api/axiosInstance";

export default function Enquiries() {
  const [enquiries, setEnquiries] = useState([]);
  const [filterValue, setFilterValue] = useState("all");

  const filteredEnquiries = enquiries.filter((enquiry) => {
    switch (filterValue) {
      case "all":
        return !enquiry.isDeleted;
      case "new":
        return !enquiry.isRead && !enquiry.isDeleted;
      case "read":
        return enquiry.isRead && !enquiry.isDeleted;
      case "delete":
        return enquiry.isRead && enquiry.isDeleted;

      default:
        return 
    }
  });
  

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

    const interval = setInterval(handleEnquiries, 10000);

    return () => clearInterval(interval);
  }, []);

  const filterEnquiries = (e) => {
    setFilterValue(e.target.value);
  };

  return (
    <div
      className={`text-white min-h-screen w-full ${
        enquiries.length === 0 ? "flex justify-center items-center p-8" : "p-8"
      } `}
    >
      {enquiries.length === 0 ? (
        <div className="text-xl text-white/20">No New Enquiries</div>
      ) : (
        <div>
          <div className="flex justify-between items-center mb-4">
            <div className="text-2xl">Enquiries</div>
            <div className="bg-secondary border-2 rounded-full  px-2 py-1">
              <select
                name=""
                id=""
                className="outline-none bg-secondary"
                onChange={filterEnquiries}
              >
                <option value="all">All</option>
                <option value="new">New</option>
                <option value="read">Read</option>
                <option value="delete">Deleted</option>
              </select>
            </div>
          </div>
          <div className=" flex flex-col gap-2">
            {filteredEnquiries.map((enquiry) => {
              return (
                <div
                  key={enquiry._id}
                  className="group bg-tertiary p-4 rounded-lg h-fit"
                >
                  <div className="border-b-2 border-secondary pb-2 mb-2">
                    <div className="font-medium text-lg ">{enquiry.name}</div>
                    <div className="flex max-xs:flex-col gap-2">
                      <a href={`mailto:${enquiry.email}`}>{enquiry.email}</a>
                      <a href={`tel:${enquiry.contactnumber}`}>
                        {enquiry.contactnumber}
                      </a>
                    </div>
                  </div>
                  <div className="mb-2">
                    <div className="font-medium">{enquiry.service}</div>
                    <div>{enquiry.message}</div>
                  </div>
                  <div className="flex justify-between items-center transition">
                    <span className="text-xs text-gray-300 border-1 rounded-full px-2 py-1">
                      {new Date(enquiry.createdAt).toLocaleString("en-IN", {
                        hour: "numeric",
                        minute: "2-digit",
                        hour12: true,
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      })}
                    </span>
                    <span className="group-hover:text-white transition text-transparent">
                      <Trash className="" strokeWidth={1.5} />
                    </span>
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
