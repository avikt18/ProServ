import Image from 'next/image'
import Link from 'next/link'
// import styles from '../styles/Home.module.css'
import Logo from '../public/Logo.svg'
import Button from './Button'

export default function Navbar() {
    return (
        <div className="nav font-secondary max-w-box w-full py-3 flex justify-between items-center">
        <Image src={Logo} alt='logo' />
        <div className="space-x-14">
          <Link href="/">
            <a>Explore</a>
          </Link>
          <Link href="/">
            <a>My Purchases</a>
          </Link>
          <Link href="/">
            <a>Become a Seller</a>
          </Link>
        <Button href="/login" style="bg-black px-5 py-2 font-medium rounded-md text-white">Login</Button>
        <Button href="/" style="bg-black px-5 py-2 font-medium rounded-md text-white">Sign Out</Button>
      </div>
    </div>
  )
};
