import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex-center fixed top-0 z-50 w-full border-h-2 border-black-200 py-7 text-white'>
      <div className='flex-between mx-auto w-full max-w-screen-2xl px-6 xs:px-8 sm:px-16'>
        <Link href="/">
          <h1 className='text-xl'>Projects <span className='text-xs'>by Bakar</span></h1>
        </Link>
        <div className='block md:hidden'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  <path fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
</svg>
</div>
<ul className='flex-center gap-x-3 max-md:hidden md:gap-x-10'>
  <li className='body-text text-gradient blue-purple !font-bold'>
    <Link href="https://github.com/itsBakar" target='_blank'>Github</Link>
  </li>
  <li className='body-text text-gradient blue-purple !font-bold'>
    <Link href="https://www.linkedin.com/in/developerssden/" target='_blank'>LinkedIn</Link>
  </li>
</ul>
      </div>
    </nav>
  )
}

export default Navbar