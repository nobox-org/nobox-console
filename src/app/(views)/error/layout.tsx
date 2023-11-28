import "./style.scss";

export default function ErrorLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex relative w-full bg-[#000000]">
      <div className="flex flex-col w-full  min-h-screen justify-between px-16 py-5 items-center">
        <div className="auth-bg max-w-[614px]">
          <h1 className="text-center mt-[114px] mb-4 text-[48px] font-[500] text-[#F1F1F1]">
            Something Went Wrong
          </h1>
        </div>
        {children}
      </div>
    </div>
  );
}
