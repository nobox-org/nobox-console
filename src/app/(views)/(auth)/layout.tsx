import "./style.scss";

export default function AuthLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-center h-screen bg-black p-4 md:p-8">
      <div>
        <h1 className="text-2xl font-bold mb-4 text-center">Welcome to Nobox</h1>

        <div className="auth_box bg-white py-[48px] px-[24px]">
          {children}
        </div>
      </div>
    </div>
  )
}
