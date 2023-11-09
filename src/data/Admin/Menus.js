import { LuLayoutDashboard } from "react-icons/lu";
import { FiSettings } from "react-icons/fi";
import { BsCart3 } from "react-icons/bs";
import { PiRocket, PiWallet, PiClockCounterClockwiseDuotone } from "react-icons/pi";
import {BiBuildings} from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";

// import {
//     Educate
// } from "../../assets/svg"

const navbar = [
  {
    id: 1,
    name: "user",
    // icon: <Educate />,
    children: [
      {
        path: "/admin/user/management",
        name: "user management",
        icon: LuLayoutDashboard,
      },
      {
        path: "/admin/user/role",
        name: "role management",
        icon: FiSettings,
      },
    ],
  },
  {
    id: 2,
    name: "master",
    children: [
      {
        path: "/marketplace",
        name: "Project type",
      },
      {
        path: "/upcoming-pages",
        name: "ammetics",
      },
    ],
  },
  {
    id: 3,
    name: "projects",
    children: [
      {
        path: "/overview",
        name: "manage projects",
      },
    ]
  }
];


export default navbar;