import LeaveContent from "@/ui/LeaveContent";
import MainHeader from "@/ui/MainHeader";
import { useState } from "react";

const headerLinks = ["Leave Summary", "Leave Balance", "Leave Requests"];

function LeaveTracker() {
  const [activeLink, setActiveLink] = useState("Leave Summary");
  return (
    <div className="flex flex-col h-full overflow-auto">
      <MainHeader
        Links={headerLinks}
        activeLink={activeLink}
        setActiveLink={setActiveLink}
      />
      <LeaveContent />
    </div>
  );
}

export default LeaveTracker;
