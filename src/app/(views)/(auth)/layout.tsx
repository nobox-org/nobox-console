import "./style.scss";

export default function AuthLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="p-4 md:p-8">
          <h1 className="text-2xl font-bold mb-4 text-center">Welcome to Nobox</h1>
          {/* <div className="md:w-[517px] max-w-sm"> */}
          <div className="auth_box">

            <div className="bg-white">
              <div className="py-[48px] px-[24px]">

                {children}
              </div>
            </div>
          </div>
        {/* <div className="max-w-sm mx-auto">

        </div> */}
      </div>
    </div>
  )
}
