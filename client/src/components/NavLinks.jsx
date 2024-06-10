import { useDashboardContext } from "../pages/DashboardLayout";
import links from "../utils/links";
import { NavLink } from "react-router-dom";

const NavLinks = () => {
  const { toggleSidebar, user } = useDashboardContext("");
  return (
    <>
      <div className="nav-links">
        {/* callback funcn in a map uses pass grammer*/}
        {links.map((link) => {
          // our object has 3 properties
          const { text, path, icon } = link;
          return (
            <NavLink
              to={path}
              key={text}
              className="nav-link"
              onClick={toggleSidebar}
              end
            >
              <span className="icon"> {icon} </span>
              {text}
            </NavLink>
          );
        })}
      </div>
    </>
  );
};
export default NavLinks;
