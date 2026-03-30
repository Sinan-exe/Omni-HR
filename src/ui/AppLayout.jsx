import MainLayout from "./MainLayout";
import Sidebar from "./Sidebar";

export default function AppLayout() {
  return (
    <div className="h-dvh bg-sidebar flex ">
      <Sidebar />
      <MainLayout />
    </div>
  );
}
