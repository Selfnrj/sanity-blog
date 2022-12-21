import Image from "next/image"
import Link from "next/link"

function Header() {
  return (
    <div className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
      <Image
        className="rounded-full"
        src="https://links.papareact.com/1m8"
        height={50}
        width={50}
        alt="logo"
      />
      <Link href="/">Sign up</Link>
    </div>
  ) 
}

export default Header