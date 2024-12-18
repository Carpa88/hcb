import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import Nav from './ui/Nav';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="h-full bg-gray-100" lang="en">
      <body className={`${inter.className} antialiased h-full`}>
        <div className="min-h-full bg-red">
          <Nav />
          <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">Dashboard</h1>
          </div>
        </header>
        <main>
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">{children}</div>
        </main>
            
        </div>  
      </body>
    </html>
  );
}
