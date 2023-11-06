import { LuLayoutDashboard, LuInbox } from "react-icons/lu";

const navbar = [
  {
    id: 1,
    name: "general",
    children: [
      {
        path: "/",
        name: "dashboard",
        icon: LuLayoutDashboard,
      },
      {
        path: "/",
        name: "inbox",
        icon: LuInbox,
      },
    ],
  },
  {
    id: 2,
    name: "market",
    children: [
      {
        path: "/marketplace",
        name: "marketplace",
        icon: LuLayoutDashboard,
      },
      {
        path: "/upcoming-pages",
        name: "upcoming",
        icon: LuInbox,
      },
      {
        path: "/favorties",
        name: "Favorites",
        icon: LuInbox,
      },
      
    ],
  },
];


export default navbar;