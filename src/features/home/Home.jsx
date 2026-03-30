import HomeContent from "@/ui/HomeContent";

import MainHeader from "@/ui/MainHeader";
import { useState } from "react";

const headerLinks = ["My Space", "Team", "Organization"];

function Home() {
  const [activeLink, setActiveLink] = useState("My Space");
  return (
    <div className="flex flex-col h-full overflow-auto">
      <MainHeader
        Links={headerLinks}
        activeLink={activeLink}
        setActiveLink={setActiveLink}
      />
      <HomeContent />
    </div>
  );
}

export default Home;
