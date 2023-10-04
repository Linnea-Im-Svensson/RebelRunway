import FaSquareInstagram from "react-icons/fa";

import {
  AiFillFacebook,
  AiFillLinkedin,
  AiOutlineInstagram,
  AiFillTwitterSquare,
} from "react-icons/ai";

export default function Footer() {
  return (
    <div className="flex flex-col justify-between border border-black bg-slate-950 p-28 md:flex-row">
      <div>
        <div className="mb-20 text-slate-300 ">
          <p className="mb-4 text-2xl text-slate-200">
            <b>Fashion</b>
          </p>
          <h2>Complete your style with awesome clothes from us.</h2>
        </div>
        <div className="flex">
          <AiFillFacebook className="rounded-full" size={40} color="yellow" />
          <AiOutlineInstagram
            className="rounded-full"
            size={40}
            color="yellow"
          />
          <AiFillLinkedin className="rounded-full" size={40} color="yellow" />
          <AiFillTwitterSquare
            className="rounded-full"
            size={40}
            color="yellow"
          />
        </div>
      </div>

      <div className="mt-20 flex flex-col text-slate-300 md:mt-0 md:flex-row">
        <div>
          <h1 className="mb-4 text-slate-200">
            <b>Company</b>
          </h1>

          <ul className="leading-10">
            <li>About us</li>
            <li>Contact us</li>
            <li>Support</li>
            <li>Instagram</li>
          </ul>
        </div>

        <div className="mt-10 text-slate-300 md:ml-20 md:mt-0">
          <h1 className="mb-4 text-slate-200">
            <b>Länkar</b>
          </h1>
          <ul className="leading-10">
            <li>Länk</li>
            <li>Länk</li>
            <li>Länk</li>
            <li>Länk</li>
          </ul>
        </div>
        <div className="mt-10 text-slate-300 md:ml-20 md:mt-0">
          <h1 className="mb-4 text-slate-200">
            <b>Länkar</b>
          </h1>
          <ul className="leading-10">
            <li>Länk</li>
            <li>Länk</li>
            <li>Länk</li>
            <li>Länk</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
