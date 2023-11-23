import { NavLink } from "react-router-dom";
import classNames from "classnames";
import { mainMenu } from "../../../../utils/const";
import More from "./more";
import New from "./new";

export default function Menu() {
  return (
    <nav className="mt-0.5 mb-1 p-1 ">
      {mainMenu.map((menu,index) => (
        <NavLink key={index} to={menu.path} className="py-0 block group">
          {({ isActive }) => (
            <div
              className={classNames( "p-3 rounded-full inline-flex items-center  transition-colors gap-5  group-hover:bg-[#eff3f41a]",
                {"font-bold bg-": isActive,}
              )}>
              <div className="w-[26.25px] h-[26.25px] relative  ">
                {menu?.notification && (<span className="w-[18px] h-[18px] rounded-full bg-blue-500 absolute -top-1.5 -right-1 flex items-center justify-center text-[11px]">{menu?.notification}</span>
)}
              {!isActive && menu.icon.passive}
              {isActive && menu.icon.active}
              </div>
              <div className="pr-4 text-xl"> 
              {menu.title}
              </div>
            </div>

          )}
        </NavLink>

      ))}

       <More/>

        <New/>
    </nav>
  );
}
