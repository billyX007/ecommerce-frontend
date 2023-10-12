import React from "react";
import Form from "../Form";

export default function page() {
  return (
    <div className="bg-white rounded-md shadow-sm">
      <h2 className="font-semibold py-6 pl-4 border-b text-center">Edit Tag</h2>
      <div className="p-6">
        <Form />
      </div>
    </div>
  );
}
