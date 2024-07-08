
import './globals.css'
import Navbar from './components/navbar'

export const metadata = {
  title: 'Aradom L Portfolio',
  description: 'Web Designer & Developer Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col lg:flex-row min-h-screen overflow-hidden">
      <Navbar />
       
        <main className="flex-1 overflow-auto p-4 lg:p-8 w-full lg:w-3/4">
          {children}
        </main>
      </body>
    </html>
  )
}