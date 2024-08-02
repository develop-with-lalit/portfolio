"use client";

import { Navbar } from "flowbite-react";
// import { Link } from "react-router";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Navbar
      fluid
      rounded
      className="fixed top-0 w-full z-10 mb-2 rounded-lg shadow-sm"
    >
      <Navbar.Brand as={Link} to="/" id="/">
        <span className="self-center whitespace-nowrap text-xl font-semibold text-gray-800 dark:text-white cursor-pointer">
          Lalit Kumar
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link as={Link} to="/digital-resume" className="cursor-pointer">
          Digital Resume
        </Navbar.Link>
        <Navbar.Link as={Link} to="/mini-games" className="cursor-pointer">
          Play Mini Games
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
