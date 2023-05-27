import './style.scss';

export default function AuthLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section className='flex relative w-full h-screen overflow-hidden'>
      <div className="auth flex w-full min-h-screen justify-center px-16 py-5 items-center">
        <div className="auth-bg w-full md:w-8/12 mt-20">
          <h1 className="text-center mb-4">Welcome to Nobox</h1>
          <div className="w-full">
            {/* <img src="/auth-bg.svg" className="w-full" alt="" /> */}
          </div>
        </div>
        <div className="md:w-3/12 justify-self-center" />
        {children}
      </div>
      <div className='__blob'></div>
      <div className='__blob-2'></div>
      <div className='__blob-3'></div>
    </section>
  );
}