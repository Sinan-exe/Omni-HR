import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="m-3 bg-background  rounded-xl w-full">
      <Outlet />
    </div>
  );
}
