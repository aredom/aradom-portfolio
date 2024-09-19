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
      <body className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-colors duration-300">
        <header className="bg-white shadow-md">
      
          <div className="">
            <Navbar />
          </div>
        </header>

        <main className="flex-grow container mx-auto py-8 md:py-12 bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 md:p-8 transition-colors duration-300">
            {children}
          </div>
        </main>

        <Footer />
      </body>
    </html>
  )
}