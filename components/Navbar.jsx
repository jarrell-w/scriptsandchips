import Link from "next/link"

const Navbar = () => {
  return (
    <nav className="max-w-5xl mx-auto bg-slate-100 flex justify-between px-8 py-4 text-gray-400">
      <div>
        
        <Link href='/'><h1>scripts&chips</h1></Link>
      </div>
      <div className="flex gap-9">
        <Link href='/'>Home</Link>
        <Link href='/allPosts'>Posts</Link>
        <Link href='/about'>About</Link>
        <Link href='/contact'>Contact</Link>
        <Link href='/createPost'>New Post</Link>
      </div>
    </nav>
  )
}

export default Navbar