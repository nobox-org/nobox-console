import "./style.scss";

export default function AuthLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex relative w-full  bg-[#000000]">
      <div className=" flex w-full  min-h-screen justify-between px-16 py-5 items-center">
        <div className="auth-bg max-w-[614px] ">
          <h1 className="text-center mt-[114px] mb-4 text-[48px] font-[500] text-[#F1F1F1]">
            Welcome to Nobox
          </h1>
          <div className="w-full">
            {/* <img src="/auth-bg.svg" className="w-full" alt="" /> */}
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}
