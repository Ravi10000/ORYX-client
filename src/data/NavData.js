import { LuLayoutDashboard, LuInbox } from "react-icons/lu";
import { FiSettings } from "react-icons/fi";
import { FaClockRotateLeft } from "react-icons/fa6";
import { BsCart3 } from "react-icons/bs";
import { PiRocket, PiWallet, PiClockCounterClockwiseDuotone } from "react-icons/pi";
import {BiBuildings} from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";

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
        path: "/settings",
        name: "settings",
        icon: FiSettings,
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
        icon: BsCart3,
      },
      {
        path: "/upcoming-pages",
        name: "upcoming",
        icon: PiRocket,
      },
      {
        path: "/favorties",
        name: "Favorites",
        icon: AiOutlineHeart,
      },
      
    ],
  },
  {
    id: 3,
    name: "my profile",
    children: [
      {
        path: "/overview",
        name: "overview",
        icon: PiWallet
      },
      {
        path: "/my-properties",
        name: "my properties",
        icon: BiBuildings
      },
      {
        path: "/payouts",
        name: "payouts",
        icon: PiClockCounterClockwiseDuotone
      }
    ]
  }
];


export default navbar;