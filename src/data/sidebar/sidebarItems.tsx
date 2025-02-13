import { FaHome } from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";
import { FaCalendarAlt } from "react-icons/fa";
import { IoBagCheck } from "react-icons/io5";
import { SiGoogleanalytics } from "react-icons/si";
import { MdOutlineAttachMoney } from "react-icons/md";
import { IoSettingsSharp } from "react-icons/io5";

interface SidebarItem {
    id: number;
    title: string;
    icon: React.ReactNode;
    onClick?: () => void;
    slug: string;
}

const sidebarItems1: SidebarItem[] = [
    {
        id: 0,
        title: "Dashboard",
        icon: <FaHome />,
        slug: "/dashboard",
    },
    {
        id: 1,
        title: "Product Analysis",
        icon: <SiGoogleanalytics />,
        slug: "/product",
    },
    {
        id: 2,
        title: "Event Management",
        icon: <FaCalendarAlt />,
        slug: "/events",
    },
    {
        id: 3,
        title: "Expense Tracking",
        icon: <MdOutlineAttachMoney className="text-lg" />,
        slug: "/transactionsPage",
    },
    {
        id: 4,
        title: "Team Management",
        icon: <RiTeamFill />,
        slug: "/employees",
    },
    {
        id: 5,
        title: "Merchandise Store",
        icon: <IoBagCheck />,
        slug: "/merchandise",
    },
    {
        id: 6,
        title: "Settings",
        icon: <IoSettingsSharp />,
        slug: "/settings",
    }
];

export default sidebarItems1;