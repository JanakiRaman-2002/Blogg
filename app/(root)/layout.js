import { Inter } from 'next/font/google'
import '../globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import { dark,shadesOfPurple,neobrutalism } from '@clerk/themes';
import Topbar from '../../components/Topbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
    
    appearance={{
      baseTheme: dark
    }}>
    <html lang="en">
      <body className={inter.className}>
      <Topbar/>
        <div className="w-full justify-center min-h-screen">
        {children}
        </div>
      </body>
    </html>
    </ClerkProvider>
  )
}
