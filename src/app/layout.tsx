import localFont from 'next/font/local';
import './styles/globals.scss'

const Euclid = localFont({
  src: [
    {
      path: './fonts/Euclid Circular A Light.ttf',
      weight: '300',
      style: 'normal'
    },
    {
      path: './fonts/Euclid Circular A Regular.ttf',
      weight: '400',
      style: 'normal'
    },
    {
      path: './fonts/Euclid Circular A Medium.ttf',
      weight: '500',
      style: 'normal'
    },
    {
      path: './fonts/Euclid Circular A SemiBold.ttf',
      weight: '700',
      style: 'normal'
    }
  ]
});

export const metadata = {
  title: "Nobox console",
  description: "Console dashboard for nobox",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={Euclid.className}>
        {children}
      </body>
    </html>
  );
}
