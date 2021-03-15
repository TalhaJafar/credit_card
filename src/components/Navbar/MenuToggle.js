import * as React from "react";
import { AiOutlineAppstore } from "react-icons/ai"

export const MenuToggle = ({ toggle }) => (
  <button className="nav_btn" onClick={toggle}>
      <AiOutlineAppstore size={40}/>
  </button>
);
