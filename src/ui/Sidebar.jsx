import { AvatarDemo } from "@/components/AvatarDemo";
import {
  IconBeach,
  IconHome,
  IconBriefcase,
  IconBuilding,
  IconTarget,
  IconChartHistogram,
  IconAdjustmentsHorizontal,
} from "@tabler/icons-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const links = [
  {
    id: 1,
    logo: <IconHome size={18} />,
    tag: "Home",
    path: "/",
  },
  {
    id: 2,
    logo: <IconBeach size={18} stroke={1.5} />,
    tag: "Leave Tracker",
    path: "/leavetracker",
  },
  {
    id: 3,
    logo: <IconBriefcase size={18} stroke={1.5} />,
    tag: "Files",
    path: "/files",
  },
  {
    id: 4,
    logo: <IconBuilding size={18} stroke={1.5} />,
    tag: "Organization",
    path: "/organization",
  },
  //   {
  //     id: 5,
  //     logo: <IconChartHistogram size={18} stroke={1.5} />,
  //     tag: "Report",
  //   },
  //   {
  //     id: 6,
  //     logo: <IconAdjustmentsHorizontal size={18} stroke={1.5} />,
  //     tag: "Operations",
  //   },
];

export default function Sidebar() {
  const [activeLink, setActiveLink] = useState(1);
  return (
    <div className="text-sidebar-foreground w-3xs">
      <div className="p-2 w-full h-full">
        <div className="flex flex-col w-full h-full bg-sidebar rounded-xl border border-sidebar">
          <div className="flex gap-2 p-2 font-bold border border-sidebar items-center ">
            <IconTarget size={24} />
            <h3 className="text-xl">Omni HR.</h3>
          </div>
          <div className="flex-1 min-h-0  overflow-auto min-w-0 rounded-md">
            <ul className="flex flex-col gap-2 mt-4 text-sm">
              {links.map((link) => (
                <Link
                  to={link.path}
                  key={link.id}
                  onClick={() => setActiveLink(link.id)}
                  className={`flex p-2 gap-2 cursor-pointer rounded-md items-center border border-sidebar focus:ring focus:ring-sidebar
        ${
          activeLink === link.id
            ? "bg-sidebar-primary text-sidebar-foreground font-semibold"
            : "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground font-light"
        }`}
                >
                  <span>{link.logo}</span>
                  <span className="font-medium">{link.tag}</span>
                </Link>
              ))}
            </ul>
          </div>
          <div className="p-2 mt-2 flex items-center gap-2 border-t border-sidebar  hover:bg-primary text-primary-foreground cursor-pointer rounded-xl">
            <AvatarDemo src="https://i.pravatar.cc/150?img=12" />
            <div className="text-sm">
              <h3>Nithin TN</h3>
              <span className="text-[10px]">nithin@example.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
