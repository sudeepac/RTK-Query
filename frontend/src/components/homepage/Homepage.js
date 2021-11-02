import React from "react";
import { Link } from "react-router-dom";

export const Homepage = () => {
  return (
    <div>
      <p>This is homepage</p>
      <Link to={`/login`}>Login</Link>
    </div>
  );
};
