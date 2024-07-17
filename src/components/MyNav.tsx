"use client";

import { Link } from "react-scroll";
import { Navbar } from "flowbite-react";

export default function MyNav() {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand as={Link} to="/" id="/">
        <span className="self-center whitespace-nowrap text-xl font-semibold text-gray-800 dark:text-white cursor-pointer">
          Lalit's Portfolio
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link
          as={Link}
          to="about"
          className="cursor-pointer"
          smooth
          duration={300}
        >
          About
        </Navbar.Link>
        <Navbar.Link
          as={Link}
          to="technologies"
          className="cursor-pointer"
          smooth
          duration={400}
        >
          Technologies
        </Navbar.Link>
        <Navbar.Link
          as={Link}
          to="experience"
          className="cursor-pointer"
          smooth
          duration={500}
        >
          Experiences
        </Navbar.Link>
        <Navbar.Link
          as={Link}
          to="education"
          className="cursor-pointer"
          smooth
          duration={600}
        >
          Education
        </Navbar.Link>
        <Navbar.Link
          as={Link}
          to="contact"
          className="cursor-pointer"
          smooth
          duration={700}
        >
          Contact
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
