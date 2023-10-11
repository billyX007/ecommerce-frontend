import React from "react";
import Overview from "../components/ui/bar-chart";

export default function Page() {
  return (
    <div className="mt-4">
      <div className="py-4 border-b">
        <h1 className="text-4xl font-bold">Dashboard</h1>
        <p className="mt-2">Overview of your amazing store</p>
      </div>
      <div className="mt-4 border rounded pt-4">
        <h2 className="text-2xl font-bold px-4 mb-4">Overview</h2>
        <Overview />
      </div>
    </div>
  );
}
