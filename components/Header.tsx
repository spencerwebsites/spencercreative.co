import { useState } from 'react'

import { Transition } from '@headlessui/react'
import Link from 'next/link'

import { useLayout } from './Layout'

const Header = () => {
  const { absoluteHeader } = useLayout()
  const [menuActive, setMenuActive] = useState(false)

  const mainMenu = [
    { title: 'Projects', href: '/projects' },
    { title: 'Expertise', href: '/expertise' },
    { title: 'Studio', href: '/studio' },
  ]

  const altMenu = [
    { title: 'Contact', href: '/contact' },
  ]

  const commonMenuClasses =
    'h-[2px] rounded-full absolute transition-all duration-300'

  return (
    <header
      role="banner"
      // eslint-disable-next-line max-len
      className={`${absoluteHeader ? 'absolute top-0 left-0 right-0 w-full ' : ''}grid grid-cols-[1fr_auto] gap-8 md:grid-cols-[repeat(3,1fr)] px-wrap py-2 font-mono`}
    >
      <div className="self-center">
        <Link href="/">
          <a className="font-bold text-xl">Spencer Creative</a>
        </Link>
      </div>
      <button
        onClick={() => setMenuActive(!menuActive)}
        // eslint-disable-next-line max-len
        className={`${menuActive ? 'z-50 ' : ''}p-2 font-semibold rounded-full md:hidden`}
      >
        <div aria-hidden className="h-5 w-5 relative">
          <div
            // eslint-disable-next-line max-len
            className={`${commonMenuClasses} ${menuActive ? 'rotate-45 top-1/2 -translate-y-1/2 bg-slate-50' : 'top-1/3 bg-dark'} w-full right-0`}
          />
          <div
            // eslint-disable-next-line max-len
            className={`${commonMenuClasses} ${menuActive ? '-rotate-45 w-full top-1/2 -translate-y-1/2 bg-slate-50' : 'w-3/4 top-2/3 bg-dark'} right-0`}
          />
        </div>
        <span className="sr-only">Menu</span>
      </button>
      <nav
        role="navigation"
        aria-label="secondary navigation"
        className="justify-self-center self-center hidden md:block"
      >
        <ul className="flex items-center font-semibold">
          {mainMenu.map((item) => (
            <NavLink
              key={item.href}
              href={item.href}
              title={item.title}
            />
          ))}
        </ul>
      </nav>
      <nav
        role="navigation"
        aria-label="main navigation"
        className="hidden md:block justify-self-end self-center"
      >
        <ul className="flex items-center font-semibold">
          {altMenu.map((item) => (
            <NavLink key={item.href} href={item.href} title={item.title} />
          ))}
        </ul>
      </nav>
    </header>
  )
}

interface NavLinkProps {
  href: string
  title: string
}

function NavLink({ href, title }: NavLinkProps) {
  return (
    <li className="mx-2 md:ml-4 md:mx-0">
      <Link href={href}>{title}</Link>
    </li>
  )
}

export default Header