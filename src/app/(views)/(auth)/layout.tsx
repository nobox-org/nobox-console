import "./style.scss";

export default function AuthLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full flex flex-col bg-[#121212] bg-noboxbg min-h-screen bg-contain bg-top">
          {children}
    </div>
  )
}
