import React from "react";
import { Link } from "react-router-dom";
import rightFillIcon from "../../../assets/icons/right-fill-arrow.png";
import simile from "../../../assets/icons/simile-icon.png";
import Badge from "../../../components/badge/Badge";
import Text from "../../../components/text/Text";

const NavLinks = () => {
  return (
    <div className="flex items-center gap-10">
      <Link to="new-coins" className="text-text-light">
        New Coins
      </Link>
      <Link
        target="_blank"
        to="https://play.coinscan.cc"
        className="text-text-light text-sm flex items-center"
      >
        <img
          src={rightFillIcon}
          alt="Right Fill Icon"
          className="w-8 h-8 mr-1"
        />
        Play WOTF
      </Link>
      <Link to="/advertisement">
        <div className="relative text-white">
          <a>Advertise</a>
          <div className="absolute top-0 right-0 -mt-3 -mr-5">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 16 16"
              className="w-6 h-6 text-yellow-500"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828l.645-1.937zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.734 1.734 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.734 1.734 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.734 1.734 0 0 0 3.407 2.31l.387-1.162zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L10.863.1z"></path>
            </svg>
          </div>
        </div>
      </Link>
      <Link to="add-coins" className="text-text-light text-sm">
        <Badge className="flex justify-center items-center">
          <img src={simile} alt="Simile Icon" className="w-4 h-4 mr-2" />
          Add Coin
        </Badge>
      </Link>
    </div>
  );
};

export default NavLinks;
