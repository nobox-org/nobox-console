import Sidebar from "@/app/components/Sidebar";
import { MdOutlineNotificationsActive } from "react-icons/md";

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <div className="md:flex justify-center">
        <div className="md:w-4/12 lg:w-2/12">
          <Sidebar />
        </div>
        <div className="md:w-8/12 lg:w-10/12">
          <div className="border-b pt-3 pb-2 pr-8 border-[#E6E8F9] flex justify-end gap-8 w-full">
            <button>
              <MdOutlineNotificationsActive className="text-2xl" />
            </button>
            <div className="flex gap-2 items-center">
              <p>Akintunde</p>
              <div className="rounded-full h-10 w-10 bg-[#D7D7D7] flex items-center justify-center">
                <p className="text-[#000000] text-md">TD</p>
              </div>
            </div>
          </div>
          {children}
        </div>
      </div>
    </section>
  );
}
