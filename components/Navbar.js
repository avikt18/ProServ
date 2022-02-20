import { motion } from 'framer-motion'
import { useSession, signIn, signOut } from 'next-auth/react'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import Button from './Button'
import Logo from './Logo'

export default function Navbar({ setIsModalOpen }) {
  const [isOpen, setIsOpen] = useState(false)
  const { data: session } = useSession()
  let user = useRef()
  const variants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: 100 },
  }

  useEffect(() => {
    if (session) {
      user.current = session.user
    }
  }, [session])


  return (
    <>
      {/* Navbar for screens < 1024px */}
      <div className="lg:hidden mt-4 w-full flex justify-between"> {/* Logo at top on small screens */}
        <Logo />
        {/* Profile */}
        {session && user && (
          <div className="flex items-center select-none">
            <h2>{user?.current?.name.split(" ")[0]}</h2>
            <motion.img src={user?.current?.image} className='rounded-full w-8 h-8 ml-2' />
          </div>
        )}
      </div>
      <div className={`lg:hidden fixed transition-all  ${!isOpen && 'translate-y-36'} flex-col items-center py-2 px-4 bottom-0 w-full shadow-md ${isOpen && 'backdrop-blur-lg'} bg-transparent z-30 `}>
        <motion.img
          src='/nav-arrow.svg' className={`absolute left-1/2 transform -translate-x-1/2 h-7 scale-[1.3] ${isOpen ? 'rotate-180 -top-6' : '-top-10'} cursor-pointer`} onClick={() => setIsOpen(!isOpen)}
        />
        {!isOpen && <p className="text-xs my-1" onClick={() => setIsOpen(!isOpen)} >Click Here</p>}
        <motion.div
          variants={variants}
          animate={isOpen ? "open" : "closed"}
          className="flex flex-col space-y-2"
        >
          <Link href="/">
            <a>Explore</a>
          </Link>
          {/*Only after Login POV */}
          {/* <Link href="/"> 
            <a>My Orders</a>
          </Link> */}

          <button className='font-medium' onClick={() => setIsModalOpen(true)}>Become a Seller</button>
          {session ?
            <button onClick={() => signOut()} className="bg-black px-5 py-2 font-medium rounded-md text-white">Sign Out</button>
            :
            <button onClick={() => signIn()} className="bg-black px-5 py-2 font-medium rounded-md text-white">Sign In</button>
          }
          {/* <Button href="/" className="bg-black px-5 py-2 font-medium rounded-md text-white">Sign Out</Button> */}
        </motion.div>
      </div>

      {/* Navbar for screens > 1024px */}
      <div className=" hidden font-secondary max-w-box w-full py-3 lg:flex justify-between items-center">
        <Logo />
        <div className="space-x-14 flex items-center">
          <Link href="/">
            <a>Explore</a>
          </Link>
          {/* Seller POV */}
          {/* <Link href="/"> 
            <a>My Orders</a>
          </Link> */}
          {/* Buyer POV */}
          {/* <Link href="/"> 
            <a>My Purchases</a>
          </Link> */}
          <button className='font-medium' onClick={() => setIsModalOpen(true)}>Become a Seller</button>

          {/* Profile */}
          {session && user && (
            <div className="flex items-center select-none">
              <h2>{user?.current?.name.split(" ")[0]}</h2>
              <motion.img src={user?.current?.image} className='rounded-full w-8 h-8 ml-2' />
            </div>
          )}

          {session ?
            <button onClick={() => signOut()} className="bg-black px-5 py-2 font-medium rounded-md text-white">Sign Out</button>
            :
            <button onClick={() => signIn()} className="bg-black px-5 py-2 font-medium rounded-md text-white">Sign In</button>
          }
        </div>
      </div>
    </>
  )
};



