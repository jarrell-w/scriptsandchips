import Link from "next/link"

const ReadMore = ({mainPost}) => {
  return (
    <Link href={`/post/${mainPost}`} className="bg-black text-white  px-3 py-3 hover:bg-gray-800 cursor-pointer">Read More</Link>
  )
}

export default ReadMore