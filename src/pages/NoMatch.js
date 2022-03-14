import React from "react";
import { Outlet, useLocation, useMatch } from "react-router-dom";

const NoMatch = () => {
  let path = useLocation().pathname;

  console.log(path);
  return (
    <div>
      <h1>The Page is not find</h1>
    </div>
  );
};

export default NoMatch;
