import MainHeader from "@/ui/MainHeader";
import { useState } from "react";

const headerLinks = ["My Files", "Teams", "Organization"];

function Files() {
  const [activeLink, setActiveLink] = useState("My Files");
  return (
    <div>
      <MainHeader
        Links={headerLinks}
        activeLink={activeLink}
        setActiveLink={setActiveLink}
      />
    </div>
  );
}

export default Files;
