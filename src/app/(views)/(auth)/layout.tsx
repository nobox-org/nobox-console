import "./style.scss";

export default function AuthLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <div className="p-4 md:p-8">
        <div className="max-w-sm mx-auto">
          <h1 className="text-2xl font-bold mb-4 text-center">Welcome to Nobox</h1>
          {children}
        </div>
      </div>
    </div>
  )
}
