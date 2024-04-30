import Link from "next/link"

// ! Atomic design of Links and Navbar only recieve one component

const Links = () => {
  const links = [
    {
      title: 'Home',
      path: '/',
    },
    {
      title: 'About',
      path: '/about',
    },
    {
      title: 'Contact',
      path: '/contact',
    },
    {
      title: 'Blog',
      path: '/blog',
    },
  ]
  return (
    <div>
      {links.map((link => (
        <Link href={link.path} key={link.path}>{link.title}</Link>
      )))}
    </div>
  )
}

export default Links