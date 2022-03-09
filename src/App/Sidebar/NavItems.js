import {
  BsFillGridFill,
  BsCreditCard2Back,
  BsPeople,
  BsTag,
  BsStar,
} from "react-icons/bs";
import { VscNotebook } from "react-icons/vsc";
import { FaWallet } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { HiOutlineInformationCircle } from "react-icons/hi";
import { RiMoneyDollarBoxLine } from "react-icons/ri";

export const NavItems = [
  {
    name: "Dashboard",
    url: "/",
    icon: <BsFillGridFill />,
  },
  {
    name: "Wallet",
    url: "/Wallet",
    icon: <FaWallet />,
  },
  {
    name: "Cards",
    url: "/Cards",
    icon: <BsCreditCard2Back />,
  },
  {
    name: "FX Center",
    url: "/fx",
    icon: <RiMoneyDollarBoxLine />,
  },
  {
    name: "Beneficiary",
    url: "/Beneficiary",
    icon: <BsPeople />,
  },
  {
    name: "Perks",
    url: "/Perks",
    icon: <BsTag />,
  },
];

export const OtherNavItems = [
  {
    name: "Remove as Default Wallet",
    url: "/",
    icon: <BsStar />,
  },
  {
    name: "View Linked Cards",
    url: "/Wallet",
    icon: <VscNotebook />,
  },
  {
    name: "Statement",
    url: "/Cards",
    icon: <BsCreditCard2Back />,
  },
  {
    name: "Inflow Details",
    url: "/fx",
    icon: <FiSend />,
  },
  {
    name: "Wallet Information",
    url: "/Beneficiary",
    icon: <HiOutlineInformationCircle />,
  },
];
