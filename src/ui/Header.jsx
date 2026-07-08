import React from "react";
import { Link } from "react-router-dom";
import SearchOrder from "./SearchOrder";

export default function Header() {
  return (
    <div>
      <SearchOrder />
      <Link to={"/"}>Fast React Pizza</Link>
    </div>
  );
}
