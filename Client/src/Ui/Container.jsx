import React from "react";

const Container = ({ children }) => {
  return (
    <div className="max-w-screen-xl mx-auto py-10 px-4 lg:px-0">{children}</div>
  );
};

export default Container;
