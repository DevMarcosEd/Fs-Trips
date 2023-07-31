import Image from 'next/image'
import { Inter } from 'next/font/google'
import Trips from './components/Trips'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <h1>Home Page</h1>
      <Trips />
    </>
  )
}
