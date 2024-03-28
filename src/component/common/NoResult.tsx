import React from "react";

interface NoResultProps {
  message: React.JSX.Element;
}

export const NoResult: React.FC<NoResultProps> = ({ message }) => {
  return (
    <div
      className="d-flex align-items-center justify-content-center text-center bg-white"
      style={{ height: "250px" }}
    >
      <div className="p-2 m-2 bg-info text-white shadow rounded-2">
        {message}
      </div>
    </div>
  );
};
