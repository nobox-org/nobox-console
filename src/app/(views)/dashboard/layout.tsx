import Sidebar from "@/app/components/Sidebar";

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <div className="md:flex justify-center items-center">
        <div className="md:w-3/12">
          <Sidebar />
        </div>
        <div className="md:w-8/12 justify-self-center" />
        {children}
      </div>
    </section>
  );
}
