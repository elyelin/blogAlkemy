import React from "react";

const Loading = () => {
  return (
    <div
      className="d-flex justify-content-center w-100 align-items-center"
      style={{ height: 500 }}
    >
      <div className="spinner-border text-primary" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Loading;
