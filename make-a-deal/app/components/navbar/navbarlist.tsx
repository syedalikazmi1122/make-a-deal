"use Client";
import { navbarlistprops } from "@/app/types";

export default function component({ title, navitems }: navbarlistprops) {
  return (
    <div className="relative group">
      <p className="hover:text-gray-300 hover:-translate-x-2 ">{title}</p>
      <ul
        className={
          navitems && navitems.length > 0
            ? "absolute hidden space-y-5 bg-gray-700 p-2 group-hover:block"
            : "hidden"
        }
      >
        {navitems &&
          navitems.map((item) => (
            <li key={item.name}>
              <a
                href={item.link}
                className="px-3 py-2 text-sm font-medium text-white
                          hover:-translate-y-1"
              >
                {item.name}
              </a>
            </li>
          ))}
      </ul>
    </div>
  );
}
