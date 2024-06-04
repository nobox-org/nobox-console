import "./style.scss";

export default function AuthLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-4 text-center">Welcome to Nobox</h1>
        {children}
      </div>
    </div>
  )
}
