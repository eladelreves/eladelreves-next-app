<<<<<<< HEAD
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toolbar } from '../components/_common/toolbar/Toolbar'
import "./globals.css";
=======
import { useRouter } from 'next/router';
import { Blog } from '../components/blog/Blog';
import { config } from '../config';
>>>>>>> dbc1c6ecb9504ce06474327ad82498cdab7f7bef

export default function App() {
  const router = useRouter();

  return (
<<<<<<< HEAD
    <html lang="en">
      <body className={inter.className}>
        <Toolbar></Toolbar>
        {children}
      </body>
    </html>
=======
      <>

          <main>
              <Blog config={config} />
          </main>
          
      </>
>>>>>>> dbc1c6ecb9504ce06474327ad82498cdab7f7bef
  );
}