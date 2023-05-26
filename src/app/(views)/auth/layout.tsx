export default function AuthLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <div className="auth md:flex min-h-screen justify-center px-16 py-5 items-center">
        <div className="auth-bg md:w-8/12 mt-20">
          <h1 className="text-3xl text-center">Welcome to Nobox</h1>
          <div className="w-full">
            {/* <img src="/auth-bg.svg" className="w-full" alt="" /> */}
          </div>
        </div>
        <div className="md:w-3/12 justify-self-center" />
        {children}
      </div>
    </section>
  );
}
