import React, { useEffect, useState } from "react";
import Menus from "../data/Admin/Menus";

class ActiveMenuFound extends Error {
  constructor(menu) {
    super();
    this.menu = menu;
  }
}

const useActiveMenu = (pathname) => {
  const [activeMenu, setActiveMenu] = useState(null);

  useEffect(() => {
    !(function () {
      try {
        Menus.forEach((menu) => {
          const menuTitle = menu.name;
          const isMenuTitleActive = pathname.includes(menuTitle);

          if (isMenuTitleActive) {
            const copyMenu = {...menu}
            copyMenu.children = copyMenu.children.filter(
              (child) => child.path === pathname
            );
            throw new ActiveMenuFound(copyMenu);
          }
        });
      } catch (error) {
        setActiveMenu(error?.menu);
      }
    })();
  }, [pathname]);

  return activeMenu
};

export default useActiveMenu;
