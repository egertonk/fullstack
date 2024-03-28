import React from "react";

type props = {
  show: boolean;
  onHide: () => void;
  MajorDuties: string[];
  title: string;
};

export const HomePage = () => {
  return (
    <div
      className="d-flex align-items-center justify-content-center text-center bg-white"
      style={{ height: "250px" }}
    >
      <div className="p-2 m-2 common-bg text-white shadow rounded-2">
        <h1>Welcome to Egerton During Portfolio!</h1>
        <h3>I ama junior fullstack developer</h3>
        <span>please see my resume for more details.</span>
      </div>
    </div>
  );
};
