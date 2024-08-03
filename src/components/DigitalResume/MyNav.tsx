"use client";

import { Link } from "react-scroll";
import { Navbar } from "flowbite-react";

export default function MyNav() {
  return (
    <ul className="flex flex-wrap flex-row align-baseline sm:flex-nowrap sm:flex-col space-y space-y-4 text-sm font-medium text-gray-500 dark:text-gray-400 md:me-4 mb-4 md:mb-0">
      <li className="flex-item mx-1 mt-4 ">
        <Link
          to="professional-summary"
          className="cursor-pointer inline-flex items-center px-4 py-3 border-2 rounded-lg w-full hover:bg-slate-100"
          smooth
          duration={300}
          aria-current="page"
        >
          Summary
        </Link>
      </li>
      <li className="flex-item mx-1 mt-4">
        <Link
          to="technologies"
          className="cursor-pointer inline-flex items-center px-4 py-3 border-2 rounded-lg w-full hover:bg-slate-100"
          smooth
          duration={400}
        >
          Technologies
        </Link>
      </li>
      <li className="flex-item mx-1 mt-4">
        <Link
          to="experience"
          className="cursor-pointer inline-flex items-center px-4 py-3 border-2 rounded-lg w-full hover:bg-slate-100"
          smooth
          duration={500}
        >
          Experiences
        </Link>
      </li>

      <li className="flex-item mx-1 mt-4">
        <Link
          to="education"
          className="cursor-pointer inline-flex items-center px-4 py-3 border-2 rounded-lg w-full hover:bg-slate-100"
          smooth
          duration={600}
        >
          Education
        </Link>
      </li>
      <li className="flex-item mx-1 mt-4">
        <Link
          to="contact"
          className="cursor-pointer inline-flex items-center px-4 py-3 border-2 rounded-lg w-full hover:bg-slate-100"
          smooth
          duration={600}
        >
          Contact
        </Link>
      </li>
    </ul>
  );
}
