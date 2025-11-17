import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: '𝔹𝕠𝕓𝕓𝕪 - Portfolio',
  description: 'Professional portfolio showcasing my skills, experience, and projects',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gradient-to-br from-[#061222] to-[#2D5B75]`}>
        {children}
      </body>
    </html>
  )
}