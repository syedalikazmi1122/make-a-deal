import Navbarlist from "./navbarlist";
import Navbarbutton from "./navbarbutton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
// the function sets the navbar
export default function Navbar() {
  return (
    <nav className="flex   justify-evenly  h-16   ">
      <div
        className="flex items-center px-2 justify-center text-2xl font-bold text-gray-800
                dark:text-white"
      >
        <svg
          className="w-6 h-6 mr-2 text-blue-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
          />
        </svg>
        <span className="text-white">Make-a-Deal</span>
      </div>
      <div className="flex  items-center space-x-5 w-fit ">
        <Navbarlist title="Home" />
        <Navbarlist title="About" />
        <Navbarlist title="Contact us " />
        <Navbarlist
          title="New Arrivals "
          navitems={[
            { name: " samsung ", link: "./" },
            { name: " samsung ", link: "./" },
            { name: " samsung ", link: "./" },
            { name: " samsung ", link: "./" },
          ]}
        />
        <Navbarlist
          title="Categories"
          navitems={[
            { name: "Food", link: "#" },
            { name: "Clothes", link: "#" },
            { name: "Electronics", link: "#" },
            { name: "Furniture", link: "#" },
            { name: "sports", link: "#" },
          ]}
        />
      </div>
      <div className="flex items-center space-x-2 ">
        <Navbarbutton title="Login" disabled={false} />
        <Navbarbutton title="Register" />
      </div>
    </nav>
  );
}
