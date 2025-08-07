import React from "react";
import { Link } from "react-router-dom";

export default function DashboardHome() {
  return (
    <div className="min-h-screen">
      <div className="p-8">
        <div className="bg-tertiary rounded-lg w-60">
          <Link to={"/admin/enquiries"} className="flex w-full h-full p-4">
            <span className="">Enquiries</span>
            <span>
                
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
