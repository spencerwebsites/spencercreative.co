import Link from 'next/link'

export default function Footer() {
  const footerLinks = [
    {
      title: 'About Us',
      items: [
        { title: 'Projects', href: '/projects' },
        { title: 'Expertise', href: '/expertise' },
        { title: 'Studio', href: '/studio' },
      ],
    },
    {
      title: 'Connect',
      items: [
        { title: 'Contact Us', href: '/contact' },
      ],
    },
  ]
  return (
    <footer role="contentinfo" className="font-sans px-wrap bg-slate-200 pt-12 md:pt-24">
      <div
        // eslint-disable-next-line max-len
        className="w-auto mx-auto grid grid-cols-1 gap-8 md:grid-cols-3 mb-12"
      >
        {footerLinks.map((section, i) => (
          <>
            <nav
              key={`footer-nav-${i}`}
              className="flex flex-col items-start space-y-2"
            >
              <h3 className="text-xl">{section.title}</h3>
              {section.items.map((item) => (
                <Link key={`nav-${i}-link-${item.href}`} href={item.href}>
                  <a className="inline-block">
                    {item.title}
                  </a>
                </Link>
              ))}
            </nav>
          </>
        ))}
      </div>
      <p className="text-xs text-center py-2">
        Copyright &copy; {new Date().getFullYear()}{' '}
        <Link href="/">Spencer Creative LLC</Link>. All rights reserved.
      </p>
    </footer>
  )
}
