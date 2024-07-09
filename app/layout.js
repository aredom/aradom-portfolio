import './globals.css'
import Navbar from './components/navbar'
import Footer from './components/footer'

export const metadata = {
  title: 'Aradom L Portfolio',
  description: 'Web Designer & Developer Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-gray-100 text-gray-800">
        <header className="bg-white shadow-md">
          <div className="">
            <Navbar />
          </div>
        </header>

        <main className="flex-grow container mx-auto py-8 md:py-12">
          <div className="bg-white shadow-lg rounded-lg p-6 md:p-8">
            {children}
          </div>
        </main>

        <Footer />
      </body>
    </html>
  )
}